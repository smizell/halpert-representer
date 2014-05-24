{Collection, Item} = require('./base')
_ = require("lodash")

module.exports.FieldCollection = class FieldCollection extends Collection

  get: (name) ->
    _.first(_.where(@items, { name: name }))

module.exports.FieldItem = class FieldItem extends Item