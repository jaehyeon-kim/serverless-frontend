/***
 * Excerpted from "Serverless Single Page Apps",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/brapps for more book information.
***/
learnjs.formatCode = function(obj) {
  // This implementation was too large to fit in the margin :-)
  // and it's not really relevant to the example.
  return obj;
};

function formatProblems() {
  var formattedProblems = [];
  learnjs.problems.forEach(function(problem) {
    formattedProblems.push({
      code: learnjs.formatCode(problem.code),
      name: problem.name
    });
  });
  return formattedProblems;
}

function betterFormatProblems() {
  return learnjs.problems.map(learnjs.formatCode);
}

describe('betterFormatProblems', function() {
  beforeEach(function() {
    spyOn(learnjs, 'formatCode').and.callFake(function(problem) {
      return {
        code: "formatted",
        name: problem.name
      };
    })
  });

  it('applies a formatter to all the problems', function() {
    expect(betterFormatProblems()[0].code).toEqual("formatted");
  });
});

describe('formatProblems', function() {
  beforeEach(function() {
    spyOn(learnjs, 'formatCode').and.returnValue("formatted")
  });

  it('applies a formatter to all the problems', function() {
    expect(formatProblems()[0].code).toEqual("formatted");
  });
});
