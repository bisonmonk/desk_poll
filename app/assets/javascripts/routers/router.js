DeskPoll.Routers.Router = Backbone.Router.extend({  
  routes: {
    'user': 'deskSelection',
    'admin': 'adminDashboard'
  },
  
  deskSelection: function() {
    var view = this;
    view.userVote;
    $.get("/votes/current_vote", function(data) {
      if (data) {
        view.userVote = new DeskPoll.Models.Vote({id: data.id});
        view.userVote.fetch();
      } else {
        view.userVote = new DeskPoll.Models.Vote();
      }
      var deskSelectionView = new DeskPoll.Views.DeskSelectionView({
        model: view.userVote
      });
    
      view._swapView(deskSelectionView);
    });
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