{FieldCollection} = require('../lib/fields')
chai = require('chai')
expect = chai.expect

items = [
  { name: "first_name", type: "string" }
  { name: "age", type: "number" }
]

describe "FieldCollection", ->
  fields = {}

  beforeEach ->
    fields = new FieldCollection items

  describe "#get", ->
    it "should return the field for a name", ->
      expect(fields.get("age").type).to.equal "number"
