module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier', // Asegúrate de que Prettier sea el último para que pueda sobrescribir otras configuraciones.
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'jsx-a11y', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json', // Necesario para algunas reglas de TypeScript
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error', // Reporta los problemas de Prettier como errores de ESLint
    'react/prop-types': 'off', // Deshabilitado ya que usamos TypeScript para los tipos de props
    'react/react-in-jsx-scope': 'off', // No es necesario con React 17+ y el nuevo JSX transform
    '@typescript-eslint/explicit-module-boundary-types': 'warn', // Exigir tipos de retorno explícitos
    '@typescript-eslint/no-explicit-any': 'warn', // Advertir sobre el uso de 'any'
    '@typescript-eslint/no-floating-promises': 'warn', // Exigir manejo de promesas flotantes
    '@typescript-eslint/no-misused-promises': 'warn', // Evitar mal uso de promesas en lugares no asíncronos
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Puedes añadir o modificar reglas aquí según las necesidades del proyecto
  },
  ignorePatterns: [
    'node_modules/',
    '.expo/',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
    '.eslintrc.js',
    '.prettierrc.js',
  ],
};
