# Nodejs with typescript

This template conatins nodejs with typescript, typeorm, eslint, prettier, and unit test with jest.

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

# 2. ORM

## install packages

```
npm install typeorm
npm install reflect-metadata
```

## add reflect-metadata global place of your app eg. app.js

```
import "reflect-metadata"
```

## add to tsconfig

```
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
"strictPropertyInitialization": false
```

## init typeorm config

```
npx typeorm init
```
