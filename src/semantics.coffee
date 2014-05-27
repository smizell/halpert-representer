{Collection, Item} = require('./base')
_ = require("lodash")

module.exports.SemanticCollection = class SemanticCollection extends Collection

  semanticsFor: (name) ->
    _.first(_.where(@items, { name: name }))

module.exports.SemanticItem = class SemanticItem extends Item