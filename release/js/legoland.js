window.onload = function() {
    contentResize();
}

window.onresize = function() {
    contentResize();
}


function contentResize() {
    if (document.getElementsByClassName('lg-body-full')[0]) {
        var bodyH = document.getElementsByClassName('lg-body-full')[0].offsetHeight;
        var winH = document.body.clientHeight;
        var navH = document.getElementsByClassName('lg-nav')[0].offsetHeight;
        var breadH = document.getElementsByClassName('lg-breadcrumb')[0].offsetHeight;
        var minH = winH - navH - breadH - 70;
        if (bodyH < minH) {
            document.getElementsByClassName('lg-body-full')[0].style.height = minH + 'px';
            console.log(bodyH, winH, navH, minH, document.getElementsByClassName('lg-body-full')[0].offsetHeight);
        }
    } 
}
