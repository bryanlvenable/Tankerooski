// client/views/intro/IntroAppView.js

// define this module in Require.JS
define(function(require, exports, module) {

  // Import additional modules to be used in this view 
  var View = require('famous/core/View');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');

  // Constructor function for our IntroAppView class
  function IntroAppView() {

      // Applies View's constructor function to IntroAppView class
      View.apply(this, arguments);
    }

  // Establishes prototype chain for IntroAppView class to inherit from View
  IntroAppView.prototype = Object.create(View.prototype);
  IntroAppView.prototype.constructor = IntroAppView;

  // Default options for IntroAppView class
  IntroAppView.DEFAULT_OPTIONS = {};

  // Define your helper functions and prototype methods here

  module.exports = IntroAppView;
});