import NavigationView from "../views/NavigationView.mjs";

export default class AppController {
  constructor(homeController, participantController, inscriptionController) {
    this.homeController = homeController;
    this.participantController = participantController;
    this.inscriptionController = inscriptionController;

    // View de Navigacion Global
    this.navView = new NavigationView();

    // Bindings de Navigación para el Router
    this.navView.bindHome(this.navigateHome.bind(this));
    this.navView.bindParticipants(this.navigateParticipants.bind(this));
    this.navView.bindInscription(this.navigateInscription.bind(this));

    // Configurar callbacks internos de navegación para el Home
    this.homeController.setNavigationCallbacks(
      this.navigateInscription.bind(this),
      this.navigateParticipants.bind(this)
    );

    // Arranque inicial SPA
    this.navigateHome();
  }

  loadDynamicCSS(filename) {
    let link = document.getElementById("dynamic-page-css");
    if (!link) {
      link = document.createElement("link");
      link.id = "dynamic-page-css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    if (!filename) {
      link.href = "";
    } else {
      link.href = filename;
    }
  }

  navigateHome() {
    this.navView.setActive("home");
    this.loadDynamicCSS("");
    this.homeController.init();
  }

  navigateParticipants() {
    this.navView.setActive("participants");
    this.loadDynamicCSS("css/participants.css");
    this.participantController.init();
  }

  navigateInscription() {
    this.navView.setActive("inscription");
    this.loadDynamicCSS("css/inscription.css");
    this.inscriptionController.init(this.navigateHome.bind(this));
  }
}
