{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:27:40 PDT 2024
// Last Modified: Mon May 27 00:06:19 PDT 2024
// Filename:      _includes/scripts/CreateComposerList.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Make a list of the composers sorted alphabetically
//                by last name, with arrays of the works by that
//                composers that are included in the database.
//                Used primarily on the composers page.
//
// Other data fields about composer that are generated:
//    "Birth Date"
//    "Birth Place"
//    "Death Date"
//    "Death Place"
//    "Nationality"
//    @examples = list of examples by the composer
//    @works    = list of works by the composer, where each
//                entry is an array of examples for a work.
//
{% endcomment %}


function CreateComposerList(workindex) {
	if (!workindex) {
		workindex = WORKINDEX;
	}
	let cinfo = {};
	let name;
	let born;
	let died;
	let bornloc;
	let diedloc;
	let nationality;
	let keys = Object.keys(workindex);
	for (let i=0; i<keys.length; i++) {
		let first = workindex[keys[i]][0];
		name = first[INDEX_Composer_Name];
		if (!name) {
			console.warn("ERROR: No composer name for", first);
			continue;
		}
		born        = first[INDEX_Birth_Date];
		died        = first[INDEX_Death_Date];
		bornloc     = first[INDEX_Birth_Place];
		diedloc     = first[INDEX_Death_Place];
		nationality = first[INDEX_Nationality];
		if (!cinfo[name]) {
			// create a name
			cinfo[name] = {};
			cinfo[name][INDEX_Composer_Name] = name;
			cinfo[name][INDEX_Birth_Date] = born;
			cinfo[name][INDEX_Death_Date] = died;
			cinfo[name][INDEX_Birth_Place] = bornloc;
			cinfo[name][INDEX_Death_Place] = diedloc;
			cinfo[name][INDEX_Nationality] = nationality.replace(/,\s*/g, ", ");
			if (cinfo[name]["@works"]) {
				cinfo[name]["@works"].push(workindex[keys[i]]);
			} else {
				cinfo[name]["@works"] = [workindex[keys[i]]];
			}
			if (cinfo[name]["@examples"]) {
				cinfo[name]["@examples"] = cinfo[name]["@examples"].concat(workindex[keys[i]]);
			} else {
				cinfo[name]["@examples"] = workindex[keys[i]];
			}
		} else {
			// add a work to the composer's list
			cinfo[name]["@works"].push(workindex[keys[i]]);
			cinfo[name]["@examples"] = cinfo[name]["@examples"].concat(workindex[keys[i]]);
		}
	}
	let composers = Object.keys(cinfo).sort();
	let output = [];
	for (let i=0; i<composers.length; i++) {
		cinfo[composers[i]]["@examples"].sort(function (a, b) {
			let anum = parseInt(a["Suter Example Number"]);
			let bnum = parseInt(b["Suter Example Number"]);
			if (a < b) {
				return -1;
			} else if (a > b) {
				return +1;
			}
			return a["Suter Example Number"].localeCompare(b["Suter Example Number"]);
		});
		output.push(cinfo[composers[i]]);
	}
	return output;
}



