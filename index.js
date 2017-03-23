#! /usr/bin/env node

const fs = require('fs')

fs.writeFileSync(
  './index.js',
  fs.readdirSync('./')
    .filter(fileName => fileName.endsWith('.js'))
    .map(fileName => `export * from './${fileName}'\n`)
    .join('')
)
