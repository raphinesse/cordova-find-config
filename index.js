'use strict'

const path = require('path')
const locatePath = require('locate-path')

function candidates(rootDir) {
  return ['config.xml', 'www/config.xml'].map(p => path.join(rootDir, p))
}

module.exports = rootDir => locatePath(candidates(rootDir))
module.exports.sync = rootDir => locatePath.sync(candidates(rootDir))
