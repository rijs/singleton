var expect = require('chai').expect
  , mock = require('mockery')

describe('singleton', function() {

  it('should create expose global instance (server)', function(){  
    singleton = require('./')
    singleton(String)
    expect(global.ripple).to.equal(String)
  })


  it('should create expose global instance (client)', function(){  
    global.window = {}
    mock.enable()
    mock.registerMock('client', true)
    delete require.cache[require.resolve('utilise/client')]
    delete require.cache[require.resolve('./')]

    singleton = require('./')
    singleton(String)
    expect(window.ripple).to.equal(String)
  })

})