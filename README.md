# @aibos/storybook

> Interactive component documentation and playground for the AIBOS Design System

[![npm version](https://img.shields.io/npm/v/@aibos/storybook.svg)](https://www.npmjs.com/package/@aibos/storybook)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Storybook](https://img.shields.io/badge/Storybook-8.6.15-FF4785?logo=storybook)](https://storybook.js.org)

## 📦 Installation

```bash
npm install @aibos/storybook
# or
pnpm add @aibos/storybook
# or
yarn add @aibos/storybook
```

## 🚀 Quick Start

### Development

Start the Storybook development server:

```bash
npm run dev
# or
npm run storybook
```

This will start Storybook on `http://localhost:6006`

### Build

Build Storybook for production:

```bash
npm run build:storybook:prod
```

The built files will be in the `storybook-static/` directory.

## 📚 Documentation

### Storybook Configuration

The Storybook configuration is located in `.storybook/`:

- **`main.ts`** - Main Storybook configuration with Vite builder
- **`preview.ts`** - Global decorators and parameters
- **`manager.ts`** - Manager UI configuration

### Stories

Stories are located in:
- `components/html/examples/**/*.stories.ts` - Web Components stories
- `dist/adapters/vanilla/**/*.stories.ts` - Vanilla adapter stories

### Components

The package includes:
- **Web Components** - HTML/CSS components with Lit
- **React Components** - React wrappers (if React is installed)
- **Design Tokens** - CSS custom properties and design tokens
- **Styles** - Complete CSS framework

## 🎨 Features

- ✅ **Web Components Support** - Built with `@storybook/web-components-vite`
- ✅ **TypeScript** - Full TypeScript support
- ✅ **Accessibility** - Built-in a11y testing with `@storybook/addon-a11y`
- ✅ **Auto-Docs** - Automatic documentation generation
- ✅ **Production Optimized** - Code splitting, minification, and caching
- ✅ **Dark Theme** - Dark-first theme support
- ✅ **Responsive** - Mobile and desktop optimized

## 📖 Usage

### As a Package

```typescript
import { StorybookConfig } from '@aibos/storybook/config';

// Use Storybook configuration
const config: StorybookConfig = {
  // Your custom config
};
```

### As Documentation Site

1. Install the package
2. Run `npm run build:storybook:prod`
3. Deploy the `storybook-static/` directory to any static hosting

### Integration with Design System

This Storybook is designed to work with `@aibos/design-system`:

```bash
npm install @aibos/design-system @aibos/storybook
```

## 🏗️ Architecture

```
@aibos/storybook/
├── .storybook/          # Storybook configuration
├── components/          # Component stories and examples
├── dist/                # Built TypeScript files
├── styles/              # Design system styles
├── storybook-static/    # Built Storybook (for deployment)
└── docs/                # Additional documentation
```

## 🔧 Configuration

### Environment Variables

- `NODE_ENV` - Set to `production` for production builds
- `STORYBOOK_BASE_URL` - Base URL for deployed Storybook

### Build Options

The package includes optimized production builds with:
- Code splitting (25+ chunks)
- Minification (esbuild)
- CSS optimization
- Asset optimization
- Content-based hashing

## 📦 Package Exports

```typescript
// Main entry
import '@aibos/storybook';

// Configuration
import { StorybookConfig } from '@aibos/storybook/config';

// Stories
import { stories } from '@aibos/storybook/stories';

// Components
import { components } from '@aibos/storybook/components';

// Styles
import '@aibos/storybook/styles';
```

## 🚢 Deployment

### Vercel

```json
{
  "buildCommand": "npm run build:storybook:prod",
  "outputDirectory": "storybook-static"
}
```

### Netlify

```toml
[build]
  command = "npm run build:storybook:prod"
  publish = "storybook-static"
```

### GitHub Pages

See [docs/STORYBOOK_DEPLOYMENT_GUIDE.md](docs/STORYBOOK_DEPLOYMENT_GUIDE.md)

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build TypeScript and Storybook |
| `npm run build:storybook:prod` | Build Storybook for production |
| `npm run lint` | Lint TypeScript files |
| `npm run format` | Format code with Prettier |

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines first.

## 📄 License

MIT © AI-BOS

## 🔗 Links

- [GitHub Repository](https://github.com/pohlai88/Storybook)
- [Design System Package](https://www.npmjs.com/package/@aibos/design-system)
- [Storybook Documentation](https://storybook.js.org)
- [Deployment Guide](docs/STORYBOOK_DEPLOYMENT_GUIDE.md)

## 📊 Bundle Size

- **Total**: ~2.7 MB
- **Chunks**: 25 (optimized code splitting)
- **Largest Chunk**: 959 KB (Storybook core)
- **Gzipped**: ~800 KB

## 🎯 Performance

- ✅ Code splitting for optimal loading
- ✅ Lazy loading of addons
- ✅ Optimized vendor chunks
- ✅ Content-based caching
- ✅ Production minification

---

**Made with ❤️ by AI-BOS**
