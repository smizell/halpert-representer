{Collection} = require('../lib/base')
chai = require('chai')
expect = chai.expect

# This doesn't have to be 

items = [
  { rels: [ "item", "order" ], id: "order-1" }
  { rels: [ "item", "customer" ], classes: [ "customer" ] }
]

describe "Collection", ->
  col = {}

  beforeEach ->
    col = new Collection items

  describe "#filterByRel", ->
    it "should return all matching items with rel", ->
      expect(col.filterByRel("item").length).to.equal 2

  describe "#getById", ->
    it "should return one item with a matching ID", ->
      id = "order-1"
      expect(col.getById(id).id).to.equal id

  describe "#filterByClass", ->
    it "shoudl return all matching items with class", ->
      expect(col.filterByClass("customer").length).to.equal 1