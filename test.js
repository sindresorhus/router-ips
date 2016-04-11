import test from 'ava';
import x from './';

test(t => {
	t.truthy(x.size);
	t.true(x.has('10.0.0.1'));
});
