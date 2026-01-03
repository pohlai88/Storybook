# npm Package Structure Documentation

## Overview

The Storybook has been transformed into a fully npm package-compatible architecture with proper structure, documentation, and build system.

## Package Structure

```
@aibos/storybook/
├── .storybook/              # Storybook configuration (runtime)
│   ├── main.ts              # Main Storybook config
│   ├── preview.ts           # Preview configuration
│   └── manager.ts           # Manager UI config
├── src/                      # Source TypeScript files (published)
│   ├── index.ts             # Main entry point
│   ├── config/              # Configuration exports
│   │   └── index.ts         # Storybook config utilities
│   └── types/               # Type definitions
│       └── index.ts         # Package types
├── dist/                     # Built TypeScript output (published)
│   ├── index.js             # Main entry
│   ├── index.d.ts           # Type definitions
│   ├── config/              # Config exports
│   └── types/               # Type exports
├── components/               # Component stories (published)
│   └── html/
│       └── examples/        # Story files
├── styles/                   # Design system styles (published)
├── docs/                     # Documentation (published)
│   ├── API.md               # API reference
│   ├── ARCHITECTURE.md      # Architecture docs
│   ├── USAGE.md             # Usage guide
│   └── STORYBOOK_DEPLOYMENT_GUIDE.md
├── .github/                  # GitHub workflows
│   └── workflows/
│       └── publish.yml      # npm publishing workflow
├── package.json              # Package manifest
├── tsconfig.json             # TypeScript config (dev)
├── tsconfig.build.json       # TypeScript config (build)
├── .npmignore                # npm publish exclusions
├── README.md                 # Package documentation
├── CHANGELOG.md              # Version history
├── CONTRIBUTING.md           # Contribution guidelines
└── LICENSE                   # MIT License
```

## Package Configuration

### package.json Highlights

- **Name**: `@aibos/storybook`
- **Version**: `1.0.0`
- **Type**: `module` (ESM)
- **Main**: `./dist/index.js`
- **Types**: `./dist/index.d.ts`
- **Exports**: Multiple entry points for different use cases
- **Files**: Properly configured for npm publishing
- **Scripts**: Build, dev, and publish scripts

### Exports

```json
{
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.js"
  },
  "./config": {
    "types": "./dist/config/index.d.ts",
    "import": "./dist/config/index.js"
  },
  "./styles": "./style.css"
}
```

## Build System

### TypeScript Compilation

```bash
npm run build:types
```

Compiles `src/` to `dist/` with:
- Type definitions (`.d.ts`)
- ES modules output
- Source maps (optional)

### Storybook Build

```bash
npm run build:storybook:prod
```

Builds static Storybook site to `storybook-static/`

### Full Build

```bash
npm run build
```

Builds both TypeScript and Storybook.

## Documentation

### README.md
- Installation instructions
- Quick start guide
- Usage examples
- Deployment options
- Package information

### CHANGELOG.md
- Version history
- Feature additions
- Breaking changes
- Bug fixes

### CONTRIBUTING.md
- Contribution guidelines
- Development workflow
- Code style
- Commit conventions

### API.md
- Complete API reference
- Type definitions
- Usage examples
- Configuration options

### ARCHITECTURE.md
- Package structure
- Build process
- Dependencies
- Configuration

### USAGE.md
- Installation
- Basic usage
- Advanced usage
- Integration examples
- Troubleshooting

## Publishing

### Prerequisites

1. npm account with access to `@aibos` scope
2. `NPM_TOKEN` secret in GitHub
3. Version bump in `package.json`

### Publishing Process

1. **Manual**:
   ```bash
   npm version patch|minor|major
   npm publish --access public
   ```

2. **GitHub Actions**:
   - Create a release on GitHub
   - Or use workflow_dispatch with version input
   - Automatically builds and publishes

### What Gets Published

- `dist/` - Built TypeScript files
- `.storybook/` - Storybook configuration
- `components/` - Component stories
- `styles/` - Design system styles
- `docs/` - Documentation
- `README.md`, `CHANGELOG.md`, `LICENSE`

### What's Excluded

- `node_modules/`
- `storybook-static/` (build output)
- `.github/` (CI/CD)
- Source files (only `dist/` is published)

## Usage as npm Package

### Installation

```bash
npm install @aibos/storybook
```

### Import Configuration

```typescript
import { createStorybookConfig } from '@aibos/storybook/config';

const config = createStorybookConfig({
  // Custom overrides
});
```

### Import Types

```typescript
import type { StorybookBuildOptions } from '@aibos/storybook/types';
```

### Import Styles

```typescript
import '@aibos/storybook/styles';
```

## Benefits

### ✅ npm Package Compatible
- Proper package.json structure
- TypeScript definitions
- Multiple export points
- Proper file inclusion

### ✅ Well Documented
- Comprehensive README
- API documentation
- Usage examples
- Architecture docs

### ✅ Production Ready
- Build system configured
- TypeScript compilation
- Optimized Storybook builds
- CI/CD workflows

### ✅ Developer Friendly
- Clear structure
- Type safety
- Easy to extend
- Well documented

## Next Steps

1. **Test Installation**:
   ```bash
   npm pack
   npm install ./aibos-storybook-1.0.0.tgz
   ```

2. **Publish to npm**:
   ```bash
   npm publish --access public
   ```

3. **Set up npm token** in GitHub secrets

4. **Create first release** on GitHub

## Maintenance

- Update `CHANGELOG.md` for each version
- Bump version in `package.json`
- Tag releases in git
- Update documentation as needed

---

**Status**: ✅ Ready for npm publishing

