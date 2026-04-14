export default class HomeController {
  constructor(homeView) {
    this.homeView = homeView;
  }
  
  init() {
    this.homeView.render();
  }
}
