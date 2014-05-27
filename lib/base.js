var Collection, Item, _;

_ = require('lodash');

module.exports.Collection = Collection = (function() {
  Collection.prototype.items = [];

  function Collection(items) {
    if (items) {
      this.items = items;
    }
  }

  Collection.prototype.filterByRel = function(rel) {
    return _.where(this.items, {
      rels: [rel]
    });
  };

  Collection.prototype.getById = function(id) {
    return _.first(_.where(this.items, {
      id: id
    }));
  };

  Collection.prototype.filterByClass = function(className) {
    return _.where(this.items, {
      classes: [className]
    });
  };

  return Collection;

})();

module.exports.Item = Item = (function() {
  function Item() {}

  return Item;

})();
