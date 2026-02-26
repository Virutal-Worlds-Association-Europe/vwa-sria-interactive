# Contributing to SRIA Portal

Thank you for your interest in contributing to the Virtual Worlds Strategic Research & Innovation Agenda (SRIA) Portal! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Content Guidelines](#content-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Note your browser and operating system**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the proposed enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other projects**

### Content Improvements

The SRIA content is derived from official European research documents. For content-related improvements:

- **Fixing typos and formatting**: Submit a PR directly
- **Clarifying existing content**: Open an issue first to discuss
- **Adding new content**: Requires alignment with official SRIA documentation
- **Translation contributions**: Welcome for internationalization efforts

### Code Contributions

We love code contributions! Here are some areas where you can help:

- **Accessibility improvements**
- **Performance optimizations**
- **Mobile responsiveness enhancements**
- **Documentation improvements**
- **Bug fixes**
- **UI/UX enhancements**

## Development Setup

### Prerequisites

- Node.js 20.0 or higher
- npm 9.0 or higher
- Git

### Local Development

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/vwa-sria-interactive.git
   cd vwa-sria-interactive
   ```

3. **Install dependencies**:
   ```bash
   cd sria-portal
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```
   The site will open at `http://localhost:3000`

5. **Make your changes** and test them locally

6. **Build the project** to ensure no errors:
   ```bash
   npm run build
   ```

7. **Test the production build**:
   ```bash
   npm run serve
   ```

## Pull Request Process

1. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our style guidelines

3. **Commit your changes** with clear, descriptive commit messages:
   ```bash
   git commit -m "Add feature: brief description"
   ```

4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** with:
   - A clear title and description
   - Reference to any related issues
   - Screenshots/recordings for UI changes
   - Confirmation that the build passes

6. **Address review feedback** promptly

7. **Wait for approval** from maintainers

### Pull Request Guidelines

- Keep PRs focused on a single issue or feature
- Update documentation if needed
- Ensure all tests pass
- Follow the existing code style
- Write clear commit messages
- Keep commits atomic and logical

## Style Guidelines

### Code Style

- **TypeScript/JavaScript**: Follow existing patterns in the codebase
- **React Components**: Use functional components with hooks
- **CSS**: Follow BEM naming conventions where applicable
- **Formatting**: Run Prettier before committing

### Markdown Style

- Use ATX-style headers (`#` syntax)
- Keep lines under 120 characters when possible
- Use reference-style links for better readability
- Include alt text for all images

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests when relevant

Examples:
```
Add feedback form to homepage
Fix mobile navigation overflow issue
Update README with deployment instructions
Improve accessibility for screen readers
```

## Content Guidelines

### Documentation Content

- Write in clear, concise English
- Use active voice
- Define technical terms on first use
- Structure content with clear headings
- Include examples where helpful

### SRIA Content

- SRIA content should align with official European Partnership documentation
- For major content changes, open an issue first
- Cite sources appropriately
- Maintain academic tone and rigor

## Questions?

Feel free to:
- Open an issue for general questions
- Join community discussions
- Contact the maintainers

## Recognition

Contributors will be recognized in:
- GitHub's contributor list
- Project documentation (where appropriate)
- Release notes for significant contributions

Thank you for contributing to the Virtual Worlds SRIA Portal! 🚀