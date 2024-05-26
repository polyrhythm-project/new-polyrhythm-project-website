{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:47:33 PDT 2024
// Last Modified: Sat May 25 20:47:36 PDT 2024
// Filename:      _includes/scripts/SortByTempo.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   Sort a table by tempo by given column index.
//
// Needs updating
//
{% endcomment %}


function SortByTempo(index, selector, reverse) {
	SORTCOLUMN = index;
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

		let Anum = 0;
		let Bnum = 0;
		let matches;

		if (matches = A.match(/(\d+)/)) {
			Anum = parseInt(matches[1]);
		}

		if (matches = B.match(/(\d+)/)) {
			Bnum = parseInt(matches[1]);
		}

		if (Anum == 0) {
			if (Bnum == 0) {
				return 0;
			}
			return +1;
		}

		if (Bnum == 0) {
			if (Anum == 0) {
				return 0;
			}
			return -1;
		}

		// Check for non matches here (when num/den values are 0).

		if (Anum < Bnum) {
			return -1;
		}
		if (Anum > Bnum) {
			return +1;
		}

		return 0;

	});

	SORTORDER[index]++;
	if (SORTORDER[index] % 2 == 0) {
		datalist.reverse();
	}

	//if (reverse) {
	//	datalist.reverse();
	//}

	let body = document.querySelector(selector + " tbody");
	if (body) {
		body.innerHTML = "";
		for (let i=0; i<datalist.length; i++) {
			body.appendChild(datalist[i]);
		}
	}
}



