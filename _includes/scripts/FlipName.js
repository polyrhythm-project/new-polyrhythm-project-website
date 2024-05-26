{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:35:18 PDT 2024
// Last Modified: Sat May 25 20:35:21 PDT 2024
// Filename:      _includes/scripts/FlipName.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Change name from "last, first" to "first last".
//
{% endcomment %}

function FlipName(bname) {
	let matches = bname.match(/^([^,]+),\s+([^,]+)$/);
	if (!matches) {
		return bname;
	} else {
		return matches[2] + " " + matches[1];
	}
}



