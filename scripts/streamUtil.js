class StreamUtil {
  static ID = "stream-util";

  static FLAGS = {
    TODOS: 'todos'
  }

  static TEMPLATES = {
    STREAMUTIL: `modules/${this.ID}/templates/stream-util.hbs`
  }

  static log(force, ...args) {
    const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugvalue(this.ID);
    
    if (shouldLog) {
      console.log(this.ID, '|', ...args)
    }
  }
}

class StreamUtilData {
  
  static get allTokensIds(){}

  static createOverlay(){}
}


Hooks.once('activateListeners', data => {
  console.log(data)
})

/**
 * Vou ter que voltar aqui e mudar altas coisas depois
 * @typedef {object}
 * 
 */
