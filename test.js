import test from 'ava';
import m from './';

test(t => {
	t.true(m().has(process.platform));
});
