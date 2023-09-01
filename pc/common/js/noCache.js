(function () {
    /* code */
    var time = new Date().getTime();
    if (!getParam("timestamp")) {
        var href = location.href;
        window.location.href = (addTimestamp(href))
    }

}());

function getParam(name) {
    return location.href.match(new RegExp('[?#&]' + name + '=([^?#&]+)', 'i')) ? RegExp.$1 : '';
}

function addTimestamp(url) {
    var code = url.indexOf("?") > -1 ? "&" : "?";
    return url + code + "timestamp=" + new Date().getTime();
}