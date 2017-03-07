var sidebar = {
    init: function() { 
        this.obj = $('.wp-sidebar');
        this.hand();
        Tree.init($('.wp-sidebar'));
    },   
    hand:function(){ 
        var _this=this;
        _this.obj.before('<div class="wp-sidebar-hand" data-toggle="slide-left" data-targets=".content-left,.content-right"></div>');
        _this.obj.parent().delegate('.wp-sidebar-hand','click',function(){ 
            if($(this).hasClass('lg-fn-close')){
                _this.open();
            }
            else{
                _this.close();
            }
        })
    },
    close:function(){
        var _this=this;
        $('.wp-sidebar-hand').addClass('lg-fn-close');   
    },
    open:function(){
        var _this=this;
        $('.wp-sidebar-hand').removeClass('lg-fn-close');   
    }
}
sidebar.init(); 
 

 
