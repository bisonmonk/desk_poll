DeskPoll.Views.DeskSelectionView = Backbone.View.extend({
  template: JST['desk_selection'],
  
  events: {
    'submit form': 'submit'
  },
  
  submit: function(event) {
    event.preventDefault();
    
    var deskType = $('input[name=desk_type]:checked', '#desk_selection').val();
    
    this.model.save({
      'desk_type': deskType
    });
  },
  
  render: function() {
    var view = this;
    var content = this.template({
      vote: view.model
    });

    this.$el.html(content);
    
    return this;
  }
});