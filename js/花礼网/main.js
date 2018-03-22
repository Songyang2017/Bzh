//  ========== 
//  = Hua.com > m.hua.com 首页JS文件，独立文件 （2017年10月23日11:49:50）= 
//  = lastModify 2017年11月6日09:32:07= 
//  ========== 
function reqUrlParam(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?ae896b60487020696d3df0e260c080bf";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
//记录来源 ajax
$(function () {
    var sid = reqUrlParam("sid");
    var uid = reqUrlParam("u_id");
    var rmd = Math.random();
    $.get("/Home/From?rmd=" + rmd + "&sid=" + sid + "&u_id" + uid, null, function (data) {
        //不做处理
    }, "json");
});
$(function() {
    //异步加载图片
    $("img[data-original]").lazyload({
        effect: "fadeIn",
        threshold: 100,
        placeholder: "//img02.hua.com/m/pro_detail/375x409.png"
    });
    getHomeData();
    //MainBannerController
    var mainBanner = new Swiper('#mainBanner', {
        pagination: "#mainBanner .swiper-pagination",
        paginationClickable: true,
        autoplay: 3500,
        loop: true
    });
    //关闭头部banner
    function isShowTopBanner(){
        var bool = $.cookie("HomeTopBannerHide");
        var ua = navigator.userAgent.toLowerCase();
        var isWechat = ua.match(/MicroMessenger/i)!==null?true:false;;
        if(bool||isWechat){
            $("#topBanner").remove();
        }else{
            $("#topBanner").show();
        }
    }
    isShowTopBanner();
    $("#btnTopClose").click(function(e){
        $("#topBanner").remove();
        $.cookie('HomeTopBannerHide', '1', { expires: 1, path: '/' });
    });
    //TopSectionHeader
    var $header = $(".top-section > .header");
    var $goTop = $(".float-btn > a[data-action='goTop']");
    var headerOffsetTop = $header.offset().top;
    $(document).scroll(function() {
        //ToggleHeaderStyle
        var $scrollTop = $(this).scrollTop();
        //顶部搜索条控制
//      if($scrollTop > headerOffsetTop + 42) {
//          $header.addClass("active");
//      } else {
//          $header.removeClass("active");
//      }
        //ToggleFloatBtn GoTop
        if($scrollTop >= window.screen.height) {
            $goTop.addClass("show");
        } else {
            $goTop.removeClass("show");
        }
    });
    $goTop.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 300);
    });
    //BrandBannerController
    var brandBanner = new Swiper('#brandBanner', {
        pagination: "#brandBanner .swiper-pagination",
        lazyLoading: true,
        lazyLoadingOnTransitionStart: true,
        onSlideChangeEnd: function(swiper) {
            $(".business>.controller>li").eq(swiper.activeIndex).addClass("active").siblings("li").removeClass("active");
            var desc = swiper.slides[swiper.activeIndex].getAttribute("data-desc");
            $(".business>.brand-desc").text(desc);
        }
    });
    $(".business>.controller>li").click(function() {
        var index = $(this).index();
        brandBanner.slideTo(index, 600, true);
    });
    //首页状态：评论，登录等
    function getHomeData(c) {
        var kefuUrl = 'https://www.sobot.com/chat/h5/index.html?sysNum=d22b0bfa87fd42258397365c95bc5e08&partnerId=';
        $.ajax("/home/indexdatas",{
            method:"post",
            data:{c:c},
            timeout:30000,
            dataType:"json",
            success:function(data){
                if(data.Status == 0){
                    data = data.Datas;
                    $("#pjCount").text(data.CommentCount);
                    if (data.IsLogin) {
                        $(".header .notice").show();
                        $(".header .login").hide();
                    }
                    if (data.GwcCount > 0) {
                        $("#gwcCount").text(data.GwcCount).show();
                    }
                    $(".kefu").attr("href",kefuUrl + data.LoginId);
                }
                console.log(data);
            },
            error:function(XHR,textStatus,error){
                console.log("XHR:"+XHR,"textStatus:"+textStatus,"error:"+error);
            }
        });
    }
});