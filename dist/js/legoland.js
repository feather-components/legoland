window.onload = function() {
    contentResize();
}

window.onresize = function() {
    contentResize();
}


function contentResize() {
    if (document.getElementsByClassName('lg-s-body-full')[0]) {
        var bodyH = document.getElementsByClassName('lg-s-body-full')[0].offsetHeight;
        var winH = document.body.clientHeight;
        var navH = document.getElementsByClassName('lg-m-nav')[0].offsetHeight;
        var breadH = document.getElementsByClassName('lg-m-breadcrumb')[0].offsetHeight;
        var minH = winH - navH - breadH - 30;
        if (bodyH < minH) {
            document.getElementsByClassName('lg-s-body-full')[0].style.height = minH + 'px';
            console.log(bodyH, winH, navH, minH, document.getElementsByClassName('lg-s-body-full')[0].offsetHeight);
        }
    } 
}
