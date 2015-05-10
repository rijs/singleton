// -------------------------------------------
// Exposes a convenient global instance 
// -------------------------------------------
export default function singleton(ripple){
  log('exposing global')
  owner.ripple = ripple
  return ripple
}

import owner from 'utilise/owner'
import log from 'utilise/log'
log = log('[ri/singleton]')