DeskPoll.Views.DeskSelectionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  
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
      vote: this.model
    });
          
    this.$el.html(content);
      
    //check radio button if user has already voted
    if (this.model.attributes) {
      $("#desk_selection").find('input[value="' + this.model.attributes.desk_type + '"]').prop('checked', true);
    }
    
    return this;
  }
});