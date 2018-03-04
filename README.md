# easycp

[![Beerpay](https://beerpay.io/jamrizzi/easycp/badge.svg?style=beer-square)](https://beerpay.io/jamrizzi/easycp)
[![Beerpay](https://beerpay.io/jamrizzi/easycp/make-wish.svg?style=flat-square)](https://beerpay.io/jamrizzi/easycp?focus=wish)
[![GitHub stars](https://img.shields.io/github/stars/jamrizzi/easycp.svg?style=social&label=Stars)](https://github.com/jamrizzi/easycp)

Easy child process

Please &#9733; this repo if you found it useful &#9733; &#9733; &#9733;


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
import easycp from 'easycp';

function async echoHi() {
  const process = await easycp('echo hello world');
  return process;
}

echoHi();
```

```js
import easycp from 'easycp';

function async echoHi() {
  const process = await easycp('echo', ['hello', 'world'], { stderr: false });
  return process;
}

echoHi();
```


## Support

Submit an [issue](https://github.com/jamrizzi/easycp/issues/new)


## Contributing

Review the [guidelines for contributing](https://github.com/jamrizzi/easycp/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://github.com/jamrizzi/easycp/blob/master/LICENSE)

[Jam Risser](https://jam.jamrizzi.com) &copy; 2018


## Changelog

Review the [changelog](https://github.com/jamrizzi/easycp/blob/master/CHANGELOG.md)


## Credits

* [Jam Risser](https://jam.jamrizzi.com) - Author


## Support on Beerpay (actually, I drink coffee)

A ridiculous amount of coffee :coffee: :coffee: :coffee: was consumed in the process of building this project.

[Add some fuel](https://beerpay.io/jamrizzi/easycp) if you'd like to keep me going!

[![Beerpay](https://beerpay.io/jamrizzi/easycp/badge.svg?style=beer-square)](https://beerpay.io/jamrizzi/easycp)
[![Beerpay](https://beerpay.io/jamrizzi/easycp/make-wish.svg?style=flat-square)](https://beerpay.io/jamrizzi/easycp?focus=wish)
