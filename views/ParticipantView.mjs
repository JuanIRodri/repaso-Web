export default class ParticipantView {
  constructor(container) {
    this.container = container;
  }

  clear() {
    this.container.innerHTML = "";
    this.container.classList.remove("cards"); // Limpiamos clase de grid para no afectar otras vistas
  }

  renderLoading() {
    this.clear();
    this.container.innerHTML = `
      <div class="status-container loading">
        <div class="spinner"></div>
        <p>Conectando con la liga de freestyle...</p>
      </div>
    `;
  }

  render(participants) {
    this.clear();
    if (!participants || participants.length === 0) {
      this.container.innerHTML = `
        <div class="status-container empty fade-in">
          <i class="fa-solid fa-ghost"></i>
          <h2>No hay MCs inscriptos</h2>
          <p>La lista está vacía. ¡Sé el primero en anotarte para la batalla!</p>
        </div>
      `;
      return;
    }

    // Aplicamos la rejilla directamente al contenedor principal para esta vista
    this.container.classList.add("cards");

    participants.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card", "fade-in");
      cardElement.style.animationDelay = `${index * 0.05}s`;

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
