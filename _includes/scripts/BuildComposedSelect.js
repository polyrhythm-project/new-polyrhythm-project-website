{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Fri Jun 14 19:07:16 PDT 2024
// Last Modified: Fri Jun 14 19:07:19 PDT 2024
// Filename:      _includes/scripts/BuildComposedSelect.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Build the composed select for the homepage.
//
// Options:       defaultText: Text to display for default selection.
//                counts: Display work counts for entry.
//
{% endcomment %}


function BuildComposedSelect(workindex, selector, options) {
	if (!options) {
		options = {};
	}
	let defaultText = options.defaultText;
	if (!defaultText) {
		defaultText = "Composition date";
	}
	let composeds = {};
	let keys = Object.keys(workindex);
	for (let i=0; i<keys.length; i++) {
		let first = workindex[keys[i]][0];
		let composed = first[INDEX_Composition_Year];
		if (!composed) {
			console.warn("Warning: No Composition Year parameter in", first);
			continue;
		}
		let matches = composed.match(/(\d{4})/);
		if (matches) {
			let year = matches[1];
			if (composeds[year]) {
				composeds[year]++;
			} else {
				composeds[year] = 1;
			}
		}
	}

	let plist = Object.keys(composeds).sort();

	decades = {};
	for (let i=0; i<plist.length; i++) {
		let year = plist[i];
		let decade = parseInt(year / 10) * 10;
		if (!decades[decade]) {
			decades[decade] = composeds[plist[i]];
		} else {
			decades[decade] += composeds[plist[i]];
		}
	}

	plist = Object.keys(decades).sort();

	let element = document.querySelector(selector);
	if (!element) {
		console.warn("Warning: Cannot find", selector);
		return;
	}
	let output = "";
	output += `<option value="">${defaultText}</a>`;

	for (let i=0; i<plist.length; i++) {
		if (options.counts) {
			let text    = `${plist[i]}s&nbsp;&nbsp;&nbsp;&nbsp;(${decades[plist[i]]})`;
			let endyear = parseInt(plist[i]) + 9;
			let value   = `${plist[i]}-${endyear}`;
			output += `<option value="${value}">${text}</option>\n`;
		}
	}
	element.innerHTML = output;
}



