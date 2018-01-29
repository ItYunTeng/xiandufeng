/**
 * Created by wang on 2017/9/22.
 */
//下拉菜单
$('.nav>ul>li').mouseover(function(){
    if($(this).hasClass('dropdown')){
        $(this).find('ul').show();
    }
});
$('.nav>ul>li').mouseout(function(){
    if($(this).hasClass('dropdown')){
        $(this).find('ul').hide();
    }
});

//banner轮播
//因为使用了document，所以js需要放在需要执行的代码下面生效才能生效
var li=document.getElementById('bannerBar').getElementsByTagName("li");
var num=0;
var len=li.length;

setInterval(function(){
    li[num].style.display="none";
    num=++num==len?0:num;
    li[num].style.display="inline-block";
},3000);//切换时间