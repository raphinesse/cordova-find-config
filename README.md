# cordova-find-config [![Build Status](https://travis-ci.org/raphinesse/cordova-find-config.svg?branch=master)](https://travis-ci.org/raphinesse/cordova-find-config)

> Find config.xml in a cordova project

## Install

```
$ npm install --save cordova-find-config
```


## Usage

```js
const findConfig = require('cordova-find-config')
const projectRoot = 'path/to/cordova-app'

// Asynchronous, returns promise of config path
findConfig(projectRoot)
  .then(configPath => /* Use it! */)

// Synchronous, returns config path
const configPath = findConfig.sync(projectRoot))
```

## Why?

From the [cordova docs on config.xml](https://cordova.apache.org/docs/en/latest/config_ref/):

> Note that before version 3.3.1-0.2.0, the file existed at app/www/config.xml, and that having it here is still supported.

This package implements the same logic as cordova to look for a `config.xml`:

1. Use `app/config.xml` if present
2. Else, use `app/www/config.xml` if present


## License

MIT © Raphael von der Grün
