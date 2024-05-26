{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:33:27 PDT 2024
// Last Modified: Sat May 25 20:33:30 PDT 2024
// Filename:      _includes/scripts/FindWorkById.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Find a work entry by work ID in the worklist.
//                Return null if none found.
//
{% endcomment %}


function FindWorkById(wid, workindex) {
	if (!wid) {
		return null;
	}
	if (!worklist) {
		worklist = WORKINDEX;
	}
	let entry = worklist[wid];
	if (entry) {
		return entry;
	}
	return null;
}



