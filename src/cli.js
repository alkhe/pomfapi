import upload from './upload';
import { resolve } from 'path';
import { randomHost, getHostPair } from './hosts';

let [,, host, file] = process.argv;

let [service, transform] = host === 'r' || host === 'random'
	? randomHost()
	: getHostPair(host);

upload(resolve(process.cwd(), file), service)
	.then(x => console.log(transform(x)));
