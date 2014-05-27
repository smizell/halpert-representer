var Collection, FieldCollection, Item, QueryCollection, QueryItem, TemplatedQueryCollection, TemplatedQueryItem, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ref = require('./base'), Collection = _ref.Collection, Item = _ref.Item;

FieldCollection = require('./fields').FieldCollection;

module.exports.QueryCollection = QueryCollection = (function(_super) {
  __extends(QueryCollection, _super);

  function QueryCollection() {
    return QueryCollection.__super__.constructor.apply(this, arguments);
  }

  QueryCollection.prototype.queryParams = new FieldCollection;

  return QueryCollection;

})(Collection);

module.exports.QueryItem = QueryItem = (function(_super) {
  __extends(QueryItem, _super);

  function QueryItem() {
    return QueryItem.__super__.constructor.apply(this, arguments);
  }

  return QueryItem;

})(Item);

TemplatedQueryCollection = (function(_super) {
  __extends(TemplatedQueryCollection, _super);

  function TemplatedQueryCollection() {
    return TemplatedQueryCollection.__super__.constructor.apply(this, arguments);
  }

  TemplatedQueryCollection.prototype.uriParams = new FieldCollection;

  return TemplatedQueryCollection;

})(QueryCollection);

module.exports.TemplatedQueryCollection = TemplatedQueryCollection;

module.exports.TemplatedQueryItem = TemplatedQueryItem = (function(_super) {
  __extends(TemplatedQueryItem, _super);

  function TemplatedQueryItem() {
    return TemplatedQueryItem.__super__.constructor.apply(this, arguments);
  }

  return TemplatedQueryItem;

})(Item);
