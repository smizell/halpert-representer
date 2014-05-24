{Collection, Item} = require('./base')
{FieldCollection} = require('./fields')

module.exports.ActionCollection = class ActionCollection extends Collection
  bodyParams: new FieldCollection

module.exports.ActionItem = class ActionItem extends Item

module.exports.TemplatedActionCollection = class TemplatedActionCollection extends ActionCollection
  uriParams: new FieldCollection

module.exports.TemplatedActionItem = class TemplatedActionItem extends Item