//this is under css because it is more styling than behavior

function reheight() {
	document.querySelector('#logo').style.height = String(document.querySelector('hgroup').clientHeight) + 'px'
}
reheight()
window.onresize = reheight
