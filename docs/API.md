# API Reference

## Exports

### Main Export

```typescript
import '@aibos/storybook';
```

Main package entry point. Exports configuration and types.

### Configuration Export

```typescript
import { 
  baseStorybookConfig, 
  createStorybookConfig 
} from '@aibos/storybook/config';
```

#### `baseStorybookConfig`

Base Storybook configuration object. Can be used as-is or extended.

**Type**: `Partial<StorybookConfig>`

**Example**:
```typescript
import { baseStorybookConfig } from '@aibos/storybook/config';

const config = {
  ...baseStorybookConfig,
  // Your customizations
};
```

#### `createStorybookConfig(overrides?)`

Creates a custom Storybook configuration with optional overrides.

**Parameters**:
- `overrides?: Partial<StorybookConfig>` - Configuration overrides

**Returns**: `StorybookConfig`

**Example**:
```typescript
import { createStorybookConfig } from '@aibos/storybook/config';

const config = createStorybookConfig({
  stories: ['../custom-stories/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials'],
});
```

### Types Export

```typescript
import type {
  StorybookPackageInfo,
  StorybookBuildOptions,
  StorybookDeploymentConfig
} from '@aibos/storybook/types';
```

#### `StorybookPackageInfo`

Package information interface.

```typescript
interface StorybookPackageInfo {
  name: string;
  version: string;
  description: string;
}
```

#### `StorybookBuildOptions`

Build configuration options.

```typescript
interface StorybookBuildOptions {
  outputDir?: string;
  mode?: 'development' | 'production';
  base?: string;
}
```

#### `StorybookDeploymentConfig`

Deployment configuration.

```typescript
interface StorybookDeploymentConfig {
  platform: 'vercel' | 'netlify' | 'github-pages' | 'custom';
  baseUrl?: string;
  customDomain?: string;
}
```

### Styles Export

```typescript
import '@aibos/storybook/styles';
```

Imports the complete AIBOS Design System CSS.

## Configuration

### Storybook Configuration

The package includes a production-optimized Storybook configuration:

- **Framework**: `@storybook/web-components-vite`
- **Builder**: Vite (fast builds)
- **Addons**: Essentials, A11y, Interactions, Links
- **Optimizations**: Code splitting, minification, caching

### Build Configuration

Production builds include:
- Code splitting (25+ chunks)
- Minification (esbuild)
- CSS optimization
- Asset optimization
- Content-based hashing

## Scripts

### Development

```bash
npm run dev
```

Starts Storybook development server on port 6006.

### Build

```bash
npm run build
```

Builds TypeScript and Storybook for production.

```bash
npm run build:types
```

Builds only TypeScript files to `dist/`.

```bash
npm run build:storybook:prod
```

Builds Storybook static site to `storybook-static/`.

## File Structure

```
dist/
├── index.js              # Main entry
├── index.d.ts            # Type definitions
├── config/
│   ├── index.js
│   └── index.d.ts
└── types/
    ├── index.js
    └── index.d.ts
```

