define(['exports'],
function(exports) {
  
  var hmacs = {};
  
  exports.createHmac = function(algo) {
    var hmac = hmacs[algo];
    if (!hmac) {
      throw new Error('unsupported algorithm: ' + algo);
    }
    return new hmac();
  };
  
  exports.registerHmac = function(algo, hmac) {
    hmacs[algo] = hmac;
  };
  
});
