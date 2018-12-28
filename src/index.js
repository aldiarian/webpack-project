/* css */
import '../src/estilos.scss'

function component() {
    let element = document.createElement('div');
    element.innerHTML = "Torpedoooor!";
    return element;
  }
document.body.appendChild(component());
