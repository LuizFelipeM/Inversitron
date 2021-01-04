const packageGenerator = (name: string): unknown => ({
  name,
  version: '1.0.0',
  description: '',
  main: 'index.ts',
  scripts: {
    start: 'npx tron dev',
    build: 'npx tron build',
    test: 'echo "Error: no test specified" && exit 1'
  },
  keywords: [],
  author: '',
  license: 'ISC',
  dependencies: {
    'reflect-metadata': '^0.1.13',
    inversitron: '^0.3.4',
    pg: '^8.5.1'
  },
  devDependencies: {
    '@types/node': '^14.14.10',
    'ts-node': '^9.0.0',
    typescript: '^4.1.2'
  }
})

export default packageGenerator
