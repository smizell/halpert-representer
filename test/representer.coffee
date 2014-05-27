{Representer} = require('../src/representer')
chai = require('chai')
expect = chai.expect

# This will all be handled by the main Halpert library
# A simple function that returns an object will work
# for this test.

formats =
  'test':
    formatName: 'test'
    builder: (rep) -> { converted: true }

describe "Representer", ->
  rep = {}

  beforeEach ->
    rep = new Representer formats

  describe "#constructor", ->
    it "should store the given formats", ->
      expect(Object.keys(rep.formats).length).to.equal 1

  describe "#toFormat", ->
    it "should convert the object to a new format", ->
      newFormat = rep.toFormat('test')
      expect(newFormat.converted).to.equal true