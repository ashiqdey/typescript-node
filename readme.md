# Nodejs with typescript

## Install typescript globally

```
npm i -g typescript
```

## Generate tsconfig file

```
tsc --init
```

## Make change to tsconfig

```
"target": "es6"
"rootDir": "./src"
"outDir": "./dist"
"moduleResolution": "node"
```

## Add package.json file

```
npm init
```

## Install packages

```
npm i express
npm i -D typescript ts-node nodemon @types/node @types/express
```

## Make changes to package.json

```
"scripts": {
  "start": "node dist/app.js",
  "dev": "nodemon src/app.ts",
  "build": "tsc -p ."
},
```
