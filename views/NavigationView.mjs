export default class NavigationView {
  constructor() {
    this.btnHome = document.getElementById("home");
    this.btnParticipants = document.getElementById("participants");
    this.btnInscription = document.getElementById("inscription");
  }

  bindHome(handler) {
    this.btnHome.addEventListener("click", handler);
  }

  bindParticipants(handler) {
    this.btnParticipants.addEventListener("click", handler);
  }

  bindInscription(handler) {
    this.btnInscription.addEventListener("click", handler);
  }
}
