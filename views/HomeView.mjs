export default class HomeView {
  constructor(container) {
    this.container = container;
  }

  clear() {
    this.container.innerHTML = "";
  }

  render(onNavigateInscription, onNavigateParticipants) {
    this.clear();
    
    // Hero Section
    const hero = document.createElement("section");
    hero.classList.add("hero");
    hero.innerHTML = `
      <h1>La Batalla Final</h1>
      <p>Entra al círculo, demuestra tu ingenio y conquista el escenario. La competencia de rap más grande de la ciudad te espera.</p>
      <div class="cta-container">
        <button class="btn-hero primary" id="btn-hero-register">
          <i class="fa-solid fa-microphone-lines"></i> Inscribirme Ahora
        </button>
        <button class="btn-hero secondary" id="btn-hero-list">
          Ver Participantes
        </button>
      </div>
    `;
    
    // Contenido adicional
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    homeContent.innerHTML = `
      <h2>¿Estás listo para el freestyle?</h2>
      <p>Nuestra plataforma te permite registrarte oficialmente, consultar la lista de MCs confirmados y prepararte para el gran evento.</p>
    `;
    
    this.container.appendChild(hero);
    this.container.appendChild(homeContent);

    // Event Listeners para navegación interna
    document.getElementById("btn-hero-register").addEventListener("click", onNavigateInscription);
    document.getElementById("btn-hero-list").addEventListener("click", onNavigateParticipants);
  }
}
