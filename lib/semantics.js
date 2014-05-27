var Collection, Item, SemanticCollection, SemanticItem, _, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ref = require('./base'), Collection = _ref.Collection, Item = _ref.Item;

_ = require("lodash");

module.exports.SemanticCollection = SemanticCollection = (function(_super) {
  __extends(SemanticCollection, _super);

  function SemanticCollection() {
    return SemanticCollection.__super__.constructor.apply(this, arguments);
  }

  SemanticCollection.prototype.semanticsFor = function(name) {
    return _.first(_.where(this.items, {
      name: name
    }));
  };

  return SemanticCollection;

})(Collection);

module.exports.SemanticItem = SemanticItem = (function(_super) {
  __extends(SemanticItem, _super);

  function SemanticItem() {
    return SemanticItem.__super__.constructor.apply(this, arguments);
  }

  return SemanticItem;

})(Item);
