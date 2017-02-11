/***
 * Excerpted from "Serverless Single Page Apps",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/brapps for more book information.
***/
var fixture;

function loadFixture(path) {  
  var html;
  jQuery.ajax({
    url: '/index.html',
    success: function(result) {
      html = result;
    },
    async: false
  });          
  return $.parseHTML(html);
}

function resetFixture() {
  if (!fixture) {
    var index = $('<div>').append(loadFixture('/index.html'));
    var markup = index.find('div.markup');
    fixture = $('<div class="fixture" style="display: none">').append(markup);
    $('body').append(fixture.clone());
  } else {
    $('.fixture').replaceWith(fixture.clone());
  }
}

beforeEach(function () {
  resetFixture();
});
