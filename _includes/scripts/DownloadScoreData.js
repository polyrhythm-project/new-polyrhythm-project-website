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
		SCOREINDEX = CreateScoreIndex(SCORELIST);
		if (callback) {
			callback();
		}
	} else {
		var mid = "{{site.score_mid}}";
		let url = `https://script.google.com/macros/s/${mid}/exec`;
		console.warn("DOWNLOADING SCORE DATA FROM URL", url);
		let request = new XMLHttpRequest();
		request.addEventListener("load", function () {
			if (request.status >= 200 && request.status < 300) {
				try {
					SCORELIST = JSON.parse(this.responseText);
					sessionStorage.SCORELIST = this.responseText;
					SCOREINDEX = CreateScoreIndex(SCORELIST);
					if (callback) {
						callback();
					}
				} catch (error) {
					console.log("ERROR: ", error.message);
				}
			} else if (request.status >= 300 && request.status < 400) {
				// Handle redirection
				let newUrl = request.getResponseHeader('Location');
				console.warn("REDIRECTING TO NEW URL", newUrl);
				let newRequest = new XMLHttpRequest();
				newRequest.addEventListener("load", function () {
					if (newRequest.status >= 200 && newRequest.status < 300) {
						try {
							SCORELIST = JSON.parse(this.responseText);
							sessionStorage.SCORELIST = this.responseText;
							SCOREINDEX = CreateScoreIndex(SCORELIST);
							if (callback) {
								callback();
							}
						} catch (error) {
							console.log("ERROR: ", error.message);
						}
					} else {
						console.log("Error fetching data from redirected URL");
					}
				});
				newRequest.open("GET", newUrl);
				newRequest.send();
			} else {
				console.log("Error fetching data from URL");
			}
		});
		request.open("GET", url);
		request.send();
	}
}



