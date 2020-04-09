/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'sell-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-icon-test': '&#xe657;',
		'icon-icon-test1': '&#xe658;',
		'icon-icon-test2': '&#xe659;',
		'icon-icon-test3': '&#xe65a;',
		'icon-guanbi': '&#xe607;',
		'icon-search01': '&#xe726;',
		'icon-yonghu': '&#xe60f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
