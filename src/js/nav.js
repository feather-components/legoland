$(function () {
    $nav=$('.lg-m-nav');  
    $navH=$nav.height();
    $itemH=$('.lg-m-nav .lg-m-nav-by').height(); 
    if($navH<$itemH){//muti line
        $('.lg-m-nav .lg-m-nav-tl').show();//show tab trigger
        $('.lg-m-nav-by').css('top','-'+$('.lg-m-nav-by .active').offset().top+'px');//locate current nav 
    } 
    //bind tab trigger
    $nav.on('click','.lg-m-nav-tl',function(){ 
        if($(this).attr('class').indexOf('active')>0){
            $(this).removeClass('active');
            $('.lg-m-nav .lg-m-nav-bytab').hide();
        }
        else{
            $(this).addClass('active');
            $('.lg-m-nav .lg-m-nav-bytab').show();
        }
    }) 
    $nav.on('click','.lg-m-nav-bytab li',function(){
        $('.lg-m-nav .lg-m-nav-tl').click();
    })  
})