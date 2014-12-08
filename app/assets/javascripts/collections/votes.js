DeskPoll.Collections.Votes = Backbone.Collection.extend({
  model: DeskPoll.Models.Vote,
  
  url: '/votes',

  getOrFetch: function (id) {
    var model = this.get(id),
      vote = this;

    if(model) {
      model.fetch();
    } else {
      model = new DeskPoll.Models.Vote({ id: id });
      model.fetch({
        success: function () {
          vote.add(model);
        },
      });
    }

    return model;
  },
});