'use strict';
import {libWrapper} from './shim.js';


class OrbitalDecay {
  static ID = 'orbital-decay';

  static FLAGS = {
    ORBITS: 'todos'
  }

  static TEMPLATES = {
    ORBITALDECAY: 'modules/${this.ID}/templates/orbital-decay.hbs'
  }

  static log(force, ...args) {
    const shouldLog = force || game.modules.get('_dev-mode')?.api.getPackageDebugValue(this.ID);

    if (shouldLog) {
      console.log(this.ID, '|', ...args);
    }
  }
}

//  is all junk from the module tutorial that can be stripped out later.
/**
class ToDoListData {
  static getToDosForUser(userId) {
    return game.users.get(userId)?.getFlag(OrbitalDecay.ID, OrbitalDecay.FLAGS.ORBITS);
  }
  static createToDo(userID, toDoData) {
    // generate a random id for this new ToDo and populate the userId
    const newToDo = {
      isDone: false,
      ...toDoData,
      id: foundry.utils.randomID(16),
      userId,
    }
    // construct the update to insert the new ToDo
    const newToDos = {
      [newToDo.id]: newTodo
    }

    // update the database with the new ToDos
    return game.users.get(userId)?.setFlag(OrbitalDecay.ID, OrbitalDecay.FLAGS.ORBITS, newToDos);
  }
}
*/

  
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(OrbitalDecay.ID);
});
  
Hooks.on('getSceneControlButtons', function(uiButtons) {
  OrbitalDecay.log(false, "hook registered");
  let tokenButtons = uiButtons.find(val => {return val.name == "token";})
  if (tokenButtons) {
    tokenButtons.tools.push({
      name: "${OrbitalDecay.ID}.SetOrbit",
      title: game.il8n.localize("OrbitalDecay.ButtonHint"),
      icon: game.i18m.localize("OrbitalDecay.ButtonIcon"),
      button: true,
      onClick: async () => {
        OrbitalDecay.log(false, "The button was clicked!");
      }
    });
  }
});

Hooks.once('init', async function() {
});

Hooks.once('ready', async function() {
});