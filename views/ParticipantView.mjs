export default class ParticipantView {
  constructor(container) {
    this.container = container;
  }

  clear() {
    this.container.innerHTML = "";
  }

  renderLoading() {
    this.clear();
    const loadingElement = document.createElement("p");
    loadingElement.textContent = "Cargando datos de participantes...";
    this.container.appendChild(loadingElement);
  }

  render(participants) {
    this.clear();
    if (!participants || participants.length === 0) {
      const errorElement = document.createElement("p");
      errorElement.textContent = "No logramos obtener participantes. Inténtalo más tarde.";
      this.container.appendChild(errorElement);
      return;
    }

    participants.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");

      cardElement.innerHTML = `
        <div class="card-header">
          <i class="fa-solid fa-microphone"></i>
        </div>
        <div class="card-body">
          <h2>${card.fullname}</h2>
          <p class="email">${card.email || "Sin correo"}</p>
        </div>
        <div class="card-footer">
          <span class="badge">${card.category || "Inscripto"}</span>
        </div>
      `;

      this.container.appendChild(cardElement);
    });
  }
}
