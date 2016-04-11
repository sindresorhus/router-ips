import test from 'ava';
import m from './';

test(t => {
	t.true(m.size > 0);
	t.true(m.has('10.0.0.1'));
});
