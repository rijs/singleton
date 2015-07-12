var expect = require('chai').expect
  , owner = require('utilise/owner')
  , singleton = require('./')

describe('Singleton', function() {

  it('should expose global instance', function(){  
    singleton(String)
    expect(owner.ripple).to.equal(String)
  })

})