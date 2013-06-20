# Anchor/Crypto

The Crypto module provides support for cryptographic operations.

## Install

##### component

    $ component install anchorjs/crypto

##### volo

    $ volo add anchorjs/crypto

## Usage

#### Hash

Create hash digests of data.

```javascript
var md5sum = crypto.createHash('md5');
md5sum.update('Hello');
md5sum.update('World');
var d = md5sum.digest('hex');
```

#### Hmac

Create cryptographic hmac content.

```javascript
var md5hmac = crypto.createHmac('md5', 'key');
md5hmac.update('Hello');
md5hmac.update('World');
var d = md5hmac.digest('hex');
```

## Compatibility

##### component

This module uses the [AMD](https://github.com/amdjs/amdjs-api) format.  To
include in component builds, use [component-amd](https://github.com/jaredhanson/component-amd):

    component build -u component-amd

##### Node

This module (partially) conforms to the interface exported by Node's [Crypto](http://nodejs.org/api/crypto.html)
module.

## Tests

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari
    
Headless tests can be executed directly from a terminal:
    
    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
