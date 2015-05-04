var expect = require('chai').expect
  , singleton = require('./')

describe('singleton', function() {
  it('should create expose global instance (server)', function(){  
    singleton(String)
    expect(global.ripple).to.equal(String)
  })
})