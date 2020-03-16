function enforce(first, second) {
	allInSecond = second.querySelectorAll('option')
	for (i in allInSecond) {
		allInSecond[i].disabled = ( allInSecond[i].value == first.options[first.selectedIndex].value )
	}
	if ( first.options[first.selectedIndex].value == second.options[second.selectedIndex].value ) {
		second.selectedIndex = 0
	}
	if ( first.options[first.selectedIndex].value == second.options[second.selectedIndex].value ) {
		second.selectedIndex = 1
	}
}

document.querySelector('#sourcelang').onchange = function() {
	enforce(
		document.querySelector('#sourcelang'),
		document.querySelector('#destlang')
	)
}
document.querySelector('#destlang').onchange = function() {
	enforce(
		document.querySelector('#destlang'),
		document.querySelector('#sourcelang')
	)
}
enforce(
	document.querySelector('#sourcelang'),
	document.querySelector('#destlang')
)
