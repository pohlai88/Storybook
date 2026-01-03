# Contributing to @aibos/storybook

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Getting Started

1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Storybook.git
   cd Storybook
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```

## Development Workflow

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test your changes:
   ```bash
   npm run build:storybook:prod
   ```

4. Commit your changes:
   ```bash
   git commit -m "feat: add your feature"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a Pull Request

## Code Style

### TypeScript

- Use TypeScript for all new code
- Follow existing code style
- Add type definitions for all exports

### Stories

- Follow Storybook best practices
- Include accessibility testing
- Add documentation comments

### Documentation

- Update README.md for user-facing changes
- Update CHANGELOG.md for all changes
- Add JSDoc comments for public APIs

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## Pull Request Process

1. Ensure your code builds successfully
2. Update documentation as needed
3. Add/update tests if applicable
4. Ensure all checks pass
5. Request review from maintainers

## Questions?

Open an issue or contact the maintainers.

Thank you for contributing! 🎉

