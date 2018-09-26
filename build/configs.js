const path = require('path')

process.env.NODE_ENV = 'production'
process.env.VUE_ENV = 'browser'

const basePath = path.join(__dirname, '..')
const componentsPath = path.join(basePath, '/components/')
const distPath = path.join(basePath, '/dist/')

module.exports = {
  basePath,
  componentsPath,
  distPath
}
