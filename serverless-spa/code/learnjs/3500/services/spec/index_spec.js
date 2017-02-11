/***
 * Excerpted from "Serverless Single Page Apps",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/brapps for more book information.
***/
describe('lambda function', function() {
  var index = require('index');
  var context;

  beforeEach(function() {
    context = jasmine.createSpyObj('context', ['succeed']);
  });

  describe('echo', function() {
    it('returns a result', function() {
      index.echo({}, context);
      expected = ["Hello from the cloud! You sent {}"];
      expect(context.succeed).toHaveBeenCalledWith(expected);
    });
  });
});
