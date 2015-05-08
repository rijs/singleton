// -------------------------------------------
// Exposes a convenient global instance 
// -------------------------------------------
export default function singleton(ripple){
  log('exposing global')
  console.log('client', client)
  ;(client ? window : global).ripple = ripple
  return ripple
}

import client from 'utilise/client'
import log from 'utilise/log'
log = log('[ri/singleton]')