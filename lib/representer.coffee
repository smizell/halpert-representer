_ = require('lodash')
{Collection} = require('./base')
{SemanticCollection} = require('./semantics')
{LinkCollection, TemplatedLinkCollection} = require('./links')
{ActionCollection, TemplatedActionCollection} = require('./actions')
{QueryCollection, TemplatedQueryCollection} = require('./queries')

module.exports.PartialCollection = class PartialCollection extends Collection
module.exports.IncludeCollection = class IncludeCollection extends Collection

module.exports.Representer = class Representer
  semantics: new SemanticCollection
  properties: {}
  links: new LinkCollection
  actions: new ActionCollection
  queries: new QueryCollection
  templatedLinks: new TemplatedLinkCollection
  templatedActions: new TemplatedActionCollection
  templatedQueries: new TemplatedQueryCollection
  partials: new PartialCollection
  includes: new IncludeCollection
  formats: {}

  constructor: (formats, data, formatName) ->
    @formats = formats

  toFormat: (formatName) ->
    @formats[formatName].builder(this)