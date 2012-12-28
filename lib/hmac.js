define(['exports'],
function(exports) {
  
  var hmacs = {};
  
  exports.createHmac = function(algo, key) {
    var hmac = hmacs[algo];
    if (!hmac) {
      throw new Error('unsupported algorithm: ' + algo);
    }
    return new hmac(key);
  };
  
  exports.registerHmac = function(algo, hmac) {
    hmacs[algo] = hmac;
  };
  
});
