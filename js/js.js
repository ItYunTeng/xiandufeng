/**
 * Created by wang on 2017/9/22.
 */
//nav
window.onload = function () {
    $(".anmint").hover(function () {
        $(this).find(".dt1").stop().fadeIn(500);
        $(this).find(".dt2").stop().fadeIn(1000);
        $(this).find(".dt3").stop().fadeIn(1500);
        $(this).find(".dt4").stop().fadeIn(2000);
    }, function () {
        $(this).find("dt").stop().fadeOut();
    });
}


// function d1(){
//     $(".nav>ul>li>span").slideUp();
// }
//
// function d2(){
//     $(".nav>ul>li>span").slideDown(3000);
// }


//banner轮播
window.onload=function () {
    $(function () {
        //banner
        var bannerLength1 = $('.gsshowList li').length;
        for (i = 0; i < bannerLength1; i++) {
            //显示index的索引
            // $('.showList li').eq(i).text(i+1)
        }
        $('.gsshowList li').click(function () {
            window.clearTimeout(timer1)
            $('.gsshowList li').removeClass('special')
            $(this).toggleClass('special')
            thisImg1 = $(this).attr('imgs')
            $('.gsbanner').animate({opacity: 0.5}, 1000, function () {
                $('.gsbanner').css('background-image', 'url("' + thisImg1 + '")').fadeTo("slow", 3000)
            })
            thisIndex = $(this).index() + 1 >= bannerLength1 ? 0 : $(this).index() + 1
            timer1 = window.setTimeout("$('.gsshowList li').eq(thisIndex).trigger('click') ", 2500)
        })
        //banner case
        timer1 = window.setTimeout("$('.gsshowList li').eq(1).trigger('click')", 2000)
        window.setInterval("$('.case-left-arrow').trigger('click')", 1000)

    })

}
$.carousel = {
    now : 0,                    //当前显示的图片索引
    hasStarted : false,         //是否开始轮播
    interval : null,            //定时器
    liItems : null,             //要轮播的li元素集合
    len : 0,                    //liItems的长度
    aBox : null,                //包含指示器的dom对象
    bBox : null,                //包含前后按钮的dom对象

    /**
     * 初始化及控制函数
     * @param bannnerBox string 包含整个轮播图盒子的id或class
     * @param aBox  string 包含指示器的盒子的id或class
     * @param btnBox string 包含前后按钮的盒子的id或class
     */
    startPlay : function(bannnerBox,aBox,btnBox) {
        //初始化对象参数
        var that = this;
        this.liItems = $(bannnerBox).find('ul').find('li');
        this.len = this.liItems.length;
        this.aBox = $(bannnerBox).find(aBox);
        this.bBox = $(bannnerBox).find(btnBox);
        //让第一张图片显示，根据轮播图数量动态创建指示器，并让第一个指示器处于激活状态，隐藏前后按钮
        this.liItems.first('li').css({'opacity': 1, 'z-index': 0}).siblings('li').css({'opacity': 0, 'z-index': 0});
        var aDom = '';
        for (var i = 0; i < this.len; i++){
            aDom += '<a></a>';
        }
        $(aDom).appendTo(this.aBox);
        this.aBox.find('a:first').addClass("indicator-active");
        this.bBox.hide();
        //鼠标移入banner图时，停止轮播并显示前后按钮，移出时开始轮播并隐藏前后按钮
        $(bannnerBox).hover(function (){
            that.stop();
            that.bBox.fadeIn(200);
        }, function (){
            that.start();
            that.bBox.fadeOut(200);
        });
        //鼠标移入指示器时，显示对应图片，移出时继续播放
        this.aBox.find('a').hover(function (){
            that.stop();
            var out = that.aBox.find('a').filter('.indicator-active').index();
            that.now = $(this).index();
            if(out!=that.now) {
                that.play(out, that.now)
            }
        }, function (){
            that.start();
        });
        //点击左右按钮时显示上一张或下一张
        $(btnBox).find('a:first').click(function(){that.next()});
        $(btnBox).find('a:last').click(function(){that.prev()});
        //开始轮播
        this.start()
    },
    //前一张函数
    prev : function (){
        var out = this.now;
        this.now = (--this.now + this.len) % this.len;
        this.play(out, this.now);
    },
    //后一张函数
    next : function (){
        var out = this.now;
        this.now = ++this.now % this.len;
        this.play(out, this.now);
    },
    /**
     * 播放函数
     * @param out number 要消失的图片的索引值
     * @param now number 接下来要轮播的图的索引值
     */
    play : function (out, now){
        this.liItems.eq(out).stop().animate({opacity:0,'z-index':0},500).end().eq(now).stop().animate({opacity:1,'z-index':1},500);
        this.aBox.find('a').removeClass('indicator-active').eq(now).addClass('indicator-active');
    },
    //开始函数
    start : function(){
        if(!this.hasStarted) {
            this.hasStarted = true;
            var that = this;
            this.interval = setInterval(function(){
                that.next();
            },2000);
        }
    },
    //停止函数
    stop : function (){
        clearInterval(this.interval);
        this.hasStarted = false;
    }
};

$(function(){
    $.carousel.startPlay('#J_bg_ban','#J_bg_indicator','#J_bg_btn');
})



//判断---->正则表达式
function showUser() {
    var aa=document.getElementById("username").value;//获取文本框的值
    var bb=/^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;//用户输入进入进行比较
    var cc=bb.test(aa);//进行比较
    var dd=document.getElementById("box1");//错误提示提示
    if (cc==false){
        //错误就提示
        dd.innerHTML="您输入的用户名有误，请您重新输入!";
    }else {
        //正确就不提示
        dd.innerHTML="";
    }
}

function showTel() {
    var aa=document.getElementById("telphone").value;//获取文本框的值
    var bb=/^(((13|14|15|18|17)\d{9}))$/;//用户输入进入进行比较
    var cc=bb.test(aa);//进行比较
    var dd=document.getElementById("box2");//错误提示提示
    if (cc==false){
        //错误就提示
        dd.innerHTML="您输入的电话有误，请您重新输入!";
    }else {
        //正确就不提示
        dd.innerHTML="";
    }
}
function showCity() {
    var aa=document.getElementById("City").value;//获取文本框的值
    var bb=/^[\u0391-\uFFE5]+$/;//用户输入进入进行比较
    var cc=bb.test(aa);//进行比较
    var dd=document.getElementById("box3");//错误提示提示
    if (cc==false){
        //错误就提示
        dd.innerHTML="您输入的地区有误，请您重新输入!";
    }else {
        //正确就不提示
        dd.innerHTML="";
    }
}


