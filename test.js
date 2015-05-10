var expect = require('chai').expect
  , mock = require('mockery')
  , owner = require('utilise/owner')
  , singleton = require('./')

describe('singleton', function() {

  it('should expose global instance', function(){  
    singleton(String)
    expect(owner.ripple).to.equal(String)
  })

})