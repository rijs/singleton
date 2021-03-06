var expect = require('chai').expect
  , owner = require('utilise/owner')
  , singleton = require('./')

describe('Singleton', function() {

  var original = owner.ripple

  beforeEach(function(){
    delete owner.ripple
  })

  afterEach(function(){
    owner.ripple = original
  })
  
  it('should expose global instance', function(){  
    expect(owner.ripple).to.not.be.ok
    singleton(String)
    expect(owner.ripple).to.equal(String)
  })

  it('should not overwrite existing global', function(){  
    expect(owner.ripple).to.not.be.ok
    singleton(String)
    expect(owner.ripple).to.equal(String)
    singleton(Date)
    expect(owner.ripple).to.equal(String)
  })

})