{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:38:29 PDT 2024
// Last Modified: Sat May 25 20:38:31 PDT 2024
// Filename:      _includes/scripts/GetComposerLastName.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Get the composer's last name from a string in the form:
//                "last, first".  Remove any () or [] content that gives
//                the long form of the name.
//
{% endcomment %}


function GetComposerLastName(input) {
	return input.replace(/\s*,.*/, "").replace(/\(.*?\)/, "", "g").replace(/\[.*?\]/, "", "g");
}



