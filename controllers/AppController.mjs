export default class AppController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Vinculamos los eventos desde la vista hacia los métodos del controlador
    this.view.bindHome(this.handleHome.bind(this));
    this.view.bindProducts(this.handleProducts.bind(this));

    // Renderizamos la pantalla inicial por defecto
    this.handleHome();
  }

  handleHome() {
    this.view.renderHome();
  }

  async handleProducts() {
    this.view.renderLoading();
    
    // Obtenemos los productos desde el modelo
    const products = await this.model.fetchProducts();
    
    // Le pasamos la data a la vista para que la muestre
    this.view.renderProducts(products);
  }
}
