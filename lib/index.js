'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.upload = exports.randomHost = exports.getHostPair = exports.hosts = undefined;

var _hosts = require('./hosts');

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.hosts = _hosts.hosts;
exports.getHostPair = _hosts.getHostPair;
exports.randomHost = _hosts.randomHost;
exports.upload = _upload2.default;