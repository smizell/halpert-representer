{Collection, Item} = require('./base')

module.exports.LinkCollection = class LinkCollection extends Collection
module.exports.LinkItem = class LinkItem extends Item

module.exports.TemplatedLinkCollection = class TemplatedLinkCollection extends Collection
  # FieldCollection
  uriParams = {}
  
module.exports.TemplatedLinkItem = class TemplatedLinkItem extends Item