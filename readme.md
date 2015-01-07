# node-platforms [![Build Status](https://travis-ci.org/sindresorhus/node-platforms.svg?branch=master)](https://travis-ci.org/sindresorhus/node-platforms)

> List of [platforms](http://nodejs.org/api/process.html#process_process_platform) supported by Node


## Install

```
$ npm install --save node-platforms
```


## Usage

```js
var nodePlatforms = require('node-platforms');

console.log(nodePlatforms);
//=> ['darwin', 'freebsd', ...]
```


## Related

See [`archs`](https://github.com/sindresorhus/archs) for a list of processor architectures supported by Node.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
