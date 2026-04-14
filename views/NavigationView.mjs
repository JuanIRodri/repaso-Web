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

  setActive(targetId) {
    [this.btnHome, this.btnParticipants, this.btnInscription].forEach(btn => {
      btn.classList.remove("active");
    });
    const activeBtn = document.getElementById(targetId);
    if (activeBtn) activeBtn.classList.add("active");
  }
}
