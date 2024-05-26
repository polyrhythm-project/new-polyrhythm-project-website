{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:36:02 PDT 2024
// Last Modified: Sat May 25 20:36:05 PDT 2024
// Filename:      _includes/scripts/GenerateWorklist.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Given an example list (derived from Google Sheets metadata),
//                create the worklist for the examples.
//
{% endcomment %}


function GenerateWorklist(examplelist) {
	if (!examplelist) {
		examplelist = EXAMPLELIST;
	}
	let tlist = {};
	let workid;
	let output = [];
	for (let i=0; i<examplelist.length; i++) {
		workid = examplelist[i][INDEX_Suter_Work_ID];
		if (tlist[workid]) {
			tlist[workid]["@examples"].push(examplelist[i]);
		} else {
			tlist[workid] = examplelist[i];
			tlist[workid]["@examples"] = [];
			tlist[workid]["@examples"].push(examplelist[i]);
			output.push(examplelist[i]);
		}
	}
	return output;
}



