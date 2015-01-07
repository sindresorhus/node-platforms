'use strict';
var test = require('ava');
var nodePlatforms = require('./');

test(function (t) {
	t.assert(nodePlatforms.indexOf(process.platform) !== -1);
	t.end();
});
