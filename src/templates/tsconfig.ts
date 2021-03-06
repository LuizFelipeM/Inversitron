const tsconfig = {
  compilerOptions: {
    target: 'es5',
    module: 'commonjs',
    lib: ['ES6'],
    allowJs: true,
    declaration: true,
    declarationMap: true,
    outDir: './build',
    rootDir: './src',
    removeComments: true,
    isolatedModules: true,
    strict: true,
    noImplicitAny: true,
    strictPropertyInitialization: false,
    noImplicitThis: true,
    moduleResolution: 'node',
    types: ['reflect-metadata'],
    esModuleInterop: true,
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
    resolveJsonModule: true
  },
  exclude: [
    'src/**/*.test.js',
    'src/**/*.spec.js',
    'src/**/*.test.ts',
    'src/**/*.spec.ts',
    'dist'
  ]
}

export default tsconfig
