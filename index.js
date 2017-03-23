#! /usr/bin/env node

const fs = require('fs')

fs.writeFileSync(
  './index.js',
  fs.readdirSync('./')
    .filter(fileName => fileName.endsWith('.js') && fileName !== 'index.js')
    .map(fileName => `export * from './${fileName.slice(0, fileName.length - 3)}'\n`)
    .join('')
)
