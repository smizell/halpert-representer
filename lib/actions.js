var ActionCollection, ActionItem, Collection, FieldCollection, Item, TemplatedActionCollection, TemplatedActionItem, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ref = require('./base'), Collection = _ref.Collection, Item = _ref.Item;

FieldCollection = require('./fields').FieldCollection;

module.exports.ActionCollection = ActionCollection = (function(_super) {
  __extends(ActionCollection, _super);

  function ActionCollection() {
    return ActionCollection.__super__.constructor.apply(this, arguments);
  }

  ActionCollection.prototype.bodyParams = new FieldCollection;

  return ActionCollection;

})(Collection);

module.exports.ActionItem = ActionItem = (function(_super) {
  __extends(ActionItem, _super);

  function ActionItem() {
    return ActionItem.__super__.constructor.apply(this, arguments);
  }

  return ActionItem;

})(Item);

TemplatedActionCollection = (function(_super) {
  __extends(TemplatedActionCollection, _super);

  function TemplatedActionCollection() {
    return TemplatedActionCollection.__super__.constructor.apply(this, arguments);
  }

  TemplatedActionCollection.prototype.uriParams = new FieldCollection;

  return TemplatedActionCollection;

})(ActionCollection);

module.exports.TemplatedActionCollection = TemplatedActionCollection;

module.exports.TemplatedActionItem = TemplatedActionItem = (function(_super) {
  __extends(TemplatedActionItem, _super);

  function TemplatedActionItem() {
    return TemplatedActionItem.__super__.constructor.apply(this, arguments);
  }

  return TemplatedActionItem;

})(Item);
