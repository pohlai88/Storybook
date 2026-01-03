import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// PostCSS configuration
// For Storybook builds, use a simpler config without custom plugins
// to avoid build-time issues
const isStorybook = process.env.STORYBOOK || process.env.npm_lifecycle_event?.includes('storybook');
const isTest = process.env.NODE_ENV === 'test' || process.env.VITEST;

// Base plugins that work everywhere
const basePlugins = {
  '@tailwindcss/postcss': {},
  autoprefixer: {},
};

// Only add custom plugin if not in Storybook or test environment
let plugins = basePlugins;

if (!isStorybook && !isTest) {
  try {
    // Dynamic import for custom plugin (only in non-Storybook builds)
    const cleanInvalidCssModule = await import('./scripts/clean-invalid-css.js');
    const cleanInvalidCss = cleanInvalidCssModule.default;
    
    plugins = {
      ...basePlugins,
      [join(__dirname, 'scripts/clean-invalid-css.js')]: cleanInvalidCss(),
    };
  } catch (error) {
    // Fallback to base plugins if custom plugin can't be loaded
    plugins = basePlugins;
  }
}

export default {
  plugins,
};

