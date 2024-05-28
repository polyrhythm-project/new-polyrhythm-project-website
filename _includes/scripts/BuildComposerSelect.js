{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:25:57 PDT 2024
// Last Modified: Sat May 25 20:26:00 PDT 2024
// Filename:      _includes/scripts/BuildComposerSelect.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Build the composer select for the homepage and browse page.
//
{% endcomment %}


function BuildComposerSelect(workindex, selector, options) {
	if (!options.defaultText) {
		options.defaultText = "All composers";
	}
	let composers = {};
	let keys = Object.keys(workindex);
	for (let i=0; i<keys.length; i++) {
		let first = workindex[keys[i]][0];
		let composer = first[INDEX_Composer_Name];
		let name;
		if (options.lastName) {
			name = PreparePerson(composer);
		} else {
			name = GetComposerLastName(composer);
		}
		composers[name] = 1;
	}
	let clist = Object.keys(composers).sort();
	let element = document.querySelector(selector);
	if (!element) {
		console.error("ERROR: Cannot find", selector);
		return;
	}
	let output = "";
	output += `<option value="">${options.defaultText}</a>`;
	for (let i=0; i<clist.length; i++) {
		if (!clist[i]) {
			continue;
		}
		output += `<option value="${clist[i]}">${clist[i]}</option>`;
	}
	element.innerHTML = output;
}



