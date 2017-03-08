(function($){
    var tree = {
        init: function(J_dom) {
            this.bindEvent(J_dom); 
        },
        bindEvent: function(J_dom) {
            var _this = this; 
            $.each(J_dom.find('.lg-tree'), function(i, item) {
                var _tree = this;
                $(item).delegate('a', 'click', function() {
                    _this.setCurrent($(_tree), $(this));
                    if ($(this).hasClass('lg-fn-active') || $(this).hasClass('active')) {
                        _this.disactive($(this));
                    } else {
                        $.each($(_tree).find('a'), function(i, item) {
                            _this.disactive($(item));
                        })
                        _this.active($(this));
                    }
                })
            })
        },
        active: function(J_tar) { 
            var _this = this;
            J_tar.addClass('lg-fn-active');
            var parent = J_tar.parent().parent().parent().children("a:eq(0)");
            if (parent.is("a")) {
                _this.active(parent);
            }
        },
        disactive: function(J_tar) {
            var _this = this;
            J_tar.removeClass('lg-fn-active');
            J_tar.removeClass('active');
            var children = J_tar.parent().find('ul > li');
            if (children) {
                $.each(children, function(i, item) {
                    var a = $(item).find('a:eq(0)');
                    _this.disactive(a);
                })
            }
        },
        setCurrent: function(J_tree, J_tar) { 
            var _this = this;
            if (J_tree.find('.current').length) {
                $.each(_this.obj.find('.current'), function(i, item) {
                    $(item).removeClass('current');
                });
            } else if (J_tree.find('.lg-fn-current').length) {
                $.each(J_tree.find('.lg-fn-current'), function(i, item) {
                    $(item).removeClass('lg-fn-current');
                })
            }
            J_tar.addClass('lg-fn-current');
        }
    }  
    window.Tree= tree; 
})(window.jQuery);
