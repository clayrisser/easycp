# easycp

[![GitHub stars](https://img.shields.io/github/stars/codejamninja/easycp.svg?style=social&label=Stars)](https://github.com/codejamninja/easycp)

> Easy child process

Please ★ this repo if you found it useful ★ ★ ★


## Features

* Promise based
* Works with i/o


## Installation

```sh
npm install --save easycp
```


## Dependencies

* [NodeJS](https://nodejs.org)


## Usage

```js
import easycp, { readcp, silentcp } from 'easycp';

// streams to stdout and process returned
easycp('echo hello world').then(process => console.log(process)); // [object Object]

// alternative syntax
easycp('echo', ['hello', 'world']).then(process => console.log(process)); // [object Object]

// streams to stdout (stderr silenced) and process returned
easycp('echo', ['hello', 'world'], { stderr: false }).then(process => console.log(process)); // [object Object]

// stream silenced and process returned
silentcp('echo hello world').then(process => console.log(process)); // [object Object]

// stream silenced and returned as result
readcp('echo hello world').then(result => console.log(result)); // hello world
```


## Support

Submit an [issue](https://github.com/codejamninja/easycp/issues/new)


## Contributing

Review the [guidelines for contributing](https://github.com/codejamninja/easycp/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://github.com/codejamninja/easycp/blob/master/LICENSE)

[Jam Risser](https://codejam.ninja) © 2018


## Changelog

Review the [changelog](https://github.com/codejamninja/easycp/blob/master/CHANGELOG.md)


## Credits

* [Jam Risser](https://codejam.ninja) - Author


## Support on Liberapay

A ridiculous amount of coffee ☕ ☕ ☕ was consumed in the process of building this project.

[Add some fuel](https://liberapay.com/codejamninja/donate) if you'd like to keep me going!

[![Liberapay receiving](https://img.shields.io/liberapay/receives/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
[![Liberapay patrons](https://img.shields.io/liberapay/patrons/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
