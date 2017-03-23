# Create Barrel File

[![npm version](https://badge.fury.io/js/create-barrel-file.svg)](https://badge.fury.io/js/create-barrel-file)

## What's a barrel file?

A barrel file makes it easier to import JavaScript code. It's an `index.js` that exports all __named exports__ from all files in its directory. This allows us to import __named exports__ directly from that directory instead of referencing specific filenames.

## Example

The following is a barrel file located in the `src/components` directory. It says to export everything contained in the files located in the `src/components` directory.

```javascript
export * from './Container'
export * from './Counter'
export * from './Home'
```

The following is a file located in the `src` directory. It imports __named exports__ exported from the `index.js` file located in the `components` directory.

```javascript
import { Container, Counter, Home } from './components'
```

[Another example](https://github.com/timurtu/create-barrel-file/tree/master/example)

## Install

```sh
npm install -g create-barrel-file
```

## Create a Barrel file

Execute the following in __the directory where the barrel file should be created__.

```
create-barrel-file
```

## Add to your Build

In a project directory with a `package.json` install __create-barrel-file__ as a development dependency.

```
npm install -D create-barrel-file
```

Then add a script to your package json.

```json

{
  "scripts": {
    "barrel": "cd some/dir && create-barrel-file && cd ../.."
  }
}

```

Execute with `npm run barrel`.
