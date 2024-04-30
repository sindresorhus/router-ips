import test from 'ava';
import routerIps from './index.js';

test('main', t => {
	t.true(routerIps.size > 0);
	t.true(routerIps.has('10.0.0.1'));
});
