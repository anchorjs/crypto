define(['exports',
        './lib/hash',
        './lib/hmac',
        'md5'],
function(exports, hash, hmac, md5) {

  exports.createHash = hash.createHash;
  exports.createHmac = hmac.createHmac;
  
  if (md5) {
    hash.registerHash(md5.algo, md5.Hash);
    hmac.registerHmac(md5.algo, md5.Hmac);
  }
  
});
