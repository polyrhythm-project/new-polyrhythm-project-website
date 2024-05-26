{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:36:02 PDT 2024
// Last Modified: Sat May 25 20:36:05 PDT 2024
// Filename:      _includes/scripts/CreateWorkIndex.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Given an example list (derived from Google Sheets metadata),
//                create the worklist for the examples.
//
{% endcomment %}


function CreateWorkIndex(examplelist) {
	if (!examplelist) {
		examplelist = EXAMPLELIST;
	}
	let workid;
	let output = {};
	for (let i=0; i<examplelist.length; i++) {
		workid = examplelist[i][INDEX_Suter_Work_ID];
		let entry = output[workid];
		if (entry) {
			output[workid].push(examplelist[i]);
		} else {
			output[workid] = [examplelist[i]];
		}
	}
	return output;
}



