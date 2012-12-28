define(['exports',
        './lib/hash',
        './lib/hmac'],
function(exports, hash, hmac) {

  exports.createHash = hash.createHash;
  exports.createHmac = hmac.createHmac;

});
