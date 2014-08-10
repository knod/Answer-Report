
var jade = require('jade');

window.addEventListener('load', function () {

// For the columns, except grid-ins
jade.render('/templates/sat-report.jade', function(err, html) {

	if (err) {
		console.error(err);
	}

	console.log(html);
});

});
