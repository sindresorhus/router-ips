/**
List of common default router IP addresses.

@example
```
import routerIps from 'router-ips';

console.log(routerIps.has('192.168.0.1'));
//=> true
```
*/
declare const routerIps: readonly string[];

export default routerIps;
