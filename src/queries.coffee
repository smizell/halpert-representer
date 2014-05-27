{Collection, Item} = require('./base')
{FieldCollection} = require('./fields')

module.exports.QueryCollection = class QueryCollection extends Collection
  queryParams: new FieldCollection

module.exports.QueryItem = class QueryItem extends Item

class TemplatedQueryCollection extends QueryCollection
  uriParams: new FieldCollection

module.exports.TemplatedQueryCollection = TemplatedQueryCollection

module.exports.TemplatedQueryItem = class TemplatedQueryItem extends Item