var Collection, FieldCollection, Item, LinkCollection, LinkItem, TemplatedLinkCollection, TemplatedLinkItem, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ref = require('./base'), Collection = _ref.Collection, Item = _ref.Item;

FieldCollection = require('./fields').FieldCollection;

module.exports.LinkCollection = LinkCollection = (function(_super) {
  __extends(LinkCollection, _super);

  function LinkCollection() {
    return LinkCollection.__super__.constructor.apply(this, arguments);
  }

  return LinkCollection;

})(Collection);

module.exports.LinkItem = LinkItem = (function(_super) {
  __extends(LinkItem, _super);

  function LinkItem() {
    return LinkItem.__super__.constructor.apply(this, arguments);
  }

  return LinkItem;

})(Item);

TemplatedLinkCollection = (function(_super) {
  __extends(TemplatedLinkCollection, _super);

  function TemplatedLinkCollection() {
    return TemplatedLinkCollection.__super__.constructor.apply(this, arguments);
  }

  TemplatedLinkCollection.prototype.uriParams = new FieldCollection;

  return TemplatedLinkCollection;

})(Collection);

module.exports.TemplatedLinkCollection = TemplatedLinkCollection;

module.exports.TemplatedLinkItem = TemplatedLinkItem = (function(_super) {
  __extends(TemplatedLinkItem, _super);

  function TemplatedLinkItem() {
    return TemplatedLinkItem.__super__.constructor.apply(this, arguments);
  }

  return TemplatedLinkItem;

})(Item);
