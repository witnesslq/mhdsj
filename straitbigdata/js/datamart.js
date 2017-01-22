/**
 * Created by try on 2016.6.6.
 */
$(function () {
        //ul动画
        $('.nav li').hover(function(){
            $('span',this).stop().css('height','2px');
            $('span',this).animate({
                left:'0',
                width:'100%',
                right:'0'
            },200);
        },function(){
            $('span',this).stop().animate({
                left:'50%',
                width:'0'
            },200);
        });
    //获取集市列表添加到页面中
    //获取所有的列表
    $.ajax({
        url:localStorage.serverurl+'/market/list',
        success: function (data) {
            for(var i=0;i<data.info.length;i++){
                $("#datamart_list").append('<li class="animated zoomIn">'+
                    '<div class="cloudimg"><a href="cloud_view.html?id=' + data.info[i][0]+
                    '"><img src='+localStorage.imgurl+data.info[i][5]+
                    '   width="120" height="120" border="0" /></a></div>'+
                    '<div class="cloudtit"><a href="cloud_view.html?id=' +
                    data.info[i][0]+
                    '">' +
                    data.info[i][1] +
                    '</a></div>'+
                    '<div class="cloudcon">支持格式：json/xml</div>'+
               '</li>')
            }
        }
    })
    
});
//获取指定列表
var temp=[1,2,3];
selecttype=function(e,event){
        if($(event).context.className=="classtit"){
            $(event).removeClass("classtit");
            $(event).addClass("remclasstit");
            temp.splice($.inArray(e,temp),1)
        }
        else {
            $(event).removeClass("remclasstit");
            $(event).addClass("classtit");
            temp.push(e);
        }
    if(temp.length!=0){
        for(var i=1;i<temp.length+1;i++){
            $("#datamart_list").empty();
            $.ajax({
                url:localStorage.serverurl+'/market/list?type='+temp[i-1],
                success:function(data){
                    for(var i=0;i<data.info.length;i++){
                        $("#datamart_list").append('<li class="animated zoomIn">'+
                            '<div class="cloudimg"><a href="cloud_view.html?id=' + data.info[i][0]+
                            '"><img src="'+localStorage.imgurl+data.info[i][5]+'" width="120" height="120" border="0" /></a></div>'+
                            '<div class="cloudtit"><a href="cloud_view.html?id=' +
                            data.info[i][0]+
                            '">' +
                            data.info[i][1] +
                            '</a></div>'+
                            '<div class="cloudcon">支持格式：json/xml</div>'+
                            '</li>')
                    }
                }
            })
        }
    }
    else {
        $("#datamart_list").empty()
    }
        
}