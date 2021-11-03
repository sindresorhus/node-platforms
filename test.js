import process from 'node:process';
import test from 'ava';
import nodePlatforms from './index.js';

test('main', t => {
	t.true(nodePlatforms().has(process.platform));
});
