_ = require('lodash')
{Collection} = require('./base')

module.exports.Representer = class Representer
  @semantics = []
  @properties = {}
  @links = []
  @actions = []
  @queries = []
  @templatedLinks = []
  @templatedActions = []
  @templatedQueries = []
  @partials = []
  @includes = []
  @formats = {}

  constructor: (formats, data, formatName) ->
    @formats = formats

  toFormat: (formatName) ->
    @formats[formatName].builder(this)

module.exports.PartialCollection = class PartialCollection extends Collection
module.exports.IncludeCollection = class IncludeCollection extends Collection