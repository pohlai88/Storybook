/**
 * Type definitions for @aibos/storybook
 */

export interface StorybookPackageInfo {
  name: string;
  version: string;
  description: string;
}

export interface StorybookBuildOptions {
  outputDir?: string;
  mode?: 'development' | 'production';
  base?: string;
}

export interface StorybookDeploymentConfig {
  platform: 'vercel' | 'netlify' | 'github-pages' | 'custom';
  baseUrl?: string;
  customDomain?: string;
}

