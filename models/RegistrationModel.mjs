import Database from "./Database.mjs";

export default class RegistrationModel {
  constructor() {
    this.registrations = [];
  }

  async saveRegistration(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Emisión de guardado real delegado al Store
        Database.addParticipant(data);

        this.registrations.push(data);
        resolve({ success: true, message: "¡Inscripción exitosa!" });
      }, 1500);
    });
  }
}
