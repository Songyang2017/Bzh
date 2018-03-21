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
		el.innerHTML = '<span style="font-family: \'bzh\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-address': '&#xe900;',
		'icon-alipay': '&#xe901;',
		'icon-back': '&#xe902;',
		'icon-balance': '&#xe903;',
		'icon-beautyMake': '&#xe904;',
		'icon-check': '&#xe909;',
		'icon-delete': '&#xe90b;',
		'icon-down': '&#xe90c;',
		'icon-downBlack': '&#xe90d;',
		'icon-edit': '&#xe90e;',
		'icon-enterRight': '&#xe90f;',
		'icon-exercise': '&#xe910;',
		'icon-famale': '&#xe912;',
		'icon-fire': '&#xe914;',
		'icon-fitness': '&#xe915;',
		'icon-healthyService': '&#xe918;',
		'icon-hook': '&#xe91d;',
		'icon-ladybro': '&#xe91e;',
		'icon-male': '&#xe921;',
		'icon-medical': '&#xe923;',
		'icon-mon-bay': '&#xe926;',
		'icon-myActive': '&#xe928;',
		'icon-Oval-3': '&#xe929;',
		'icon-parents': '&#xe92a;',
		'icon-up': '&#xe930;',
		'icon-upBlack': '&#xe931;',
		'icon-wechatPay': '&#xe932;',
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
