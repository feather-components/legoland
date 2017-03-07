+ function($) {
    'use strict';

    var toggle = '[data-toggle="tab"]';
    var Tab = function(element) {
        $(element).on('click.tab', this.toggle);
    }

    Tab.prototype.toggle = function(e) {
        var $this = $(this);
        var tabId = $this.attr('data-id');
        var $siblings=$this.siblings(); 
        $.each($siblings, function(i, target) {
            disactive($(target));
        })
        active($this);  
        return false;
    }

    function init(){
        $.each($(toggle),function(i,target){
            var $t=$(target);
            if($t.hasClass('active')||$t.hasClass('lg-active')||$t.hasClass('lg-fnactive')){
                $('#'+$t.attr('data-id')).show();
            }
            else{
                $('#'+$t.attr('data-id')).hide();
            }
        })

    }

    function active(obj) {
        obj.addClass('lg-fn-active');
        $('#'+obj.attr('data-id')).show();
    }

    function disactive(obj) {
        obj.removeClass('lg-fn-active');
        obj.removeClass('lg-active');
        obj.removeClass('active'); 
        $('#'+obj.attr('data-id')).hide();
    } 
    $(document).on('click.tab', toggle, Tab.prototype.toggle);
    init();

}(window.jQuery);
