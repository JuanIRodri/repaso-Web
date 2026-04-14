export default class HomeController {
  constructor(homeView) {
    this.homeView = homeView;
    this.onNavigateInscription = null;
    this.onNavigateParticipants = null;
  }

  setNavigationCallbacks(onInscription, onParticipants) {
    this.onNavigateInscription = onInscription;
    this.onNavigateParticipants = onParticipants;
  }
  
  init() {
    this.homeView.render(this.onNavigateInscription, this.onNavigateParticipants);
  }
}
