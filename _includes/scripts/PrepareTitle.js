{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:42:58 PDT 2024
// Last Modified: Sat May 25 20:43:01 PDT 2024
// Filename:      _includes/scripts/PrepareTitle.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Remove parenthese (translated title) from input.
//
{% endcomment %}


function PrepareTitle(name) {
	return name.replace(/\(.*?\)/g, "");
}



