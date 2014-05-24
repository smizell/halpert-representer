{Collection, Item} = require('./base')
{FieldCollection} = require('./fields')

module.exports.LinkCollection = class LinkCollection extends Collection
module.exports.LinkItem = class LinkItem extends Item

module.exports.TemplatedLinkCollection = class TemplatedLinkCollection extends Collection
  uriParams: new FieldCollection

module.exports.TemplatedLinkItem = class TemplatedLinkItem extends Item