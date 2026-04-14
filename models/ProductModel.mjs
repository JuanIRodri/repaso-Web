export default class ProductModel {
  constructor() {
    this.products = [];
  }

  async fetchProducts() {
    try {
      const response = await fetch("https://servicodados.ibge.gov.br/api/v1/produtos/estatisticas");
      if (!response.ok) throw new Error("Error en la respuesta de la red");
      const data = await response.json();
      
      const primerosDoce = data.slice(0, 12);
      this.products = primerosDoce.sort((a, b) => {
        const largoA = (a.titulo ? a.titulo.length : 0) + (a.alias ? a.alias.length : 0);
        const largoB = (b.titulo ? b.titulo.length : 0) + (b.alias ? b.alias.length : 0);
        return largoB - largoA;
      });
      return this.products;
    } catch (error) {
      console.error("Error obteniendo productos:", error);
      return [];
    }
  }

  getProducts() {
    return this.products;
  }
}
