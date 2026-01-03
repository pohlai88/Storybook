/**
 * Storybook Configuration
 * 
 * Exports the Storybook configuration for reuse
 */

import type { StorybookConfig } from '@storybook/web-components-vite';

/**
 * Base Storybook configuration
 * Can be extended or used as-is
 */
export const baseStorybookConfig: Partial<StorybookConfig> = {
    stories: [
        '../components/html/examples/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../dist/adapters/vanilla/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};

/**
 * Helper to create a custom Storybook config
 */
export function createStorybookConfig(
    overrides?: Partial<StorybookConfig>
): StorybookConfig {
    return {
        ...baseStorybookConfig,
        ...overrides,
    } as StorybookConfig;
}

