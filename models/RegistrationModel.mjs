export default class RegistrationModel {
  constructor() {
    this.registrations = [];
  }

  async saveRegistration(data) {
    // Simulamos un guardado asíncrono y la respuesta de la DB
    return new Promise((resolve) => {
      setTimeout(() => {
        this.registrations.push(data);
        resolve({ success: true, message: "¡Inscripción exitosa!" });
      }, 1500); // 1.5s delay para mostrar loading effect
    });
  }
}
