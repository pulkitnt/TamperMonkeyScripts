// ==UserScript==
// @name         Copy Python Packages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copies a list of commas separated python packages from the current environment page
// @author       Pulkit Bhardwaj
// @match        https://www.google.com/search?q=tampermonkey+copy+to+clipboard&oq=tampermonkey+copy+to+clipboard&aqs=chrome.0.69i59j69i60l3.6097j0j7&sourceid=chrome&ie=UTF-8
// @grant        GM_setClipboard
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    let package_list=[];
    $("#pkgs-table > tbody > tr").each(function () {
        $(this).each(function () {
            let tmp_package = $(this).attr('data-type') == 'Python' ? $(this).attr('data-name') : '';
            if (tmp_package)
                package_list.push(tmp_package);
        })
    })
    GM_setClipboard(package_list.toString());
})();