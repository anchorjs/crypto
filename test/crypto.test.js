define(['crypto'],
function(crypto) {

  describe('crypto', function() {
  
    it('should export createHash', function() {
      expect(crypto.createHash).to.be.a('function');
    });
    
    it('should export createHmac', function() {
      expect(crypto.createHmac).to.be.a('function');
    });
  
  });

  return { name: "test.crypto" }
});
