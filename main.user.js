// ==UserScript==
// @name         DeepL无免费使用限额
// @namespace    https://github.com/gui-ying233/MoreFreeDeepL
// @version      1.0.0
// @description  去DeepL免费使用限额（无法调整翻译语言）
// @author       鬼影233
// @license      MIT
// @match        https://www.deepl.com/*/translator
// @icon         https://www.deepl.com/favicon.ico
// @supportURL   https://github.com/gui-ying233/MoreFreeDeepL/issues
// ==/UserScript==

(() => {
	"use strict";
	setInterval(() => {
		document.body
			.querySelector('div[contenteditable="false"]')
			?.setAttribute("contenteditable", true);
		document.body
			.querySelector(
				"div[id|=headlessui-dialog-panel] button:not([class*=button-module--color_primaryAlt])"
			)
			?.click();
	}, 0);
	document.head.appendChild(
		Object.assign(document.createElement("style"), {
			textContent:
				'section[aria-labelledby="translation-source-heading"]>.absolute,div[id^="headlessui-dialog"]{display:none}',
		})
	);
})();
