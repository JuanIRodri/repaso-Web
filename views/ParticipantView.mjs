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

      const titleElement = document.createElement("h2");
      titleElement.textContent = card.titulo;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = card.alias || "Sin descripción proporcionada";

      cardElement.appendChild(titleElement);
      cardElement.appendChild(descriptionElement);

      this.container.appendChild(cardElement);
    });
  }
}
