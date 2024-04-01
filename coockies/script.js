function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            var value = c.substring(nameEQ.length, c.length);
            document.getElementById('cookieValue').innerHTML = 'Cookie Value: ' + value;
            return value;
        }
    }
    document.getElementById('cookieValue').innerHTML = 'Cookie not found!';
    return null;
}

function clearCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.getElementById('cookieValue').innerHTML = 'Cookie cleared!';
}
