DeskPoll.Routers.Router = Backbone.Router.extend({  
  routes: {
    '': 'deskSelection',
    'admin': 'adminDashboard'
  },
  
  deskSelection: function() {
    var newVote = new DeskPoll.Models.Vote();

    var deskSelectionView = new DeskPoll.Views.DeskSelectionView({
      model: newVote
    });
    
    this._swapView(deskSelectionView);
  },
  
  adminDashboard: function() {
    var votes = new DeskPoll.Collections.Votes();
    
    votes.fetch();
    
    var adminDashboardView = new DeskPoll.Views.AdminDashboardView({
      collection: votes
    });
    
    this._swapView(adminDashboardView);
  },
  
  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $("#content").html(this.currentView.render().$el);
  }
});