{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Fri May 24 12:14:04 PDT 2024
// Last Modified: Fri May 24 12:14:06 PDT 2024
// Filename:      _includes/scripts/scripts-common.html
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Downlad the master example index from Google Sheets
//                and store in the global variable EXAMPLELIST.  Then
//                create WORKLIST from the EXAMPLELIST, and finally
//                run the given callback function.  This function should
//                be called from within a DOMContentLoaded event function.
//
{% endcomment %}


function DownloadMetadata(callback) {
	document.body.classList.add("wait");
	CGI = GetCgiParameters();

	if (sessionStorage.EXAMPLELIST) {
		EXAMPLELIST = JSON.parse(sessionStorage.EXAMPLELIST);
		WORKLIST = GenerateWorklist(EXAMPLELIST);
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
			WORKLIST = GenerateWorklist(EXAMPLELIST);
			if (callback) {
				callback();
			}
		});
		request.open("GET", url);
		request.send();
	}
}



