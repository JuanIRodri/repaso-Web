export default class AppView {
  constructor() {
    this.app = document.getElementById("cards");
    this.btnHome = document.getElementById("home");
    this.btnProducts = document.getElementById("products");
  }

  bindHome(handler) {
    this.btnHome.addEventListener("click", handler);
  }

  bindProducts(handler) {
    this.btnProducts.addEventListener("click", handler);
  }

  clear() {
    this.app.innerHTML = "";
  }

  renderHome() {
    this.clear();
    const homeElement = document.createElement("h2");
    homeElement.textContent = "Bienvenido a nuestra página de Inicio!";
    
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = "Haz click en la pestaña Productos para ver nuestros datos.";
    
    this.app.appendChild(homeElement);
    this.app.appendChild(descriptionElement);
  }

  renderLoading() {
    this.clear();
    const loadingElement = document.createElement("p");
    loadingElement.textContent = "Cargando productos...";
    this.app.appendChild(loadingElement);
  }

  renderProducts(products) {
    this.clear();
    if (!products || products.length === 0) {
      const errorElement = document.createElement("p");
      errorElement.textContent = "No logramos obtener productos. Inténtalo más tarde.";
      this.app.appendChild(errorElement);
      return;
    }

    products.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      const titleElement = document.createElement("h2");
      titleElement.textContent = card.titulo;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = card.alias || "Sin descripción proporcionada";

      cardElement.appendChild(titleElement);
      cardElement.appendChild(descriptionElement);

      this.app.appendChild(cardElement);
    });
  }
}
