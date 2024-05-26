{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:25:57 PDT 2024
// Last Modified: Sat May 25 20:26:00 PDT 2024
// Filename:      _includes/scripts/HighlightLinkInHeader.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   border-bottom: 2px solid #8c1515;
//
{% endcomment %}


function HighlightLinkInHeader() {
	let element = document.querySelector("ul.highlight");
	if (!element) {
		return;
	}

	let list = element.querySelectorAll("li a");
	let target = window.location.pathname.replace(/\/$/, "");
	for (let i=0; i<list.length; i++) {
		let location = list[i].pathname.replace(/\/$/, "");
		if (location === target) {
			list[i].style.borderBottom = "2px solid #8c1515";
		} else {
			list[i].style.borderBottom = "2px solid #f2f1eb";
		}
		if (list[i].textContent.match(/About/)) {
			list[i].style.borderBottom = "2px solid #f2f1eb";
		}
	}
}



