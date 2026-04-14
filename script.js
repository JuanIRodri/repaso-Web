import ParticipantModel from "./models/ParticipantModel.mjs";
import RegistrationModel from "./models/RegistrationModel.mjs";
import AppController from "./controllers/AppController.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const app = new AppController(new ParticipantModel(), new RegistrationModel());
});
