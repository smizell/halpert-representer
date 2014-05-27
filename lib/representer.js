var ActionCollection, Collection, IncludeCollection, LinkCollection, PartialCollection, PrefixCollection, QueryCollection, Representer, SemanticCollection, TemplatedActionCollection, TemplatedLinkCollection, TemplatedQueryCollection, _, _ref, _ref1, _ref2,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('lodash');

Collection = require('./base').Collection;

SemanticCollection = require('./semantics').SemanticCollection;

_ref = require('./links'), LinkCollection = _ref.LinkCollection, TemplatedLinkCollection = _ref.TemplatedLinkCollection;

_ref1 = require('./actions'), ActionCollection = _ref1.ActionCollection, TemplatedActionCollection = _ref1.TemplatedActionCollection;

_ref2 = require('./queries'), QueryCollection = _ref2.QueryCollection, TemplatedQueryCollection = _ref2.TemplatedQueryCollection;

PrefixCollection = require('./prefixes').PrefixCollection;

module.exports.PartialCollection = PartialCollection = (function(_super) {
  __extends(PartialCollection, _super);

  function PartialCollection() {
    return PartialCollection.__super__.constructor.apply(this, arguments);
  }

  return PartialCollection;

})(Collection);

module.exports.IncludeCollection = IncludeCollection = (function(_super) {
  __extends(IncludeCollection, _super);

  function IncludeCollection() {
    return IncludeCollection.__super__.constructor.apply(this, arguments);
  }

  return IncludeCollection;

})(Collection);

module.exports.Representer = Representer = (function() {
  function Representer(formats, data, formatName) {
    this.prefixes = new PrefixCollection;
    this.semantics = new SemanticCollection;
    this.properties = {};
    this.links = new LinkCollection;
    this.actions = new ActionCollection;
    this.queries = new QueryCollection;
    this.templatedLinks = new TemplatedLinkCollection;
    this.templatedActions = new TemplatedActionCollection;
    this.templatedQueries = new TemplatedQueryCollection;
    this.partials = new PartialCollection;
    this.includes = new IncludeCollection;
    this.formats = {};
    this.formats = formats;
  }

  Representer.prototype.toFormat = function(formatName) {
    return this.formats[formatName].builder(this);
  };

  return Representer;

})();
