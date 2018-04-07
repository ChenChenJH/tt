/**
main.html用到的js
*/
$(function(){
    //设置点击所有元素用户提示框都会隐藏
    $(document).click(function(){
         $("#my_ul").hide();
     });
    //阻止冒泡事件，即document的事件对用户提示框无效
    $("#my_a,#my_ul").click(function(event){
        event.stopPropagation();
    });
    //用户提示框切换
    $('#my_a').click(function(){
        $('#my_ul').toggle(200);
    });
   
    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });
    //nav-mini切换
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        }else{
            $('.nav').removeClass('nav-mini');
        }
    });

    //全选全不选
    $('#checks').change(function(){
        if(this.checked){
            $('.form-check-input').prop('checked',true);
        }else{
            $('.form-check-input').prop('checked',false);
        }
    });

    //鼠标移到表格行改变背景颜色
    $('.tr_hover').mouseover(function(){
          $(this).addClass('tr_hover_color');
      }).mouseout(function(){
          $(this).removeClass('tr_hover_color');
    });

    //表格单行点击选中复选框
    $('.tr_hover ').click(function(){
        if($(this).find('.form-check-input').is(':checked')){
            $(this).find('.form-check-input').prop('checked',false);
        }else{
            $(this).find('.form-check-input').prop('checked',true);
        }
    });

     //阻止冒泡事件，表格单行点击选中复选框事件无效
    $(".tr_hover button,:checkbox").click(function(event){
        event.stopPropagation();
    });

    //给所有的表格里面的按钮分页按钮绑定click事件
    $('.tr_hover button,.pagination a').click(function(){
        confirm('该功能未开放!');
    });
});