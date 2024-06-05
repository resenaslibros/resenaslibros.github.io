function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    hideBanner();
    window.dataLayer.push({ 'event': 'cookieConsentUpdated', 'cookieConsent': 'accepted' });
    document.getElementsByClassName('container')[0].style.pointerEvents = '';
}

function rejectCookies() {
    setCookie('cookieConsent', 'rejected', 365);
    hideBanner();
    window.dataLayer.push({ 'event': 'cookieConsentUpdated', 'cookieConsent': 'rejected' });
    document.getElementsByClassName('container')[0].style.pointerEvents = 'none';
}

function hideBanner() {
    document.getElementById('cookie-consent-banner').style.display = 'none';
}

window.onload = function() {
    let consent = getCookie('cookieConsent');
    if (!consent) {
        document.getElementById('cookie-consent-banner').style.display = 'block';
        document.getElementsByClassName('container')[0].style.pointerEvents = 'none';
        const buttons = document.querySelectorAll("#cookie-consent-banner > button");
        if (buttons.length > 0) buttons[0].addEventListener('click', acceptCookies, false);
        if (buttons.length > 1) buttons[1].addEventListener('click', rejectCookies, false);
    } else {
        document.getElementById('cookie-consent-banner').style.display = '';
        document.getElementsByClassName('container')[0].style.pointerEvents = '';
    }
};