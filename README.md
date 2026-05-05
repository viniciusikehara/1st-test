# 1st Project

## Description
This is the 1st Project using a Clean Architecture approach with React and CSS.

## Project Setup

1. Install dependencies: `npm install`
2. Run in development mode: `npm start`
3. Build the project: `npm run build`
4. Lint the source code: `npm run lint`
5. Format code with Prettier: `npm run format`

## Clean Architecture Layers

- **Domain Layer (`src/domain/`)**: Contains entities, value objects, domain services, and repository interfaces. This layer has no dependencies on external layers or libraries and encapsulates all business rules.

- **Application Layer (`src/application/`)**: Contains use cases, DTOs, and application services. It orchestrates the domain objects to fulfill specific use cases without implementing infrastructure details.

- **Infrastructure Layer (`src/infrastructure/`)**: Implements interfaces defined in domain/application layers. This includes DB clients, HTTP clients, external API adapters, etc. It has access to third-party libraries and environment variables.

- **Interfaces Layer (`src/interfaces/`)**: Contains controllers, route handlers, CLI entry points, and other external adapters. This layer handles input validation and orchestrates calls to the application layer.

---

## Note
This project is scaffolded to maintain strict dependency rules and separation of concerns for easier testing, maintainability, and scalability.