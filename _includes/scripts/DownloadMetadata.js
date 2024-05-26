{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Fri May 24 12:14:04 PDT 2024
// Last Modified: Sun May 26 11:43:16 PDT 2024
// Filename:      _includes/scripts/DownloadMetadata.html
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Download the master example index from Google Sheets
//                and store in the global variable EXAMPLELIST.  Then
//                create WORKINDEX from the EXAMPLELIST, and finally
//                run the given callback function.  This function should
//                be called from within a DOMContentLoaded event function.
//
{% endcomment %}


function DownloadMetadata(callback) {
	if (sessionStorage.EXAMPLELIST) {
		EXAMPLELIST = JSON.parse(sessionStorage.EXAMPLELIST);
		WORKINDEX = CreateWorkIndex(EXAMPLELIST);
		if (callback) {
			callback();
		}
	} else {
		var mid = "{{site.metadata_mid}}";
		let url = `https://script.google.com/macros/s/${mid}/exec`;
		console.warn("DOWNLOADING METADATA FROM URL", url);
		let request = new XMLHttpRequest();
		request.addEventListener("load", function () {
			try {
				EXAMPLELIST = JSON.parse(this.responseText);
				sessionStorage.EXAMPLELIST = this.responseText;
			} catch (error) {
				console.log("ERROR: ", error.message);
			}
			WORKINDEX = CreateWorkIndex(EXAMPLELIST);
			if (callback) {
				callback();
			}
		});
		request.open("GET", url);
		request.send();
	}
}



