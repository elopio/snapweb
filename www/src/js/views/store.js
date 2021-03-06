// store layout view
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var SearchBarView = require('./search-bar.js');
var StorelistView = require('./storelist.js');
var StoreHeaderView = require('./store-header.js');
var template = require('../templates/store.hbs');

module.exports = Backbone.Marionette.LayoutView.extend({

  className: 'b-store',

  template : function(model) {
    return template(model);
  },

  onBeforeShow: function() {
    this.showChildView('searchBar', new SearchBarView({
      model: this.model
    }));

    this.showChildView('storeHeader', new StoreHeaderView({
      model: this.model,
      collection: this.model.sections
    }));

    this.showChildView('storeSnapItemsList', new StorelistView({
      model: this.model,
      collection: this.collection.all()
    }));
  },

  regions: {
    searchBar: '.region-search-bar',
    storeHeader: '.region-store-header',
    storeSnapItemsList: '.region-snaplist',
  }
});
