'use strict';

var react  = require('broccoli-react');

function ReactPlugin(options) {
  this.name = 'ember-cli-jsx';
  this.options = options || {};
  this.ext = this.options.extensions || 'jsx';
}

ReactPlugin.prototype.toTree = function(tree) {
  return react(tree, this.options);
};

function EmberCLIJSX(project) {
  this.project = project;
  this.name    = 'Ember CLI JSX';
}

EmberCLIJSX.prototype.treeFor = function treeFor() {
};

EmberCLIJSX.prototype.included = function included(app) {
  var registry = app.registry;
  this.app = app;

  var plugin = new ReactPlugin(this.app.options.jsxOptions);

  registry.add('jsx', plugin);
};

module.exports = EmberCLIJSX;
