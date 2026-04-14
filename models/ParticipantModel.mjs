export default class ParticipantModel {
  constructor() {
    this.participants = [];
  }

  async fetchParticipants() {
    try {
      const response = await fetch("https://servicodados.ibge.gov.br/api/v1/produtos/estatisticas");
      if (!response.ok) throw new Error("Error en la respuesta de la red");
      const data = await response.json();
      
      const primerosDoce = data.slice(0, 12);
      this.participants = primerosDoce.sort((a, b) => {
        const titleA = a.titulo ? a.titulo.toLowerCase() : "";
        const titleB = b.titulo ? b.titulo.toLowerCase() : "";
        return titleA.localeCompare(titleB);
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
