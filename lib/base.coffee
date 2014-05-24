_ = require('lodash')

module.exports.Collection = class Collection
  @items = []

  constructor: (items) ->
    @items = items

  filterByRel: (rel) ->
    _.where(@items, { rels: [rel] })

  getById: (id) ->
    _.first(_.where(@items, { id: id }))

  filterByClass: (className) ->
    _.where(@items, { classes: [className] })

module.exports.Item = class Item