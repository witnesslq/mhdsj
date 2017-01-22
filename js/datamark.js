/**
 * Created by try on 2016.8.10.
 */
var datamarttype=["城市运行管理","产业经济发展","民生普惠服务"];
$(function(){
    localStorage.imgurl="http://szmh.straitbigdata.com/jdb_omms";
    localStorage.serverurl="http://szmh.straitbigdata.com/base";
    //localStorage.serverurl="http://192.168.2.134:8080/base";
    slectall=function(){
        localStorage.type="";
        $("#leftmenu li a").removeClass("classtit");
        $.ajax({
            url:localStorage.serverurl+'/market/list',
            success: function (data) {
                $("#content-right").empty();
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
        $("#datamarttype").empty().append("&gt;数据共享服务");
    }
    //获取集市列表
    if(localStorage.type){
        $($(".leftlist li a")[localStorage.type-1]).addClass("classtit");
        $.ajax({
            url:localStorage.serverurl+'/market/list?type='+localStorage.type,
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
        $("#datamarttype").empty().append("&gt;<a id='datamart' onclick='slectall();'>数据共享服务</a>&gt;"+datamarttype[localStorage.type-1]);

    }
    else {
        $.ajax({
            url:localStorage.serverurl+'/market/list',
            success: function (data) {
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
        })
        $("#datamarttype").empty().append("&gt;数据共享服务");
    }
    
    
});
var typemarker;
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
