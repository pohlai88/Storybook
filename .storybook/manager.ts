import type { AddonOptions } from '@storybook/manager-api';

/**
 * Storybook Manager Configuration
 * 
 * Production optimizations for the Storybook manager UI
 * This file configures the sidebar, toolbar, and other manager features
 */

// Detect production environment
const isProduction = process.env.NODE_ENV === 'production';

const config: AddonOptions = {
  // Production-specific manager optimizations
  ...(isProduction && {
    // Disable dev tools in production
    enableShortcuts: true,
    showToolbar: true,
  }),
};

export default config;

