import type { StorybookConfig } from '@storybook/web-components-vite';

/**
 * Storybook Configuration
 * 
 * Based on best practices from:
 * - Vuesion (comprehensive Storybook setup)
 * - Stencil.js (Web Components documentation)
 * 
 * Optimized for Web Components with:
 * - Vite for fast builds
 * - Web Components support
 * - TypeScript support
 * - Accessibility addon
 */

const config: StorybookConfig = {
  stories: [
    '../components/html/examples/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../dist/adapters/vanilla/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials', // Includes docs, controls, actions, viewport, etc.
    '@storybook/addon-interactions',
    '@storybook/addon-a11y', // Accessibility testing
    // Note: @storybook/addon-docs is included in essentials
  ],

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },

  docs: {
    autodocs: 'tag',
  },

  staticDirs: ['../public'],

  // Vite configuration - optimized for Web Components and production
  viteFinal: async (config, { configType }) => {
    // Ensure Web Components are properly handled
    config.build = config.build || {};
    config.build.target = 'esnext';

    // Resolve Storybook internal modules - let Storybook handle this
    // Don't override resolve.alias as it may interfere with Storybook's internal resolution

    // Optimize for Web Components (dev and prod)
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'lit',
    ];

    // Ensure CSS is processed correctly
    config.css = config.css || {};

    // Production-specific optimizations
    if (configType === 'PRODUCTION') {
      // Build optimizations
      config.build = {
        ...config.build,
        minify: 'esbuild', // Faster than terser, good compression
        cssMinify: true, // Minify CSS
        sourcemap: false, // Disable sourcemaps in production
        rollupOptions: {
          ...config.build.rollupOptions,
          output: {
            ...config.build.rollupOptions?.output,
            // Manual chunk splitting for optimal caching and lazy loading
            manualChunks: (id) => {
              // Don't split Storybook internal modules
              if (id.includes('storybook/internal') || id.includes('virtual:')) {
                return undefined;
              }
              
              // Storybook core - split into smaller chunks
              if (id.includes('@storybook/core')) {
                return 'storybook-core';
              }
              if (id.includes('@storybook/web-components') && !id.includes('addon')) {
                return 'storybook-web-components';
              }
              if (id.includes('@storybook/addon-essentials')) {
                return 'storybook-essentials';
              }
              if (id.includes('@storybook/addon-links')) {
                return 'storybook-links';
              }
              
              // Storybook addons (can be lazy loaded) - split individually
              if (id.includes('@storybook/addon-')) {
                const addonName = id.match(/@storybook\/addon-([^/]+)/)?.[1];
                if (addonName) {
                  return `addon-${addonName}`;
                }
                return 'addons';
              }
              
              // Lit vendor chunk (rarely changes, cache long-term)
              if (id.includes('lit') || id.includes('lit-html') || id.includes('lit-element')) {
                return 'lit-vendor';
              }
              
              // Split large vendor dependencies into separate chunks
              if (id.includes('node_modules')) {
                // Radix UI components - split by package
                if (id.includes('@radix-ui/')) {
                  const radixPackage = id.match(/@radix-ui\/([^/]+)/)?.[1];
                  if (radixPackage) {
                    return `radix-${radixPackage}`;
                  }
                  return 'radix-vendor';
                }
                
                // React and React DOM - separate chunk
                if (id.includes('react/') || id.includes('react-dom/')) {
                  return 'react-vendor';
                }
                
                // Other common large dependencies - split individually
                if (id.includes('@testing-library/')) {
                  return 'testing-vendor';
                }
                if (id.includes('zod')) {
                  return 'zod-vendor';
                }
                if (id.includes('clsx') || id.includes('tailwind-merge')) {
                  return 'utils-vendor';
                }
                
                // Handle pnpm's node_modules structure (.pnpm/package@version/node_modules/package)
              // Also handle regular node_modules structure
              let packageName: string | null = null;
              
              // Try pnpm structure first: .pnpm/package@version/node_modules/package
              const pnpmMatch = id.match(/\.pnpm\/([^@]+)@[^/]+\/node_modules\/(@[^/]+\/[^/]+|[^/]+)/);
              if (pnpmMatch) {
                packageName = pnpmMatch[2];
              } else {
                // Try regular node_modules structure
                const nodeModulesMatch = id.match(/node_modules\/(@[^/]+\/[^/]+|[^/]+)/);
                if (nodeModulesMatch) {
                  packageName = nodeModulesMatch[1];
                }
              }
              
              if (packageName) {
                // Split large known dependencies into separate chunks
                const largeDeps: Record<string, string> = {
                  'axe-core': 'vendor-axe',
                  'lodash': 'vendor-lodash',
                  'color-convert': 'vendor-color',
                  'react-colorful': 'vendor-react-colorful',
                  'get-intrinsic': 'vendor-intrinsic',
                  'call-bind': 'vendor-bind',
                };
                
                for (const [dep, chunk] of Object.entries(largeDeps)) {
                  if (packageName.includes(dep)) {
                    return chunk;
                  }
                }
                
                // For scoped packages, split by organization and package
                if (packageName.startsWith('@')) {
                  const parts = packageName.split('/');
                  const org = parts[0].replace('@', '');
                  const pkg = parts[1] || '';
                  // Split large orgs into smaller chunks
                  if (org.length > 8 || ['testing-library', 'storybook'].includes(org)) {
                    return pkg ? `vendor-${org}-${pkg.substring(0, 8)}` : `vendor-${org}`;
                  }
                  return `vendor-${org}`;
                }
                
                // For top-level packages, use first 3-4 characters for better distribution
                const prefix = packageName.substring(0, Math.min(4, packageName.length)).toLowerCase();
                if (/^[a-z]{3,4}/.test(prefix)) {
                  return `vendor-${prefix}`;
                }
                
                // Fallback: use first 2 characters
                const firstTwo = packageName.substring(0, 2).toLowerCase();
                if (/^[a-z]{2}/.test(firstTwo)) {
                  return `vendor-${firstTwo}`;
                }
              }
              
              // Fallback to generic vendor (should be rare)
              return 'vendor-misc';
              }
              
              // Story files - split by category for better code splitting
              if (id.includes('/stories.') || id.includes('/examples/')) {
                if (id.includes('/html/examples/')) {
                  return 'stories-web-components';
                }
                if (id.includes('/dist/adapters/vanilla/')) {
                  return 'stories-vanilla';
                }
                return 'stories';
              }
            },
            // Content-based hashing for cache busting
            chunkFileNames: 'chunks/[name]-[hash].js',
            entryFileNames: 'entry-[hash].js',
            // Optimize asset file names for caching
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name?.split('.') || [];
              const ext = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                return 'assets/images/[name]-[hash][extname]';
              }
              if (/woff2?|eot|ttf|otf/i.test(ext)) {
                return 'assets/fonts/[name]-[hash][extname]';
              }
              return 'assets/[name]-[hash][extname]';
            },
          },
          // Tree-shaking optimization - use default to avoid breaking Storybook
          // Let Vite handle tree-shaking automatically
        },
        // Chunk size warnings
        chunkSizeWarningLimit: 1000, // 1MB warning threshold
        // Asset inlining threshold (small assets inline, larger ones separate)
        assetsInlineLimit: 4096, // 4KB - inline small assets
      };

      // CSS optimization
      config.css = {
        ...config.css,
        devSourcemap: false, // Disable CSS sourcemaps in production
        // CSS code splitting
        codeSplit: true,
        // PostCSS config - use Storybook's default if ours fails
        postcss: config.css.postcss || undefined,
      };


      // Optimize dependencies
      config.optimizeDeps = {
        ...config.optimizeDeps,
        esbuildOptions: {
          ...config.optimizeDeps.esbuildOptions,
          target: 'esnext', // Modern target for better tree-shaking
        },
      };
    }

    return config;
  },
};

export default config;

