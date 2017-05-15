var fs = require('fs');
var data = fs.readFileSync('website/data/product.json');
var product = JSON.parse(data);
console.log(product);


console.log('start');
var express = require('express');
var app = express();
var server;
server = app.listen(3001, listening);
function listening() {
  console.log("listening...");
}
app.use(express.static('website'));

// in progress
app.get('/website', addValue);

function addValue(request, response) {
  var data = request.params;
  var value = Number(data.value);
  var reply;

  values[value] = value;

  var data = JSON.stringify(values, null, 2);
  fs.writeFile('website/data/product.json', data, finished);

  response.send(reply);
}
