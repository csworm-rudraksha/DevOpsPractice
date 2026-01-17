# Simple Node.js Project

A simple Node.js project with test setup, ready for GitHub Actions CI/CD.

## Features

- Simple calculator module with basic arithmetic operations
- Jest testing framework configured
- GitHub Actions workflow for CI/CD
- Test coverage reporting

## Installation

```bash
npm install
```

## Usage

Run the application:
```bash
npm start
```

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run tests with coverage:
```bash
npm run test:coverage
```

## GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that will:
- Run tests on push and pull requests
- Test against multiple Node.js versions (18.x and 20.x)
- Generate test coverage reports

To use GitHub Actions:
1. Push this repository to GitHub
2. The CI workflow will automatically run on pushes and pull requests

## Project Structure

```
.
├── src/
│   ├── index.js          # Main application code
│   └── index.test.js     # Test files
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions workflow
├── package.json
└── README.md
```
