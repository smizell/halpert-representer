var Collection, Item, _;

_ = require('lodash');

module.exports.Collection = Collection = (function() {
  Collection.prototype.items = [];

  function Collection(items) {
    if (items) {
      this.items = items;
    }
  }

  Collection.prototype.all = function() {
    return this.items;
  };

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

  Collection.prototype.filter = function(conditions) {
    return _.where(this.items, conditions);
  };

  return Collection;

})();

module.exports.Item = Item = (function() {
  function Item() {}

  return Item;

})();
