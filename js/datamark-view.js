var datamarttype=["城市运行管理","产业经济发展","民生普惠服务"];
$(function() {
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

    $("#cloud_view_img").append('<img src="'+localStorage.imgurl+"/resource/icon/img"+detailid+'.jpg" width="120" height="120" border="0" />');
    slectallone=function(type){
        if(type){
            localStorage.type=type;
        }
        else {
            localStorage.type="";
        }
        window.location.href="datamart.html";
    }
    if (detailid) {
        $.ajax({
            url: localStorage.serverurl + '/market/detail?id=' + detailid,
            success: function(data) {
                //console.log(data);
                //添加面包屑
                $($("#leftmenu li a")[data.info.type-1]).addClass("classtit");
                $("#datamarttype").empty().append("&gt;<a href='datamart.html'>数据共享服务</a>&gt;<a  style='cursor:pointer' onclick='slectallone("+data.info.type+")' >"+datamarttype[data.info.type-1]+"</a> &gt;"+data.info.name);
                $(".cloudview-tit").append(data.info.name);
                $(".cloudview-con").append(data.info.desc);
                $(".cloudview-listcon").append(data.info.api_content);
            }
        })
    }
    $('#sbm').click(function(){
        var a=$("#private_name").val();
        var b=$("#private_phone").val();
        if(a!=""&&b!=""){
            if(b.length!=0){
                var reg =/^1[3|4|5|8][0-9]\d{4,8}$/;
                var r = b.match(reg);
                console.log(r)
                if(r==null){
                    alert('请输入正确的手机格式!');
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
            alert("姓名或手机号不能为空")
        }

    })
});
var cancelsubmit=function(){
    document.getElementById("theme-popover").style.display ="none";
    document.getElementById("theme-popover-mask").style.display ="none";
};
selecttype=function(type,event){
    localStorage.type=type;
    $("#leftmenu li a").removeClass("classtit");
    $($("#leftmenu li a")[type-1]).addClass("classtit");
    $("#x1ub0z1 li a").removeClass("classtit");
    if(typemarker!=type){
        typemarker=type;
        $("#content-right").empty();
        $.ajax({
            url:localStorage.serverurl+'/market/list?type='+type,
            success:function(data){
                for(var i=0;i<data.info.length;i++){
                    $("#content-right").append('<div class="datamart-list animated zoomIn">'+
                        '<a href="datamart-view.html?id='+data.info[i][0]+'">'+
                        '<div class="datamart-box"><img src='+localStorage.imgurl+data.info[i][5]+
                        '   width="120" height="120" border="0" /></div>'+
                        '<p>'+data.info[i][1]+'</a></p>'+
                        '<div class="boxleft"><i><img src="images/data-mart_15.jpg"/></i>125432</div>'+
                        '<div class="boxright"><i><img src="images/data-mart_18.jpg"/></i>json/xml</div>'+
                        '</div>')
                }
            }
        });
        $("#datamarttype").empty().append("&gt;<a id='datamart' onclick='slectall();'>数据共享服务</a>&gt;"+datamarttype[type-1])
    }
};
console.log(localStorage.type);