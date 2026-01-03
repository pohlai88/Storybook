import type { Preview } from '@storybook/web-components';
import '../style.css'; // Import design system styles

/**
 * Storybook Preview Configuration
 * 
 * Global settings for all stories
 * Optimized for production performance
 */

// Detect production environment
const isProduction = process.env.NODE_ENV === 'production';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Accessibility testing
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'keyboard',
            enabled: true,
          },
        ],
      },
    },
    // Background colors for light/dark themes
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1a1a1a',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    // Performance optimizations
    ...(isProduction && {
      // Disable dev-only features in production
      docs: {
        source: {
          type: 'code',
        },
      },
    }),
  },
  
  // Global decorators - optimized for production
  decorators: [
    (story) => {
      // Ensure Web Components are loaded
      // Minimal decorator for production performance
      return story();
    },
  ],
  
  // Global args - can be used for default values
  args: {},
  
  // Global argTypes - shared across all stories
  argTypes: {},
};

export default preview;

