# pomfapi

Submit a PR if you want to add a new Pomf host or if an old Pomf host is no longer active.

## Installing

```sh
$ npm install -g pomfapi
```

## Usage

### Uploading to a random pomf host
```sh
$ pomf r [filename]
```

### Uploading to an abbreviated host
```sh
$ pomf mixtape [filename]
```

See [src/hosts.js](https://github.com/edge/pomfapi/blob/master/src/hosts.js) for a list of abbreviated hosts.

### Uploading to any host
```sh
$ pomf pomf.is [filename]
```
