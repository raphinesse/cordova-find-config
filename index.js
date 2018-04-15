'use strict'

const path = require('path')
const locatePath = require('locate-path')

function candidates(rootDir) {
  return ['', 'www'].map(p => path.join(rootDir, p, 'config.xml'))
}

module.exports = rootDir => locatePath(candidates(rootDir))
module.exports.sync = rootDir => locatePath.sync(candidates(rootDir))
