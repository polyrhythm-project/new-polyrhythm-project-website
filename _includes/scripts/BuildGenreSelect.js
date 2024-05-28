{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:25:57 PDT 2024
// Last Modified: Mon May 27 09:00:19 PDT 2024
// Filename:      _includes/scripts/BuildGenreSelect.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Build the genre select for the homepage and browse page.
//
{% endcomment %}


function BuildGenreSelect(workindex, selector, options) {
	if (!options) {
		options = {};
	}
	let defaultText = options.defaultText;
	if (!defaultText) {
		defaultText = "All genres";
	}
	let genres = {};
	let keys = Object.keys(workindex);
	for (let i=0; i<keys.length; i++) {
		let first = workindex[keys[i]][0];
		let genre = first[INDEX_Genre];
		if (!genre) {
			console.warn("Warning: No genre parameter in", first);
			continue;
		}
		genre = genre.replace(/\s+$/, "").replace(/^\s+/, "");
		if (first[INDEX_Sub_Genre]) {
			let subgenre = first[INDEX_Sub_Genre];
			subgenre = subgenre.replace(/\s+$/, "").replace(/^\s+/, "");
	 		genre += "/" + subgenre;
		}
		genres[genre] = 1;
	}

	let glist = Object.keys(genres).sort();
	let element = document.querySelector(selector);
	if (!element) {
		console.warn("Warning: Cannot find", selector);
		return;
	}
	let output = "";
	output += `<option value="">${defaultText}</a>`;
	let lastgenre = "";
	for (let i=0; i<glist.length; i++) {
		if (!glist[i]) {
			continue;
		}
		let subgenre = "";
		let matches = glist[i].match(/([^\/]+)\/([^\/]+)/);
		if (matches) {
			let g = matches[1];
			subgenre = matches[2];
			if (g != lastgenre) {
				output += `<option class="genre" value="${g}">${g}</option>`;
				lastgenre = g;
			}
		}
		output += `<option class="subgenre" value="${glist[i]}">`;  
		output += `&nbsp;&nbsp;&nbsp;&nbsp;${subgenre}`;
		output += `</option>`;
	}
	element.innerHTML = output;
}



