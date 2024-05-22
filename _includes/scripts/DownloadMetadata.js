

//////////////////////////////
//
// DownloadMetadata --  Download the master index and store
//    in a global let called EXAMPLELIST.  Then create WORKLIST
//    by grouping examples by works.
//

function DownloadMetadata(callback) {
	var mid = "{{site.metadata_mid}}";
	let url = `https://script.google.com/macros/s/${mid}/exec`;

console.warn("URL", url);

	if (sessionStorage.EXAMPLELIST) {
		EXAMPLELIST = JSON.parse(sessionStorage.EXAMPLELIST);
		WORKLIST = GenerateWorklist(EXAMPLELIST);
		if (callback) {
			callback();
		}
	} else {
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
		}
	}
	});
	request.open("GET", url);
	request.send();
}



