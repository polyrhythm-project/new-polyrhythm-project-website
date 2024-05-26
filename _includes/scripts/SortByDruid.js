{% comment %}
//
// Programmer:    Craig Stuart Sapp <craig@ccrma.stanford.edu>
// Creation Date: Sat May 25 20:43:43 PDT 2024
// Last Modified: Sat May 25 20:43:50 PDT 2024
// Filename:      _includes/scripts/SortByDruid.js
// vim:           set ts=3 nowrap ft=javascript:
//
// Description:   ???
//
// Needs updating to load sortinfo in input parameters.
//
{% endcomment %}


function SortByDruid(index, selector, reverse) {
	SORTCOLUMN = index;
	let data = document.querySelectorAll(selector + " > tbody > tr");
	let datalist = [];
	for (let i=0; i<data.length; i++) {
		datalist.push(data[i]);
	}
	datalist.sort(function(a, b) {
		let A = a.cells[index].querySelector("a").href;
		let B = b.cells[index].querySelector("a").href;

		if (!A) {
			return +1;
		}
		if (!B) {
			return -1;
		}

		if (A.match(/^\s*$/)) {
			return +1;
		}
		if (B.match(/^\s*$/)) {
			return -1;
		}

		let Anum = "";
		let Bnum = "";
		let matches;
		let regex = new RegExp(/([a-z]{2}\d{3}[a-z]{2}\d{4})/, 'i');
		if (matches = regex.exec(A)) {
			Anum = matches[1];
		}
		if (matches = regex.exec(B)) {
			Bnum = matches[1];
		}

	 	return Anum.localeCompare(Bnum);
		// }
	});

	SORTORDER[index]++;
	if (SORTORDER[index] % 2 == 0) {
		datalist.reverse();
	}

	let body = document.querySelector(selector + " tbody");
	if (body) {
		body.innerHTML = "";
		for (let i=0; i<datalist.length; i++) {
			body.appendChild(datalist[i]);
		}
	}
}



