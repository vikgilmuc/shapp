/*
	* shapp.js
	* Root namespace module
*/
/*jslint browser : true, continue : true,
	devel : true, indent : 2, maxerr : 50,
	newcap : true, nomen : true, plusplus : true,
	regexp : true, sloppy : true, vars : false,
	white : true
*/
/*global $, spa */

var shapp = (function () {
	var initModule = function ( $container ) {
									
									
			//imports the pages from joomla  and transforms into a JSON object to be used by  Knockout
				$.ajax({
					url: 'http://smiley-homes.no-ip.org/index.php/?option=com_json&task=json',
					dataType: 'jsonp',
					success: function(daten) {
						$.each(daten, function(index,datensatz ) {
						
							console.log(index);// to control / to be eliminated
						});
						var datenforbinding={article:daten};
						$.toJSON(datenforbinding);
						console.log(datenforbinding);// to control / to be eliminated
						ko.applyBindings(datenforbinding);
						
						}
					});
			
		};
	return { initModule: initModule };
}(jQuery));