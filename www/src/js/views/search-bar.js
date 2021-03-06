// search bar component
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var template = require('../templates/search-bar.hbs');

module.exports = Backbone.Marionette.ItemView.extend({
  className: 'b-search-bar',

  template: function(model) {
    return template(model);
  },

  ui: {
    'sortAlpha': '#sortAlpha',
    'sortBytes': '#sortBytes',
    'styleRow': '#js-style-row',
    'styleGrid': '#js-style-grid'
  },

  events: {
    'click @ui.sortBytes':  'sortBytes',
    'click @ui.sortAlpha':  'sortAlpha',
    'click @ui.styleRow':   'styleRow',
    'click @ui.styleGrid':  'styleGrid'
  },

  sortAlpha: function() {
    this.model.set('isAlpha', true);
    this.viewComparator = function(model) {
      return model.get('name');
    };
    this.render();
  },

  sortBytes: function() {
    this.model.set('isAlpha', false);
    this.viewComparator = function(model) {
      return -model.get('installed_size');
    };
    this.render();
  },

  styleGrid: function() {
    this.model.set('isGrid', true);
    this.$('#js-snaplist')
      .removeClass('p-card-deck--row');

    this.$('#js-view-filters')
      .removeClass('p-view-filters--row')
      .addClass('p-view-filters--grid');
  },

  styleRow: function() {
    this.model.set('isGrid', false);
    this.$('#js-snaplist')
      .addClass('p-card-deck--row');

    this.$('#js-view-filters')
      .removeClass('p-view-filters--grid')
          .addClass('p-view-filters--row');
  },
});
