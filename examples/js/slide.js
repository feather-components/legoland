+ function($) {
    'use strict';

    var toggle = '[data-toggle="slide-left"],[data-toggle="slide-right"],[data-toggle="slide-up"],[data-toggle="slide-down"]';
    var Slide = function(element) {
        $(element).on('click.slide', this.toggle);
    }

    Slide.prototype.toggle = function(e) { 
        var $this = $(this);
        var aTarget = $this.attr('data-targets').split(','); 
        var isOpposite = $this.hasClass('lg-fn-slide');
        var sDirection =$(this).attr('data-toggle').split('-')[1]; 
        var iWidth=$(aTarget[0]).width();
        var iHeight=$(aTarget[0]).height(); 
        if (isOpposite) { 
            $this.removeClass('lg-fn-slide');
            $.each(aTarget, function(i, target) { 
                slideBackObj(target, sDirection,iWidth,iHeight);
            })
        } else {
            $this.addClass('lg-fn-slide');
            $.each(aTarget, function(i, target) { 
                slideObj(target, sDirection,iWidth,iHeight);
            })
        }
        return false;
    }

    function slideObj(obj, direction, iW, iH) { 
        var $obj = $(obj); 
        switch (direction) {
            case 'left':
                var position = $obj.css('position');
                if (position == 'absolute' || position == 'relative') {
                    var iOrigin = parseInt($(obj).css('left').replace('px','')); 
                    if(isNaN(iOrigin))
                        iOrigin=0; 
                    $(obj).animate({ left: -iW + iOrigin });
                } else {
                    var iOrigin = parseInt($(obj).css('margin-left').replace('px',''));
                    if(isNaN(iOrigin))
                        iOrigin=0;  
                    $(obj).animate({ marginLeft: -iW + iOrigin });
                }
                break;
            case 'right':
                var position = $obj.css('position');
                if (position == 'absolute' || position == 'relative') {
                    var iOrigin = parseInt($(obj).css('right').replace('px',''));
                    if(isNaN(iOrigin))
                        iOrigin=0;  
                    $(obj).animate({ right: -iW + iOrigin });
                } else {
                    var iOrigin = parseInt($(obj).css('margin-right').replace('px',''));
                    if(isNaN(iOrigin))
                        iOrigin=0;   
                    $(obj).animate({ marginRight: -iW +iOrigin });
                }
                break;
            case 'up':
                var position = $obj.css('position');
                if (position == 'absolute' || position == 'relative') {
                    var iOrigin = parseInt($(obj).css('top').replace('px','')); 
                    if(isNaN(iOrigin))
                        iOrigin=0;  
                    $(obj).animate({ top: -iH + iOrigin });
                } else {
                    var iOrigin = parseInt($(obj).css('margin-top').replace('px','')); 
                    if(isNaN(iOrigin))
                        iOrigin=0; 
                    $(obj).animate({ marginTop: -iH +iOrigin });
                }
                break;
            case 'down':
                var position = $obj.css('position');
                if (position == 'absolute' || position == 'relative') {
                    var iOrigin = parseInt($(obj).css('bottom').replace('px','')); 
                    if(isNaN(iOrigin))
                        iOrigin=0; 
                    $(obj).animate({ bottom: -iH + iOrigin });
                } else {
                    var iOrigin = parseInt($(obj).css('margin-bottom').replace('px','')); 
                    if(isNaN(iOrigin))
                        iOrigin=0; 
                    $(obj).animate({ marginBottom: -iH +iOrigin});
                }
                break;
        } 
    }

    function slideBackObj(obj, direction, iW, iH) { 
        var $obj = $(obj);
        switch (direction) {
            case 'left':
                var position = $obj.css('position');
                if (position == 'absolute' || position == 'relative') {
                    var iOrigin  = parseInt($(obj).css('left').replace('px','')); 
                    $(obj).animate({ left: (iW + iOrigin) });
                } else {
                    var iOrigin = parseInt($(obj).css('margin-left').replace('px','')); 
                    $(obj).animate({ marginLeft: ( iOrigin +iW ) });
                }
                break;
            case 'right':
                var position = $obj.css('position');
                if (position == 'absolute' || position == 'relative') {
                    var iOriginRight = parseInt($(obj).css('right').replace('px','')); 
                    $(obj).animate({ right: (iW + iOriginRight) });
                } else {
                    var iOriginRight = parseInt($(obj).css('margin-right').replace('px','')); 
                    $(obj).animate({ marginRight: ( iOriginRight +iW ) });
                }
                break;
            case 'up':
                var position = $obj.css('position');
                if (position == 'absolute' || position == 'relative') {
                    var iOriginTop = parseInt($(obj).css('top').replace('px','')); 
                    $(obj).animate({ top: (iH + iOriginTop) });
                } else {
                    var iOriginTop = parseInt($(obj).css('margin-top').replace('px','')); 
                    $(obj).animate({ marginTop: ( iOriginTop +iH ) });
                }
                break;
            case 'down':
                var position = $obj.css('position');
                if (position == 'absolute' || position == 'relative') {
                    var iOrigin = parseInt($(obj).css('bottom').replace('px','')); 
                    $(obj).animate({ bottom: (iH + iOrigin) });
                } else {
                    var iOrigin = parseInt($(obj).css('margin-bottom').replace('px','')); 
                    $(obj).animate({ marginBottom: ( iOrigin +iH ) });
                }
                break;
        } 
    } 

    $(document).on('click.slide', toggle, Slide.prototype.toggle); 

}(window.jQuery);
