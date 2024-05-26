{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sun May 26 06:05:17 PDT 2024
// Last Modified: Sun May 26 06:05:20 PDT 2024
// Filename:      _includes/scripts/DownloadScoreData.html
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Download the score index from Google Sheets
//                and store in the global variable SCORELIST.
//                and finally run the given callback function.
//                This function should be called from within a
//                DOMContentLoaded event function.
//
{% endcomment %}


function DownloadScoreData(callback) {
	if (sessionStorage.SCORELIST) {
		SCORELIST = JSON.parse(sessionStorage.SCORELIST);
		if (callback) {
			callback();
		}
	} else {
		var mid = "{{site.score_mid}}";
		let url = `https://script.google.com/macros/s/${mid}/exec`;
		console.warn("DOWNLOADING SCORE DATA FROM URL", url);
		let request = new XMLHttpRequest();
		request.addEventListener("load", function () {
			try {
				SCORELIST = JSON.parse(this.responseText);
				sessionStorage.SCORELIST = this.responseText;
			} catch (error) {
				console.log("ERROR: ", error.message);
			}
			if (callback) {
				callback();
			}
		});
		request.open("GET", url);
		request.send();
	}
}



