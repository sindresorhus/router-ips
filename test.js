import test from 'ava';
import x from './';

test(t => {
	t.true(x.length > 0);
	t.is(x[0], '10.0.0.1');
});
