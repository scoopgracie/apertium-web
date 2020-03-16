document.querySelector('#translate').onclick = function() {
	source_menu = document.querySelector('#sourcelang')
	dest_menu = document.querySelector('#destlang')

	source_lang = source_menu.options[source_menu.selectedIndex].value
	dest_lang = dest_menu.options[dest_menu.selectedIndex].value

	document.querySelector('#destbox').value = translate(source_lang, dest_lang, document.querySelector('#sourcebox').value)
}

document.querySelector('#swaplangs').onclick = function() {
	source_menu = document.querySelector('#sourcelang')
	dest_menu = document.querySelector('#destlang')

	source_lang = source_menu.options[source_menu.selectedIndex].value
	dest_lang = dest_menu.options[dest_menu.selectedIndex].value

	for (i in source_menu.options) {
		if (source_menu.options[i].value == dest_lang) {
			source_menu.selectedIndex = i
		}
	}

	for (i in dest_menu.options) {
		if (dest_menu.options[i].value == source_lang) {
			dest_menu.selectedIndex = i
		}
	}
}
