
var jade = require('jade');

window.addEventListener('load', function () {
	console.log(process.cwd());

// For the columns, except grid-ins
var html = jade.renderFile( process.cwd() + 'templates/answer-report.jade'
	// , 
	// function(err, html) {

	// 	if (err) {
	// 		console.error(err);
	// 	}

	// 	console.log(html);
	// }
);

});
