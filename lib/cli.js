#!/usr/bin/env node
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

var _path = require('path');

var _hosts = require('./hosts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$argv = _slicedToArray(process.argv, 4);

var host = _process$argv[2];
var file = _process$argv[3];

var _ref = host === 'r' || host === 'random' ? (0, _hosts.randomHost)() : (0, _hosts.getHostPair)(host);

var _ref2 = _slicedToArray(_ref, 2);

var service = _ref2[0];
var transform = _ref2[1];


(0, _upload2.default)((0, _path.resolve)(process.cwd(), file), service).then(function (x) {
	return console.log(transform(x));
});