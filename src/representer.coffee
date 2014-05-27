_ = require('lodash')
{Collection} = require('./base')
{SemanticCollection} = require('./semantics')
{LinkCollection, TemplatedLinkCollection} = require('./links')
{ActionCollection, TemplatedActionCollection} = require('./actions')
{QueryCollection, TemplatedQueryCollection} = require('./queries')
{PrefixCollection} = require('./prefixes')

module.exports.PartialCollection = class PartialCollection extends Collection
module.exports.IncludeCollection = class IncludeCollection extends Collection

module.exports.Representer = class Representer

  constructor: (formats, data, formatName) ->
    @prefixes = new PrefixCollection
    @semantics = new SemanticCollection
    @properties = {}
    @links =  new LinkCollection
    @actions = new ActionCollection
    @queries = new QueryCollection
    @templatedLinks = new TemplatedLinkCollection
    @templatedActions = new TemplatedActionCollection
    @templatedQueries = new TemplatedQueryCollection
    @partials = new PartialCollection
    @includes = new IncludeCollection
    @formats = {}
    @formats = formats

  toFormat: (formatName) ->
    @formats[formatName].builder(this)