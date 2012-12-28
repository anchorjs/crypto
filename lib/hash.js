define(['exports'],
function(exports) {
  
  var hashes = {};
  
  exports.createHash = function(algo) {
    var hash = hashes[algo];
    if (!hash) {
      throw new Error('unsupported algorithm: ' + algo);
    }
    return new hash();
  };
  
  exports.registerHash = function(algo, hash) {
    hashes[algo] = hash;
  };
  
});
