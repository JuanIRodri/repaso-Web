export default class ParticipantController {
  constructor(participantModel, participantView) {
    this.model = participantModel;
    this.view = participantView;
  }

  async init() {
    this.view.renderLoading();
    const participants = await this.model.fetchParticipants();
    this.view.render(participants);
  }
}
