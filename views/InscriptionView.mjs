export default class InscriptionView {
  constructor(container) {
    this.container = container;
  }

  clear() {
    this.container.innerHTML = "";
  }

  renderForm(onSubmit) {
    this.clear();
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    
    const title = document.createElement("h2");
    title.textContent = "Inscríbete a la Competencia";
    formContainer.appendChild(title);

    const form = document.createElement("form");
    
    /* Input Name */
    const nameGroup = document.createElement("div");
    nameGroup.classList.add("form-group");
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Nombre Completo";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "fullname";
    nameInput.required = true;
    nameInput.placeholder = "Ej: Juan Pérez";
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    form.appendChild(nameGroup);

    /* Input Email */
    const emailGroup = document.createElement("div");
    emailGroup.classList.add("form-group");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Correo Electrónico";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.required = true;
    emailInput.placeholder = "juan@example.com";
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    form.appendChild(emailGroup);

    /* Select Category */
    const catGroup = document.createElement("div");
    catGroup.classList.add("form-group");
    const catLabel = document.createElement("label");
    catLabel.textContent = "Categoría a Competir";
    const catSelect = document.createElement("select");
    catSelect.name = "category";
    ["Principiante", "Intermedio", "Avanzado"].forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.toLowerCase();
      opt.textContent = cat;
      catSelect.appendChild(opt);
    });
    catGroup.appendChild(catLabel);
    catGroup.appendChild(catSelect);
    form.appendChild(catGroup);

    /* Input Terms */
    const termsGroup = document.createElement("div");
    termsGroup.classList.add("form-group", "checkbox-group");
    const termsInput = document.createElement("input");
    termsInput.type = "checkbox";
    termsInput.name = "terms";
    termsInput.required = true;
    termsInput.id = "chk-terms";
    const termsLabel = document.createElement("label");
    termsLabel.htmlFor = "chk-terms";
    termsLabel.textContent = "Acepto los términos y condiciones";
    termsGroup.appendChild(termsInput);
    termsGroup.appendChild(termsLabel);
    form.appendChild(termsGroup);

    /* Submit btn */
    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.classList.add("btn-primary");
    btnSubmit.textContent = "Inscribirme Ahora";
    form.appendChild(btnSubmit);

    /* Handler */
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      onSubmit(data);
    });

    formContainer.appendChild(form);
    this.container.appendChild(formContainer);
  }

  renderSuccess() {
    this.clear();
    const container = document.createElement("div");
    container.classList.add("success-container");
    
    const msg = document.createElement("h2");
    msg.textContent = "¡Inscripción Exitosa!";
    
    const p = document.createElement("p");
    p.textContent = "Tus datos han sido recibidos correctamente y ya procesamos tu reserva en el sistema.";

    container.appendChild(msg);
    container.appendChild(p);

    this.container.appendChild(container);
  }
}
