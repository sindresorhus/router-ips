import routerIps_ from './router-ips.json' with {type: 'json'};

const routerIps = new Set(routerIps_);

export default routerIps;
