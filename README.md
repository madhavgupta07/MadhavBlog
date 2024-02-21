# Blog Website

This is a simple blog website with separate frontend and backend components. The frontend is built using React and Vite, while the backend is powered by Node.js and Express, with data stored in MongoDB using Mongoose.

## Frontend

### Installation

```bash
cd frontend
npm install
```

### Usage

To start the development server:

```bash
npm run dev
```

To build the production-ready application:

```bash
npm run build
```

To lint the code:

```bash
npm run lint
```

To preview the production build:

```bash
npm run preview
```

### Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for the browser and Node.js
- [react](https://reactjs.org/): JavaScript library for building user interfaces
- [react-dom](https://reactjs.org/docs/react-dom.html): DOM-specific methods for React
- [react-icons](https://react-icons.github.io/react-icons/): SVG icons for popular icon packs
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): Declarative routing for React.js

### Dev Dependencies

- [@types/react](https://www.npmjs.com/package/@types/react): TypeScript types for React
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): TypeScript types for React DOM
- [@vitejs/plugin-react](https://vitejs.dev/guide/features.html#react): Vite plugin for React support
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): PostCSS plugin to parse CSS and add vendor prefixes
- [eslint](https://eslint.org/): Pluggable JavaScript linter
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): React-specific linting rules for ESLint
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ESLint rules for React hooks
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): ESLint rules for React fast refresh
- [postcss](https://www.npmjs.com/package/postcss): Tool for transforming styles with JavaScript plugins
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework
- [vite](https://vitejs.dev/): Next-generation frontend tooling

## Backend

### Installation

```bash
cd backend
npm install
```

### Usage

To start the server:

```bash
npm start
```

To start the server with nodemon for development:

```bash
npm run start dev
```

### Dependencies

- [bcrypt](https://www.npmjs.com/package/bcrypt): Library for hashing passwords
- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Parse Cookie header and populate req.cookies
- [cors](https://www.npmjs.com/package/cors): Middleware to enable CORS with various options
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file
- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Implementation of JSON Web Tokens
- [mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js
- [multer](https://www.npmjs.com/package/multer): Middleware for handling `multipart/form-data`
- [nodemon](https://nodemon.io/): Monitor for changes in your application and automatically restart the server
- [path](https://nodejs.org/api/path.html): Provides utilities for working with file and directory paths
