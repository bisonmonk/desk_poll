window.DeskPoll = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new DeskPoll.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  DeskPoll.initialize();
});
