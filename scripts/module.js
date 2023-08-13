'use strict';
import {libWrapper} from './shim.js';

//  is all junk from the module tutorial that can be stripped out later.
class OrbitalDecay {
  static ID = 'orbital-decay';

  static FLAGS = {
    TODOS: 'todos'
  }

  static TEMPLATES = {
    TODOLIST: 'modules/${this.ID}/templates/orbital-decay.hbs'
  }

  static log(force, ...args) {
    const shouldLog = force || game.modules.get('_dev-mode')?.api.getPackageDebugValue(this.ID);

    if (shouldLog) {
      console.log(this.ID, '|', ...args);
    }
  }
}

Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(OrbitalDecay.ID);
});
  

Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});
