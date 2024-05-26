{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:25:57 PDT 2024
// Last Modified: Sat May 25 20:26:00 PDT 2024
// Filename:      _includes/scripts/CopyToClipboard.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Copy some text to the system clipboard so that it
//                can be pasted (such as into a text file or spreadsheet).
//
{% endcomment %}


function CopyToClipboard(data) {
	const element = document.createElement('textarea');
	element.value = data;
	element.setAttribute('readonly', '');
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);
}



