# Create Barrel File

## What's a barrel file?

A barrel file is an `index.js` that exports everything from a directory. This allows us to import __named exports__ directly from that directory instead of referencing the filename.

A simple barrel file located in the `src/components` directory.

```javascript
export * from './Container'
export * from './Counter'
export * from './Home'
```

Now, instead of importing modules based on their specific filenames, we can instead import everything we need in one statement.

A simple usage file located in the `src` directory.

```javascript
import { Container, Counter, Home } from './components'
```

## Install

```sh
npm install -g create-barrel-file
```

## Create a Barrel file

Make sure your terminal/command prompt's current directory is __the directory where the barrel file should be created__. Then enter the following command.

```
create-barrel-file
```
