{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 18:04:49 PDT 2024
// Last Modified: Sat May 25 18:04:52 PDT 2024
// Filename:      _includes/scripts/GetPath.js
// vim:           set ts=3 nowrap ft=liquid:
//
// Description:   Fix for Safari and Firefox for extracting
//                parent elements for an event target.
//
{% endcomment %}


function GetPath(event) {
	if (event.hasOwnProperty("path")) {
		return event.path;
	}
	let output = [];
	let target = event.target;
	while (target) {
		output.push(target);
		target = target.parentNode;
	}
	return output;
}



