'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = require('request');

var _fs = require('fs');

var getLink = function getLink(res) {
	return JSON.parse(res).files[0].url;
};

exports.default = function (file, host) {
	return new Promise(function (resolve, reject) {
		(0, _request.post)({
			url: host,
			formData: {
				// files: [createReadStream('./package.json')]
				'files[]': (0, _fs.createReadStream)(file)
			}
		}, function (err, res, body) {
			return err ? reject(err) : resolve(getLink(body));
		});
	});
};