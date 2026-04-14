export default class InscriptionController {
  constructor(registrationModel, inscriptionView) {
    this.model = registrationModel;
    this.view = inscriptionView;
  }

  init() {
    this.view.renderForm(this.handleRegistrationSubmit.bind(this));
  }

  async handleRegistrationSubmit(data) {
    // Reutilizamos el display para poner loading text en el contenedor sin llamar a views de terceros
    this.view.container.innerHTML = "<p>Procesando registro simulado en base de datos de competencia...</p>";
    
    const response = await this.model.saveRegistration(data);
    
    if (response.success) {
      this.view.renderSuccess();
    } else {
      this.view.container.innerHTML = "<p>Lo lamentamos, ocurrió un error durante el registro.</p>";
    }
  }
}
