# Architecture Documentation

## Package Structure

```
@aibos/storybook/
├── .storybook/              # Storybook configuration
│   ├── main.ts              # Main Storybook config
│   ├── preview.ts           # Preview configuration
│   └── manager.ts           # Manager UI config
├── src/                      # Source TypeScript files
│   ├── index.ts             # Main entry point
│   ├── config/              # Configuration exports
│   └── types/                # Type definitions
├── components/               # Component stories
│   └── html/
│       └── examples/         # Story files
├── dist/                     # Built TypeScript output
├── styles/                   # Design system styles
├── storybook-static/          # Built Storybook (deployment)
└── docs/                     # Documentation
```

## Package Exports

### Main Export (`@aibos/storybook`)

```typescript
import '@aibos/storybook';
// Exports configuration and types
```

### Configuration Export (`@aibos/storybook/config`)

```typescript
import { baseStorybookConfig, createStorybookConfig } from '@aibos/storybook/config';
```

### Types Export (`@aibos/storybook/types`)

```typescript
import type { StorybookPackageInfo, StorybookBuildOptions } from '@aibos/storybook/types';
```

### Styles Export (`@aibos/storybook/styles`)

```typescript
import '@aibos/storybook/styles';
```

## Build Process

1. **TypeScript Compilation** (`build:types`)
   - Compiles `src/` to `dist/`
   - Generates type definitions
   - Outputs ES modules

2. **Storybook Build** (`build:storybook:prod`)
   - Builds Storybook static site
   - Optimizes for production
   - Outputs to `storybook-static/`

## Dependencies

### Peer Dependencies
- `react` (optional) - For React component stories
- `react-dom` (optional) - For React component stories

### Dev Dependencies
- Storybook packages (8.6.15)
- TypeScript (5.6.0)
- Build tools (Vite, PostCSS, Tailwind)

## Configuration

### Storybook Configuration

Located in `.storybook/main.ts`:
- Vite builder for fast builds
- Web Components framework
- Production optimizations
- Code splitting strategy

### TypeScript Configuration

- `tsconfig.json` - Development configuration
- `tsconfig.build.json` - Build configuration

## Deployment

The package can be:
1. **Published to npm** - As a reusable package
2. **Deployed as static site** - Using `storybook-static/`
3. **Integrated into projects** - Via npm install

## Usage Patterns

### Pattern 1: Standalone Documentation Site

```bash
npm install @aibos/storybook
npm run build:storybook:prod
# Deploy storybook-static/
```

### Pattern 2: Integrated Package

```typescript
import { createStorybookConfig } from '@aibos/storybook/config';

const config = createStorybookConfig({
  // Custom overrides
});
```

### Pattern 3: Story Reuse

```typescript
import { stories } from '@aibos/storybook/stories';
// Use stories in your own Storybook
```

