{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Tue May 28 06:55:17 PDT 2024
// Last Modified: Tue May 28 06:55:21 PDT 2024
// Filename:      _includes/scripts/BuildPremieredSelect.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Build the premiere select for the homepage.
//
// Options:       defaultText: Text to display for default selection.
//                counts: Display work counts for entry.
//
{% endcomment %}


function BuildPremieredSelect(workindex, selector, options) {
	if (!options) {
		options = {};
	}
	let defaultText = options.defaultText;
	if (!defaultText) {
		defaultText = "Premiere date";
	}
	let premieres = {};
	let keys = Object.keys(workindex);
	for (let i=0; i<keys.length; i++) {
		let first = workindex[keys[i]][0];
		let premiere = first[INDEX_Premiere_Date];
		if (!premiere) {
			console.warn("Warning: No Premiere Date parameter in", first);
			continue;
		}
		let matches = premiere.match(/(\d{4})/);
		if (matches) {
			let year = matches[1];
			if (premieres[year]) {
				premieres[year]++;
			} else {
				premieres[year] = 1;
			}
		}
	}

	let plist = Object.keys(premieres).sort();
	let element = document.querySelector(selector);
	if (!element) {
		console.warn("Warning: Cannot find", selector);
		return;
	}
	let output = "";
	output += `<option value="">${defaultText}</a>`;

	for (let i=0; i<plist.length; i++) {
		if (options.counts) {
			output += `<option value="${plist[i]}">${plist[i]}&nbsp;&nbsp(${premieres[plist[i]]})</option>\n`;
		} else {
			output += `<option value="${plist[i]}">${plist[i]}</option>\n`;
		}
	}
	element.innerHTML = output;
}



