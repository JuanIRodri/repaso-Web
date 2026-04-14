export default class Database {
  static getParticipants() {
    let savedData = JSON.parse(localStorage.getItem('rap_participants'));

    // Validación de esquema: si el primer elemento no tiene 'fullname', los datos son obsoletos y los reiniciamos
    const isOldSchema = savedData && savedData.length > 0 && !savedData[0].fullname;

    // Si la DB persistente esta vacia o es el esquema viejo, lo reiniciamos
    if (!savedData || savedData.length === 0 || isOldSchema) {
      savedData = [
        { fullname: "Aczino", email: "aca-aczino@freestyle.com", category: "avanzado" },
        { fullname: "Chuty", email: "chuty-king@freestyle.com", category: "avanzado" },
        { fullname: "Skone", email: "skone-punch@freestyle.com", category: "avanzado" },
        { fullname: "Wos", email: "wos-valentin@freestyle.com", category: "avanzado" },
        { fullname: "Trueno", email: "trueno-bio@freestyle.com", category: "avanzado" },
        { fullname: "Papo", email: "la-bestia@freestyle.com", category: "avanzado" },
        { fullname: "Teorema", email: "teorema-caos@freestyle.com", category: "avanzado" },
        { fullname: "Gazir", email: "gazir-metric@freestyle.com", category: "avanzado" },
        { fullname: "Valles-T", email: "valles-t@freestyle.com", category: "avanzado" },
        { fullname: "Kaiser", email: "kaiser-pitbull@freestyle.com", category: "avanzado" }
      ];
      localStorage.setItem('rap_participants', JSON.stringify(savedData));
    }

    return savedData;
  }

  static addParticipant(participant) {
    let db = this.getParticipants();
    db.push(participant);
    localStorage.setItem('rap_participants', JSON.stringify(db));
  }
}
