define(['crypto'],
function(crypto) {

  describe('crypto', function() {
  
    it('should export createHash', function() {
      expect(crypto.createHash).to.be.a('function');
    });
    
    it('should export createHmac', function() {
      expect(crypto.createHmac).to.be.a('function');
    });
    
    describe('MD5 hash', function() {
      var hash = crypto.createHash('md5');
      hash.update('chris:elwood.innosoft.com:secret');
    
      it('should have correct output', function() {
        expect(hash.digest('hex')).to.equal('eb5a750053e4d2c34aa84bbc9b0b6ee7');
      });
    });
    
    describe('MD5 hmac', function() {
      var hmac = crypto.createHmac('md5', 'key');
      hmac.update('value');
    
      it('should have correct output', function() {
        expect(hmac.digest('hex')).to.equal('01433efd5f16327ea4b31144572c67f6');
      });
    });
    
    describe('unknown hash', function() {
      it('should throw', function() {
        expect(function() {
          crypto.createHash('fubar');
        }).to.throw();
      });
    });
    
    describe('unknown hmac', function() {
      it('should throw', function() {
        expect(function() {
          crypto.createHmac('fubar', 'key');
        }).to.throw();
      });
    });
  
  });

  return { name: "test.crypto" }
});
