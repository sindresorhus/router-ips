import test from 'ava';
import x from './';

test(t => {
	t.true(x.length > 0);
	t.true(x.indexOf('10.0.0.1') !== -1);
});
