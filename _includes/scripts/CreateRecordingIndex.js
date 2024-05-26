{% comment %}
//
// Programmer:	   Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sun May 26 11:38:10 PDT 2024
// Last Modified: Sun May 26 12:13:58 PDT 2024
// Filename:	  _includes/scripts/CreateRecordingIndex.html
// vim:		      set ts=3 nowrap ft=javascript:
//
// Description:   Create an index of recordings by work from
//                the recording list.
//
{% endcomment %}


function CreateRecordingIndex(recordinglist) {
	let recordingindex = {};
	for (let i=0; i<recordinglist.length; i++) {
		let id = recordinglist[i]["Suter Work ID"];
		if (id) {
			let entry = recordingindex[id];
			if (!entry) {
				recordingindex[id] = [recordinglist[i]];
			} else {
				recordingindex[id].push(recordinglist[i]);
			}
		}
	}
	return recordingindex;
}



