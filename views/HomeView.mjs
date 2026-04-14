export default class HomeView {
  constructor(container) {
    this.container = container;
  }

  clear() {
    this.container.innerHTML = "";
  }

  render() {
    this.clear();
    const homeElement = document.createElement("h2");
    homeElement.textContent = "Bienvenido a nuestra página de Inicio!";
    
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = "Explora las pestañas del menú superior para ver participantes y registrarte a la competencia.";
    
    this.container.appendChild(homeElement);
    this.container.appendChild(descriptionElement);
  }
}
