DeskPoll.Views.AdminDashboardView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.voteCounts = {'basic': 0, 'standing': 0, 'mega': 0};
  },
  
  template: JST['admin_dashboard'],
  
  countVotes: function() {
    var view = this;
    
    this.collection.forEach(function(vote) {
      view.voteCounts[vote.attributes.desk_type] += 1;
    });
  },
  
  render: function() {
    var view = this;
    
    this.countVotes();
    
    var content = this.template({
      basicCount: view.voteCounts['basic'],
      standingCount: view.voteCounts['standing'],
      megaCount: view.voteCounts['mega']
    });
    
    this.$el.html(content);
    
    return this;
  }
});