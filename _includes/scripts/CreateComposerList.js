{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:27:40 PDT 2024
// Last Modified: Sat May 25 20:27:43 PDT 2024
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
//
{% endcomment %}


function CreateComposerList(worklist) {
	let cinfo = {};
	let name;
	let born;
	let died;
	let bornloc;
	let diedloc;
	let nationality;
	for (let i=0; i<worklist.length; i++) {
		name = worklist[i][INDEX_Composer_Name];
		if (!name) {
			continue;
		}
		born = worklist[i][INDEX_Birth_Date];
		died = worklist[i][INDEX_Death_Date];
		bornloc = worklist[i][INDEX_Birth_Place];
		diedloc = worklist[i][INDEX_Death_Place];
		nationality = worklist[i][INDEX_Nationality];
		if (!cinfo[name]) {
			// create a name
			cinfo[name] = {};
			cinfo[name][INDEX_Composer_Name] = name;
			cinfo[name][INDEX_Birth_Date] = born;
			cinfo[name][INDEX_Death_Date] = died;
			cinfo[name][INDEX_Birth_Place] = bornloc;
			cinfo[name][INDEX_Death_Place] = diedloc;
			cinfo[name][INDEX_Nationality] = nationality.replace(/,\s*/g, ", ");
			cinfo[name]["@works"] = [];
			cinfo[name]["@works"].push(worklist[i]);
		} else {
			// add a work to the composer's list
			cinfo[name]["@works"].push(worklist[i]);
		}
	}
	let composers = Object.keys(cinfo).sort();
	let output = [];
	for (let i=0; i<composers.length; i++) {
		output.push(cinfo[composers[i]]);
	}

	return output;
}



