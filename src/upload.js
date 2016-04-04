import { post } from 'request';
import { createReadStream } from 'fs';

let getLink = res => JSON.parse(res).files[0].url;

export default (file, host) =>
	new Promise((resolve, reject) => {
		post({
			url: host,
			formData: {
				// files: [createReadStream('./package.json')]
				'files[]': createReadStream(file)
			}
		}, (err, res, body) =>
			err ? reject(err) : resolve(getLink(body))
		);
	})
