'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.randomHost = exports.getHostPair = exports.hosts = undefined;

var _lodash = require('lodash');

var resolveUpload = function resolveUpload(host) {
	return host instanceof Array ? ['https://' + host[0] + '/upload.php', function (x) {
		return 'https://' + host[1] + '/' + x;
	}] : ['https://' + host + '/upload.php', function (x) {
		return x;
	}];
};

var hosts = exports.hosts = (0, _lodash.mapValues)({
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

var getHostPair = exports.getHostPair = function getHostPair(host) {
	return hosts[host] || resolveUpload(host);
};

var randomHost = exports.randomHost = function randomHost() {
	return (0, _lodash.sample)(hosts);
};