/**
 * Created by try on 2016.6.12.
 */
$(function(){
    map = new BMap.Map("county_main",{minZoom:5});
    //左上角，添加默认缩放平移控件
    map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, offset: new BMap.Size(20, 53),type: BMAP_NAVIGATION_CONTROL_LARGE}));
    map.enableScrollWheelZoom(true);//随鼠标缩放
    map.enableScrollWheelZoom();
    var color=['#008EEB', '#F00070', '#A72A26', '#F07000', '#EB264D', '#4D5B63', '#13182B', '#5C316E', '#3053CB', '#8FC800'];
    //画行政区
    function getBoundary(){
        sRegion="福州市闽侯县"; map.centerAndZoom("福州市闽侯县",11);
        var bdary = new BMap.Boundary();
        bdary.get(sRegion, function(rs){ //获取行政区域
            //map.clearOverlays(); //清除地图覆盖物 
            var count = rs.boundaries.length; //行政区域的点有多少个
                for(var i = 0; i < count; i++){
                    var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeStyle:"dashed",strokeColor: color[i], strokeOpacity:0.8, fillColor: "#F4F0D2"}); //建立多边形覆盖物
                    map.addOverlay(ply); //添加覆盖物
                    // map.setViewport(ply.getPath()); //调整视野 
                }
        });
    }
    getBoundary();
    //获取工商数据
    $.ajax({
        url:localStorage.serverurl2+'/straitbd/servlet/CommonServlet/GetBD?type=7&pagecount=60',
        success:function(data){
            data=eval("(" + data + ")");
            var temp=data.data.data;
            var marker = new Array(); //存放标注点对象的数组 
            var info = new Array(); //存放提示信息窗口对象的数组
            var searchInfoWindow = new Array();
            for(var i=0;i<temp.length;i++){
                marker[i] = new BMap.Marker(new BMap.Point(temp[i].lon,temp[i].lat));  // 创建标注
                info[i] ="<div style='margin-top: 3px'><nobr>地址："+temp[i].address+"</nobr></div><span style='margin-bottom: 8px'>项目："+temp[i].projecrname+"</span><br><span class='countylistpr2'>"+temp[i].type+"</span>"; // 创建信息窗口对象
                searchInfoWindow[i] = new BMapLib.SearchInfoWindow(map, info[i], {
                    title  : "<a id='companydetail'>"+temp[i].companyname+"</a>",      //标题
                    panel  : "panel",         //检索结果面板
                    enableAutoPan : true,     //自动平移
                    searchTypes   :[]
                });
                var content = temp[i];
                map.addOverlay(marker[i]);               // 将标注添加到地图中
                marker[i].addEventListener("click",
                    (function(k){
                        // js 闭包
                        return function(){
                            searchInfoWindow[k].open(marker[k]);
                        }
                    })(i)
                );
            }
        }
    })
})

