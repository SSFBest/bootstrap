'use strict'

const path = require('path')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const banner = require('./banner.js')

const BUNDLE = process.env.BUNDLE === 'true'
const ESM = process.env.ESM === 'true'
const IIFE = process.env.IIFE === 'true'

let fileDest = `simple${ESM ? '.esm' : '.iife'}`
const external = []
const plugins = [
  babel({
  // Only transpile our source code
    exclude: 'node_modules/**',
    // Include only required helpers
    externalHelpersWhitelist: [
      'defineProperties',
      'createClass',
      'inheritsLoose',
      'defineProperty',
      'objectSpread'
    ]
  })
]
const globals = {
  // 'popper.js': 'Popper'
}

if (BUNDLE) {
  fileDest += '.bundle'
  // Remove last entry in external array to bundle Popper
  external.pop()
  delete globals['popper.js']
  plugins.push(resolve())
}

const rollupConfig = {
  input: path.resolve(__dirname, `../js/index.iife.js`),
  output: {
    banner,
    file: path.resolve(__dirname, `../dist/simple/js/${fileDest}.js`),
    format: 'iife',
    globals
  },
  external,
  plugins
}

if (!ESM) {
  rollupConfig.output.name = 'bootstrap'
}

module.exports = rollupConfig
