/***
 * Excerpted from "Serverless Single Page Apps",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/brapps for more book information.
***/
var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.region = 'us-east-1'
var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});
var params = {
  FunctionName: 'learnjs_popularAnswers',
  ZipFile: fs.readFileSync('archive.zip')
};
lambda.updateFunctionCode(params, function(err, data) { 
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
