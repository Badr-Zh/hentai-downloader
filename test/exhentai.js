import { init } from '../src/plugins/ehentai.js'
const xhr = require('request')
const path = require('path')
const fs = require('fs')
process.env.NODE_ENV = 'development'

init('https://e-hentai.org/g/1216230/a71f86495e/', {}).then(manga => {
  console.log(manga)
}).catch(ex => {
  console.error('ERROR::', ex.message)
})
// cls && babel-node test/exhentai.js --presets env
