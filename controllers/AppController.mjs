import NavigationView from "../views/NavigationView.mjs";
import HomeView from "../views/HomeView.mjs";
import ParticipantView from "../views/ParticipantView.mjs";
import InscriptionView from "../views/InscriptionView.mjs";

export default class AppController {
  constructor(participantModel, registrationModel) {
    this.participantModel = participantModel;
    this.registrationModel = registrationModel;
    
    // Contenedor principal de la APP
    const appContainer = document.getElementById("cards");

    // Instanciamos las nuevas mini-vistas separadas
    this.navView = new NavigationView();
    this.homeView = new HomeView(appContainer);
    this.participantView = new ParticipantView(appContainer);
    this.inscriptionView = new InscriptionView(appContainer);

    // Vinculamos los eventos generados por la barra de navegación
    this.navView.bindHome(this.handleHome.bind(this));
    this.navView.bindParticipants(this.handleParticipants.bind(this));
    this.navView.bindInscription(this.handleInscription.bind(this));

    // Renderizamos la pantalla inicial por defecto
    this.handleHome();
  }

  loadDynamicCSS(filename) {
    let link = document.getElementById("dynamic-page-css");
    if (!link) {
      link = document.createElement("link");
      link.id = "dynamic-page-css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    // Si la página no usa css extra lo removemos para limpiar UI
    if (!filename) {
      link.href = "";
    } else {
      link.href = filename;
    }
  }

  handleHome() {
    this.loadDynamicCSS(""); 
    this.homeView.render();
  }

  async handleParticipants() {
    // Apuntamos al nuevo CSS base
    this.loadDynamicCSS("css/participants.css");
    this.participantView.renderLoading();
    
    const participants = await this.participantModel.fetchParticipants();
    this.participantView.render(participants);
  }

  handleInscription() {
    this.loadDynamicCSS("css/inscription.css");
    this.inscriptionView.renderForm(this.handleRegistrationSubmit.bind(this));
  }

  async handleRegistrationSubmit(data) {
    this.participantView.renderLoading();
    
    const response = await this.registrationModel.saveRegistration(data);
    
    if (response.success) {
      this.inscriptionView.renderSuccess();
    }
  }
}
