_ = require('lodash')

module.exports.Collection = class Collection
  items: []

  constructor: (items) ->
    @items = items if items

  all: ->
    @items

  filterByRel: (rel) ->
    _.where(@items, { rels: [rel] })

  getById: (id) ->
    _.first(_.where(@items, { id: id }))

  filterByClass: (className) ->
    _.where(@items, { classes: [className] })

  filter: (conditions) ->
    _.where(@items, conditions)

module.exports.Item = class Item