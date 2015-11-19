var Calendar = require('./calendar');

describe('Testing Calendar Conflicts', function(done){
  describe('Calendar', function(){
    it('initializes a function', function(){
      var calendar = new Calendar();
      chai.expect(typeof calendar).to.be.equal('object');
    });
  });
});
