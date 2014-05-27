{Collection, Item} = require('./base')
{FieldCollection} = require('./fields')

module.exports.LinkCollection = class LinkCollection extends Collection
module.exports.LinkItem = class LinkItem extends Item

class TemplatedLinkCollection extends Collection
  uriParams: new FieldCollection

module.exports.TemplatedLinkCollection = TemplatedLinkCollection

module.exports.TemplatedLinkItem = class TemplatedLinkItem extends Item