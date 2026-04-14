import ParticipantModel from "./models/ParticipantModel.mjs";
import RegistrationModel from "./models/RegistrationModel.mjs";

import HomeView from "./views/HomeView.mjs";
import ParticipantView from "./views/ParticipantView.mjs";
import InscriptionView from "./views/InscriptionView.mjs";

import HomeController from "./controllers/HomeController.mjs";
import ParticipantController from "./controllers/ParticipantController.mjs";
import InscriptionController from "./controllers/InscriptionController.mjs";

import AppController from "./controllers/AppController.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // Main Canvas
  const appContainer = document.getElementById("cards");

  // Instancias de Modelos
  const participantModel = new ParticipantModel();
  const registrationModel = new RegistrationModel();

  // Instancias de Vistas
  const homeView = new HomeView(appContainer);
  const participantView = new ParticipantView(appContainer);
  const inscriptionView = new InscriptionView(appContainer);

  // Instancias de Sub-Controladores especializados (Inyección C-M-V)
  const homeCtr = new HomeController(homeView);
  const participantCtr = new ParticipantController(participantModel, participantView);
  const inscriptionCtr = new InscriptionController(registrationModel, inscriptionView);

  // Router Global
  const app = new AppController(homeCtr, participantCtr, inscriptionCtr);
});
