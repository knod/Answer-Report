var jade = require('jade');
var fs = require('fs');
console.log(fs);

// var result = jade.render(path.join(__dirname, '../templates/answer-report.jade'), {option: 'value'});

var template = fs.readFileSync('./templates/answer-report.jade', 'utf8');

var result = jade.render(template, {option: 'value'});