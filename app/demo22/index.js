import Tpl from './index.hbs'

window.onload = function () {
  const body = document.getElementsByTagName('body')
  body[0].innerHTML = Tpl()
  bootstrap()
}

/**
 * MVC 实现
 */
class Model {
  constructor() {
    this.val = 0
    this.views = []
  }

  add(params) {
    this.val += params
  }

  sub(params) {
    this.val -= params
  }

  getVal() {
    return this.val
  }

  register(view) {
    this.views.push(view)
  }

  notify() {
    this.views.forEach(view => {
      view.render(this)
    })
  }
}

class View {
  constructor(controller) {
    this.num = document.getElementById('num')
    this.addBtn = document.getElementById('add')
    this.subBtn = document.getElementById('sub')

    this.addBtn.onclick = controller.increase.bind(controller)
    this.subBtn.onclick = controller.decrease.bind(controller)
  }

  render(model) {
    this.num.innerText = `${model.getVal()} RMB`
  }
}

class Controller {
  constructor() {
    this.model = new Model()
    this.view = new View(this)
  }

  init() {
    this.model.register(this.view)
    this.model.notify()
  }

  increase() {
    this.model.add(1)
    this.model.notify()
  }

  decrease() {
    this.model.sub(1)
    this.model.notify()
  }
}

function bootstrap() {
  const controller = new Controller()
  controller.init()
}
