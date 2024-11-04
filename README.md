
# Angular Application with Nx, Microfrontend Architecture

Welcome to the **Angular Application Repository**! This project leverages **Nx** for monorepo management, **Angular 18**, and a **microfrontend** architecture. It is configured with **ESLint** for code quality, **Git CI/CD** for continuous integration and deployment, and includes **authentication** and a shared library. The repository is designed for scalability and maintainability.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Code Quality](#code-quality)
- [CI/CD Pipeline](#cicd-pipeline)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository is a comprehensive Angular application managed using **Nx**. It supports microfrontend structures, making it easier to develop, deploy, and maintain modular applications. The project integrates a host application with multiple project modules and a shared library.

## Architecture

- **Monorepo** using Nx for managing multiple Angular projects.
- **Microfrontend** setup with a host app and project modules.
- **Shared Library** for common utilities and components.
- **Authentication** using modern standards (e.g., JWT, OAuth2).
- **ESLint** configured for consistent code quality.
- **Git CI/CD** pipeline for automated testing, building, and deployment.

## Features

- **Nx Workspace** for streamlined project management.
- **Microfrontend** architecture with independent deployable modules.
- **Shared Library** for reusable services, components, and utilities.
- **Authentication** integration.
- **ESLint** configuration for code linting.
- **Git CI/CD** setup for continuous integration and deployment.
- Modular and scalable project design.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Nx CLI](https://nx.dev/getting-started/installation)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   nx serve [host-app-name]
   ```

   Replace `[host-app-name]` with the name of your host application.

### Microfrontend Configuration

Ensure each microfrontend module is configured correctly in the `nx.json` and `angular.json` files for proper integration with the host application.

## Development

### Running Modules Individually

To run a specific microfrontend module, use:

```bash
nx serve [module-name]
```

### Building the Application

To build the host and modules for production:

```bash
nx build [project-name] --prod
```

### Shared Library

Use the shared library for common logic and components:

```bash
nx generate @nrwl/angular:lib shared-lib-name
```

Import shared components or services into your Angular modules as needed.

## Code Quality

**ESLint** is configured for maintaining code standards:

- Run linting for all projects:
  ```bash
  nx lint
  ```

- To run linting on a specific project:
  ```bash
  nx lint [project-name]
  ```

## CI/CD Pipeline

The repository includes a GitHub Actions pipeline (`.github/workflows/ci-cd.yml`):

- **Linting**: Runs `nx lint` to ensure code quality.
- **Unit Tests**: Runs `nx test` for all projects.
- **Build**: Builds the project to verify successful compilation.
- **Deployment**: Deploys the app to the specified environment (can be configured as needed).

Ensure secrets and environment variables required for the CI/CD pipeline are set in your GitHub repository settings.

## Project Structure

```
├── apps
│   ├── host-app
│   ├── identity
│   └── projects
├── libs
│   ├── shared
│   └── auth
├── .github
│   └── workflows
│       └── ci-cd.yml
├── nx.json
├── nx.json
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please follow the standard process:

1. Fork the repository.
2. Create a feature branch.
3. Commit changes and push.
4. Open a pull request.

Refer to `CONTRIBUTING.md` for more details.

## License

This project is licensed under the [MIT License](LICENSE).
