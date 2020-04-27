$(document).ready(function () {

    if ($(".animsition").length) {
        $(".animsition").animsition({
            inClass: 'fade-in-up',
            outClass: 'fade-out-up',
            inDuration: 1000,
            outDuration: 800,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'body',
            loadingClass: 'animsition-loading',
            loadingInner: '',
            timeout: false,
            timeoutCountdown: 3000,
            onLoadEvent: true,
            browser: ['animation-duration', '-webkit-animation-duration'],
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function (url) { window.location.href = url; }
        });
    };
});