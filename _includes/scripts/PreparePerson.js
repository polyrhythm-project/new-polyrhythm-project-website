{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:40:57 PDT 2024
// Last Modified: Sat May 25 20:41:00 PDT 2024
// Filename:      _includes/scripts/PreparePerson.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Convert long name to full name, without () or [] qualifiers.
//
{% endcomment %}


function PreparePerson(name) {
	if (!name) {
		console.log("Error empty name in PreparePerson():", name);
		return name;
	}
	return name.replace(/\(.*?\)/g, "").replace(/\[(.*?)\]/g, "");
}



