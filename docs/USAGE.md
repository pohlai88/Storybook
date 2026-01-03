# Usage Guide

## Installation

```bash
npm install @aibos/storybook
```

## Basic Usage

### Running Storybook Locally

```bash
npm run dev
# or
npm run storybook
```

Starts development server at `http://localhost:6006`

### Building for Production

```bash
npm run build:storybook:prod
```

Outputs to `storybook-static/` directory.

## Advanced Usage

### Using Configuration

```typescript
import { createStorybookConfig } from '@aibos/storybook/config';

const customConfig = createStorybookConfig({
  stories: [
    '../my-custom-stories/**/*.stories.ts',
  ],
  addons: [
    '@storybook/addon-essentials',
    // Your custom addons
  ],
});
```

### Extending Stories

```typescript
// In your project
import { stories } from '@aibos/storybook/stories';

// Extend with your own stories
export default {
  ...stories,
  // Your custom stories
};
```

### Using Styles

```typescript
// Import design system styles
import '@aibos/storybook/styles';
```

## Integration Examples

### Next.js Integration

```typescript
// next.config.js
module.exports = {
  // Your Next.js config
  // Storybook can run alongside Next.js
};
```

### Vite Integration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  // Your Vite config
  // Storybook uses its own Vite config
});
```

## Deployment

### Vercel

1. Connect your repository
2. Set build command: `npm run build:storybook:prod`
3. Set output directory: `storybook-static`

### Netlify

1. Connect your repository
2. Set build command: `npm run build:storybook:prod`
3. Set publish directory: `storybook-static`

### GitHub Pages

See [DEPLOYMENT_GUIDE.md](./STORYBOOK_DEPLOYMENT_GUIDE.md)

## Troubleshooting

### Build Issues

If you encounter build issues:

1. Clear cache: `rm -rf node_modules storybook-static`
2. Reinstall: `npm install`
3. Rebuild: `npm run build:storybook:prod`

### TypeScript Errors

Ensure TypeScript is properly configured:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "types": ["node"]
  }
}
```

### Missing Dependencies

Install peer dependencies if needed:

```bash
npm install react react-dom
```

