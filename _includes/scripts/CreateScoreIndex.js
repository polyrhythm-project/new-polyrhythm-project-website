{% comment %}
//
// Programmer:	Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sun May 26 10:19:55 PDT 2024
// Last Modified: Sun May 26 10:20:00 PDT 2024
// Filename:	  _includes/scripts/CreateScoreIndex.html
// vim:		   set ts=3 nowrap ft=javascript:
//
// Description:   Download the score index from Google Sheets
//				and store in the global variable SCORELIST.
//				and finally run the given callback function.
//				This function should be called from within a
//				DOMContentLoaded event function.
//
{% endcomment %}


function CreateScoreIndex(scorelist) {
	let scoreindex = {};
	for (let i=0; i<scorelist.length; i++) {
		let id = scorelist[i]["Work ID"];
		if (id) {
			let entry = scoreindex[id];
			if (!entry) {
				scoreindex[id] = [scorelist[i]];
			} else {
				scoreindex[id].push(scorelist[i]);
			}
		}
	}
console.warn("SCORE INDEX CREATED: ", scoreindex);
	return scoreindex;
}



