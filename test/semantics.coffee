{SemanticCollection} = require('../src/semantics')
chai = require('chai')
expect = chai.expect

items = [
  { name: "first_name", type: "string" }
  { name: "age", type: "number" }
]

describe "SemanticCollection", ->
  sem = {}

  beforeEach ->
    sem = new SemanticCollection items

  describe "#semanticsFor", ->
    it "should return the semantics for a given property", ->
      expect(sem.semanticsFor("age").type).to.equal "number"
