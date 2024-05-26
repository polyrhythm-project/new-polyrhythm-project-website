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


function FindWorkById(wid, worklist) {
	if (!wid) {
		return null;
	}
	if (!worklist) {
		worklist = WORKLIST;
	}
	for (let i=0; i<worklist.length; i++) {
		if (worklist[i][INDEX_Suter_Work_ID] === wid) {
			return worklist[i];
		}
	}
	return null;
}



