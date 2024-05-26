{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 18:09:19 PDT 2024
// Last Modified: Sat May 25 18:09:22 PDT 2024
// Filename:      _includes/scripts/GetCgiParameters.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Extract CGI parameters from URL.  Returns
//                an associative array containing the page's
//                URL's CGI parameters.
//
{% endcomment %}


function GetCgiParameters() {
	let url = window.location.search.substring(1);
	let output = {};
	let settings = url.split('&');
	for (let i=0; i<settings.length; i++) {
		let pair = settings[i].split('=');
		pair[0] = decodeURIComponent(pair[0]);
		pair[1] = decodeURIComponent(pair[1]);
		if (typeof output[pair[0]] === 'undefined') {
			output[pair[0]] = pair[1];
		} else if (typeof output[pair[0]] === 'string') {
			let arr = [ output[pair[0]], pair[1] ];
			output[pair[0]] = arr;
		} else {
			output[pair[0]].push(pair[1]);
		}
	}
	return output;
}



