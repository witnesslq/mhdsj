/**
 * Created by try on 2016.6.6.
 */
$(function() {
    //图片
    //弹出框
        $('.theme-login').click(function(){
            $('.theme-popover-mask').fadeIn(100);
            $('.theme-popover').slideDown(200);
        })
        $('.theme-poptit .close').click(function(){
            $('.theme-popover-mask').fadeOut(100);
            $('.theme-popover').slideUp(200);
        })
    //动画
    $('.nav li').hover(function() {
            $('span', this).stop().css('height', '2px');
            $('span', this).animate({
                    left: '0',
                    width: '100%',
                    right: '0'
                },
                200);
        },
        function() {
            $('span', this).stop().animate({
                    left: '50%',
                    width: '0'
                },
                200);
        });

    //解析url
    var url = location.search ;
    console.log(url) ;
    var urltemp = url.split("&") ;
    var urlIndex = urltemp[0].split("=");
    var detailid = urlIndex[1];

    $("#cloud_view_img").append('<img src="'+localStorage.imgurl+"/resource/icon/img"+detailid+'.jpg" width="120" height="120" border="0" />')
    if (detailid) {
        $.ajax({
            url: localStorage.serverurl + '/market/detail?id=' + detailid,
            success: function(data) {
                console.log(data);
                $("#api_name").append(data.info.name);
                $("#api_desc").append(data.info.desc);
                $("#api_content").append(data.info.api_content);
            }
        })
    }
    $('#sbm').click(function(){
        var a=$("#private_name").val()
        var b=$("#private_phone").val()
        if(a!=""){
            if(b.length!=0){
            var reg =/^1[3|4|5|8][0-9]\d{4,8}$/;
            var r = b.match(reg);
            console.log(r)
            if(r==null){
                alert('对不起，您输入的手机格式不正确!');
            }
            else {
                $.ajax({
                    url: localStorage.serverurl + '/market/apply?name='+$("#private_name").val()+'&phone='+$("#private_phone").val(),
                    type: "POST",
                    success: function(data) {
                        alert(data.msg)
                        document.getElementById("theme-popover").style.display ="none";
                        document.getElementById("theme-popover-mask").style.display ="none";
                    }
                })
            }
         }
        }
        else {
            alert("请输入姓名")
        }
        
    })
});
var cancelsubmit=function(){
    document.getElementById("theme-popover").style.display ="none";
    document.getElementById("theme-popover-mask").style.display ="none";
}