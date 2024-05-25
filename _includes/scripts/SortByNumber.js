

//////////////////////////////
//
// SortByNumber --
//

function SortByNumber(index, selector, sortinfo) {
	sortinfo.column = index;
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

		return Anum - Bnum;
	});

	if (sortinfo.order[index]) {
		sortinfo.order[index]++;
		if (sortinfo.order[index] % 2 == 0) {
			datalist.reverse();
		}
	} else {
		sortinfo.order[index] = 1;
	}

	let body = document.querySelector(selector + " tbody");
	if (body) {
		body.innerHTML = "";
		for (let i=0; i<datalist.length; i++) {
			body.appendChild(datalist[i]);
		}
	}
}



