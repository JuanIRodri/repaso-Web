export default class InscriptionController {
  constructor(registrationModel, inscriptionView) {
    this.model = registrationModel;
    this.view = inscriptionView;
  }

  init(onNavigateHome) {
    this.view.setNavigationCallback(onNavigateHome);
    this.view.renderForm(this.handleRegistrationSubmit.bind(this));
  }

  async handleRegistrationSubmit(data) {
    this.view.renderLoading("Procesando registro simulado en base de datos de competencia...");
    
    const response = await this.model.saveRegistration(data);
    
    if (response.success) {
      this.view.renderSuccess();
    } else {
      this.view.renderError(response.message || "Lo lamentamos, ocurrió un error durante el registro.");
    }
  }
}
