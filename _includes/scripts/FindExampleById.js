{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:31:31 PDT 2024
// Last Modified: Sat May 25 20:31:34 PDT 2024
// Filename:      _includes/scripts/FindExampleById.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Find an example entry by Exmaple ID in the example list.
//                Returns null if no entry found.
//
{% endcomment %}


function FindExampleById(exid, examples) {
	if (!exid) {
		return null;
	}
	if (!examples) {
		examples = EXAMPLELIST;
	}
	for (let i=0; i<examples.length; i++) {
		if (examples[i][INDEX_Suter_Example_Number] === exid) {
			return examples[i];
		}
	}
	return null;
}



