# typescript-01

## TypeScript installation

https://github.com/Pezsi/TS-1/issues/1

### Global install

```bash
npm i -g typescript
```

### Project specific local install

1. Initialise the project:

```bash
npm init -y
```

2. Install TS locally:
   (if typescript is not installed globally)

```bash
npm i --save-dev typescript
```

3. Create config file:

```bash
tsc --init
```

---

## Project setup & configuration

https://github.com/Pezsi/TS-1/issues/3

### Project structure:

- `src` folder for TS files
- `dist` folder for compiled JS files
- `index.html` file

### tsconfig.json configuration file

It is used to configure how the TS file is going to be compiled into JS

Basic configuration:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es2015",
    "target": "es5",
    "jsx": "react"
  },
  "include": ["./src/**/*"]
}
```

### Compiling the .ts file to .js file

In the terminal run the following command:

```bash
npm tsc
```
