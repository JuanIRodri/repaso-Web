import Database from "./Database.mjs";

export default class ParticipantModel {
  constructor() {
    this.participants = [];
  }

  async fetchParticipants() {
    try {
      // Simulamos latencia temporal web
      await new Promise(resolve => setTimeout(resolve, 600));

      const rawData = Database.getParticipants();
      
      this.participants = rawData.sort((a, b) => {
        const nameA = a.fullname ? a.fullname.toLowerCase() : "";
        const nameB = b.fullname ? b.fullname.toLowerCase() : "";
        return nameA.localeCompare(nameB);
      });
      return this.participants;
    } catch (error) {
      console.error("Error obteniendo participantes:", error);
      return [];
    }
  }

  getParticipants() {
    return this.participants;
  }
}
