var Collection, FieldCollection, FieldItem, Item, _, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ref = require('./base'), Collection = _ref.Collection, Item = _ref.Item;

_ = require("lodash");

module.exports.FieldCollection = FieldCollection = (function(_super) {
  __extends(FieldCollection, _super);

  function FieldCollection() {
    return FieldCollection.__super__.constructor.apply(this, arguments);
  }

  FieldCollection.prototype.get = function(name) {
    return _.first(_.where(this.items, {
      name: name
    }));
  };

  return FieldCollection;

})(Collection);

module.exports.FieldItem = FieldItem = (function(_super) {
  __extends(FieldItem, _super);

  function FieldItem() {
    return FieldItem.__super__.constructor.apply(this, arguments);
  }

  return FieldItem;

})(Item);
