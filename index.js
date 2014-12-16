'use strict';

var react = require('broccoli-react');

module.exports = {
  name: 'ember-cli-jsx',
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.registry.add('js', {
      name: 'ember-cli-jsx',
      ext: 'jsx',
      toTree: function(tree) {
        return react(tree);
      }
    });
  }
};

