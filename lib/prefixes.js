var Collection, PrefixCollection,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Collection = require('./base').Collection;

module.exports.PrefixCollection = PrefixCollection = (function(_super) {
  __extends(PrefixCollection, _super);

  function PrefixCollection() {
    return PrefixCollection.__super__.constructor.apply(this, arguments);
  }

  return PrefixCollection;

})(Collection);
