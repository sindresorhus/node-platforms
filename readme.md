# node-platforms [![Build Status](https://travis-ci.org/sindresorhus/node-platforms.svg?branch=master)](https://travis-ci.org/sindresorhus/node-platforms)

> List of [platforms](https://nodejs.org/api/process.html#process_process_platform) supported by Node.js


## Install

```
$ npm install --save node-platforms
```


## Usage

```js
const nodePlatforms = require('node-platforms');

console.log(nodePlatforms());
//=> Set {'darwin', 'freebsd'}
```


## API

### nodePlatforms()

Returns a `Set` with platforms.


## Related

- [archs](https://github.com/sindresorhus/archs) - List of processor architectures supported by Node.js


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
