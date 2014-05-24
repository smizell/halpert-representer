{Collection, Item} = require('./base')

module.exports.QueryCollection = class QueryCollection extends Collection
  # FieldCollection
  queryParams = {}

module.exports.QueryItem = class QueryItem extends Item

module.exports.TemplatedQueryCollection = class TemplatedQueryCollection extends QueryCollection
  # FieldCollection
  uriParams = {}

module.exports.TemplatedQueryItem = class TemplatedQueryItem extends Item