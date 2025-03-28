{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:48:37 PDT 2024
// Last Modified: Sat May 25 20:48:40 PDT 2024
// Filename:      _includes/scripts/SortByText.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Sort a table by text by given column index.
//
{% endcomment %}


function SortByText(index, selector, sortinfo) {
	let data = document.querySelectorAll(selector + " > tbody > tr");
	let datalist = [];
	for (let i=0; i<data.length; i++) {
		datalist.push(data[i]);
	}
	datalist.sort(function(a, b) {
		let A = a.cells[index].textContent;
		let B = b.cells[index].textContent;
		if (A.match(/^\s*$/)) {
			return +1;
		}
		if (B.match(/^\s*$/)) {
			return -1;
		}
		let result = A.localeCompare(B);
		return result;
	});

	if (sortinfo.order[index]) {
		sortinfo.order[index]++;
		if (sortinfo.order[index] % 2 == 0) {
			datalist.reverse();
		}
	} else {
		sortinfo.order[index] = 1;
	}
	for (let i=0; i<sortinfo.order.length; i++) {
		if (i != index) {
			sortinfo.order[i] = 0;
		}
	}

	let body = document.querySelector(selector + " tbody");
	if (body) {
		body.innerHTML = "";
		for (let i=0; i<datalist.length; i++) {
			body.appendChild(datalist[i]);
		}
	}
}



