export default class InscriptionView {
  constructor(container) {
    this.container = container;
    this.onNavigateHome = null;
  }

  setNavigationCallback(onHome) {
    this.onNavigateHome = onHome;
  }

  clear() {
    this.container.innerHTML = "";
  }

  renderForm(onSubmit) {
    this.clear();
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    
    formContainer.innerHTML = `
      <div class="form-header">
        <h2>Inscríbete a la Competencia</h2>
        <p>Completa tus datos para reservar tu lugar en la batalla.</p>
      </div>
      <form id="inscription-form">
        <div class="form-group">
          <label for="fullname">Nombre Completo / AKA</label>
          <input type="text" id="fullname" name="fullname" required placeholder="Ej: Aczino / Mauricio">
        </div>

        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" required placeholder="tu@email.com">
        </div>

        <div class="form-group">
          <label for="category">Categoría</label>
          <select id="category" name="category">
            <option value="principiante">Principiante (Underground)</option>
            <option value="intermedio">Intermedio (Regional)</option>
            <option value="avanzado">Avanzado (Internacional)</option>
          </select>
        </div>

        <div class="form-group checkbox-group">
          <input type="checkbox" name="terms" required id="chk-terms">
          <label for="chk-terms">Acepto los términos y el reglamento de la competencia</label>
        </div>

        <button type="submit" class="btn-primary">
          Confirmar Inscripción <i class="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    `;

    this.container.appendChild(formContainer);

    const form = document.getElementById("inscription-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      onSubmit(data);
    });
  }

  renderLoading(message) {
    this.clear();
    const loadingContainer = document.createElement("div");
    loadingContainer.classList.add("status-container", "loading");
    loadingContainer.innerHTML = `
      <div class="spinner"></div>
      <p>${message || "Procesando..."}</p>
    `;
    this.container.appendChild(loadingContainer);
  }

  renderError(message) {
    this.clear();
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("status-container", "error");
    errorContainer.innerHTML = `
      <i class="fa-solid fa-circle-xmark"></i>
      <h2>Ups... algo salió mal</h2>
      <p>${message || "No pudimos procesar tu inscripción."}</p>
      <button class="btn-primary" onclick="location.reload()">Reintentar</button>
    `;
    this.container.appendChild(errorContainer);
  }

  renderSuccess() {
    this.clear();
    const container = document.createElement("div");
    container.classList.add("status-container", "success");
    
    container.innerHTML = `
      <i class="fa-solid fa-circle-check"></i>
      <h2>¡Inscripción Exitosa!</h2>
      <p>Tus datos han sido recibidos. Te esperamos en el escenario para demostrar todo tu nivel.</p>
      <button class="btn-primary" id="btn-back-home">Volver al Inicio</button>
    `;

    this.container.appendChild(container);

    const btnBack = document.getElementById("btn-back-home");
    if (btnBack && this.onNavigateHome) {
      btnBack.addEventListener("click", this.onNavigateHome);
    }
  }
}
