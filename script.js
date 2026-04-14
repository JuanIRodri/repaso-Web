import ProductModel from "./models/ProductModel.mjs";
import AppView from "./views/AppView.mjs";
import AppController from "./controllers/AppController.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const app = new AppController(new ProductModel(), new AppView());
});
