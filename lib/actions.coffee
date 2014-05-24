{Collection, Item} = require('./base')

module.exports.ActionCollection = class ActionCollection extends Collection
  # FieldCollection
  bodyParams = {}

module.exports.ActionItem = class ActionItem extends Item

module.exports.TemplatedActionCollection = class TemplatedActionCollection extends ActionCollection
  # FieldCollection
  uriParams = {}

module.exports.TemplatedActionItem = class TemplatedActionItem extends Item