# Vue 3 + Vite + Pinia Project

This is a modern Vue 3 project using Vite as the build tool and Pinia for state management.

## Features

- Vue 3 with Composition API
- TypeScript support
- Vite for fast development and building
- Pinia for state management
- Modern UI components

## Prerequisites

- Node.js (version 14.18.0 or higher)
- npm (version 6.14.15 or higher)

## Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/     # Vue components
│   ├── stores/        # Pinia stores
│   ├── App.vue        # Root component
│   └── main.ts        # Application entry point
├── public/            # Static assets
├── index.html         # HTML entry point
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies and scripts
```

## Development

The project uses Vue 3's Composition API with TypeScript for better type safety and developer experience. Pinia is used for state management, providing a simple and intuitive way to manage application state.

## License

MIT
