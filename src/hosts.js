import { mapValues, sample } from 'lodash';

let resolveUpload = host =>
	host instanceof Array
		? [`https://${ host[0] }/upload.php`, x => `https://${ host[1] }/${ x }`]
		: [`https://${ host }/upload.php`, x => x]
;

export let hosts = mapValues({
	lainfile: 'lainfile.pw',
	is: 'pomf.is',
	mixtape: 'mixtape.moe',
	cat: ['pomf.cat', 'a.pomf.cat'],
	glop: ['glop.me', 'gateway.glop.me/ipfs'],
	catgirls: 'catgirlsare.sexy',
	cocaine: 'cocaine.ninja',
	steamy: 'steamy.moe',
	kyaa: ['kyaa.sg', 'r.kyaa.sg'],
	zxq: ['g.zxq.co', 'y.zxq.co'],
	cuntflaps: 'cuntflaps.me',
	pomfe: ['pomfe.co', 'a.pomfe.co'],
	lesderid: 'pomf.lesderid.net',
	sugoi: 'sugoi.vidyagam.es'
	// comfy: 'comfy.moe', // ?
	// che: 'up.che.moe', //?
}, resolveUpload);

export let getHostPair = host => hosts[host] || resolveUpload(host);

export let randomHost = () => sample(hosts);
