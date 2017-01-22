/**
 * Created by try on 2016.6.12.
 */
$(function(){
    //初始化
    $(".signin").click(function(e) {
        e.preventDefault();
        $("fieldset#signin_menu").toggle();
        $(".signin").toggleClass("menu-open");
    });
    $(".signin2").click(function(e) {
        e.preventDefault();
        $("fieldset#signin_menu").toggle();
    });
    $("#county_right1_charts").empty();
    $("#countyframetop1").hide();
    if(localStorage.rank==3){
        var provincename=localStorage.provinceName;
        var cityName=localStorage.cityName;
        var countyName=localStorage.countyName;
        localStorage.areacode=localStorage.countycode;
        //console.log(provincename,cityName,countyName)
        var zhixiashi = ["北京", "重庆", "上海", "天津"];
        var zizhiqu = ["宁夏", "内蒙古", "广西", "新疆", "西藏"];
        if (zhixiashi.indexOf(parseInt(provincename)) != -1) {
            $(".provincename").html(provincename + '市');
        }
        else {
            if (zizhiqu.indexOf(parseInt(provincename)) != -1) {
                $(".provincename").html(provincename);
            }
            else {
                $(".provincename").html(provincename + '省');
            }
        }
        $(".topleft-muluico").after('<div class="topleft-tit"><span>'+cityName+'</span></div><div class="topleft-muluico"></div><div class="topleft-tit"><span>'+countyName+'</span></div><div class="topleft-muluico"></div>');
        $(".countyname").html(countyName);
    }
    if(localStorage.rank==2){
        var provincename=localStorage.provinceName;
        var cityName=localStorage.cityName;
        localStorage.areacode=localStorage.citycode;
        var zhixiashi = ["北京", "重庆", "上海", "天津"];
        var zizhiqu = ["宁夏", "内蒙古", "广西", "新疆", "西藏"];
        if (zhixiashi.indexOf(parseInt(provincename)) != -1) {
            $(".provincename").html(provincename + '市');
        }
        else {
            if (zizhiqu.indexOf(parseInt(provincename)) != -1) {
                $(".provincename").html(provincename);
            }
            else {
                $(".provincename").html(provincename + '省');
            }
        }
        $(".topleft-muluico").after('<div class="topleft-tit"><span>'+cityName+'</span></div><div class="topleft-muluico"></div>');
        $(".countyname").html(cityName);
    }
    if(localStorage.rank==1){
        var provincename=localStorage.provinceName;
        localStorage.areacode=localStorage.provicecode;
        var zhixiashi = ["北京", "重庆", "上海", "天津"];
        var zizhiqu = ["宁夏", "内蒙古", "广西", "新疆", "西藏"];
        if ($.inArray(provincename,zhixiashi) != -1) {
            $(".provincename").html(provincename + '市');
            $(".countyname").html(provincename+ '市');
        }
        else {
            if ($.inArray(provincename,zizhiqu)!=-1) {
                $(".provincename").html(provincename);
                $(".countyname").html(provincename);
            }
            else {
                $(".provincename").html(provincename + '省');
                $(".countyname").html(provincename+ '省');
            }
        }
    }
    if(localStorage.rank==0){
                $(".countyname").html("全国");
               $(".topleft-arr").remove();
        localStorage.areacode=""
    }
    $(".topleft-tit").click(function(){
        switch ($(this).index()){
            case 0:
                localStorage.rank=0;
                break;
            case 2:
                localStorage.rank=1;
                break;
            case 4:
                localStorage.rank=2;
                break;
            case 6:
                localStorage.rank=3;
                break;
        }
        window.location.href="county.html";
    });
    localStorage.areacode="";
    //获取一级行业分类
    $.ajax({
        url:localStorage.serverurl2+'/straitbd/servlet/CommonServlet/GetMenu?',
        success:function(data){
            data=eval("(" + data + ")");
            var data_length=data.data.length;
            for(var i=0;i<data_length;i++){
                $("#list_type").append('<option value='+data.data[i].fristclass+'>'+data.data[i].fristclass+'</option>');
            }
        }
    });
    //企业创新指数
    //var myChart_county1 = echarts.init(document.getElementById('county_right1_charts'));
    //var option_county1= {
    //    tooltip : {
    //        formatter: "{a} <br/>{b} : {c}%"
    //    },
    //    padding:0,
    //    toolbox: {
    //        show:false,
    //        feature: {
    //            restore: {},
    //            saveAsImage: {}
    //        }
    //    },
    //    series: [
    //        {
    //            name: '行业创新指数',
    //            type: 'gauge',
    //            detail: {formatter:'{value}%'},
    //            data: [{value:13, name: ''}]
    //        }
    //    ]
    //};
    //myChart_county1.setOption(option_county1);
    //获取知名企业绘制字符云
    //绘制知名企业字符云图
            //字符云
    //var myChart_county2 = echarts.init(document.getElementById('county_right2_charts'));
    //var option_county2 = {
    //    tooltip: {},
    //    series: [{
    //        type: 'wordCloud',
    //        gridSize: 1,
    //        sizeRange: [15, 40],
    //        rotationRange: [-90,90],
    //        shape: 'pentagon',
    //        width: 310,
    //        height: 240,
    //        textStyle: {
    //            normal: {
    //                color: function () {
    //                    return 'rgb(' + [
    //                            Math.round(Math.random() * 160),
    //                            Math.round(Math.random() * 160),
    //                            Math.round(Math.random() * 160)
    //                        ].join(',') + ')';
    //                }
    //            },
    //            emphasis: {
    //                shadowBlur: 4,
    //                shadowColor: '#333'
    //            }
    //        },
    //        data: [
    //            {
    //                name: '东南汽车',
    //                all_name:'东南（福建）汽车工业有限公司',
    //                value: 2800
    //
    //            },
    //            {
    //                name: '闽兴编织品',
    //                all_name:'闽侯闽兴编织品有限公司',
    //                value: 1986
    //            },
    //            {
    //                name: '清禄鞋业',
    //                all_name:'福建清禄鞋业有限公司',
    //                value: 1055
    //            },
    //            {
    //                name: '嘉达纺织',
    //                all_name:'福建嘉达纺织股份有限公司',
    //                value: 1467
    //            },
    //            {
    //                name: ' 捷联电子',
    //                all_name:'福建捷联电子有限公司',
    //                value: 2244
    //            },
    //            {
    //                name: '鑫海冶金',
    //                all_name:'福建鑫海冶金有限公司',
    //                value: 1898
    //            },
    //            {
    //                name: '金磊纺织',
    //                all_name:'福建省长乐市金磊纺织有限公司',
    //                value: 1484
    //            },
    //            {
    //                name: '德盛镍业',
    //                all_name:'福建德盛镍业有限公司',
    //                value: 1112
    //            },
    //            {
    //                name: '金源纺织',
    //                all_name:'福建省长乐市金源纺织有限公司',
    //                value: 965
    //            },
    //            {
    //                name: '星网锐捷',
    //                all_name:'福建星网锐捷通讯股份有限公司',
    //                value: 2582
    //            },
    //            {
    //                name: ' 明达工业',
    //                all_name:'明达工业(福建)有限公司',
    //                value: 555
    //            },
    //            {
    //                name: '华映光电',
    //                all_name:'华映光电股份有限公司',
    //                value: 550
    //            },
    //            {
    //                name: '华源纺织',
    //                all_name:'福建省长乐市华源纺织有限公司',
    //                value: 462
    //            },
    //            {
    //                name: '正隆纺织',
    //                all_name:'福建省长乐市正隆纺织有限公司',
    //                value: 366
    //            },
    //            {
    //                name: '亿鑫钢铁',
    //                all_name:'福建亿鑫钢铁有限公司',
    //                value: 360
    //            },
    //            {
    //                name: '华冠光电',
    //                all_name:'福建华冠光电有限公司',
    //                value: 282
    //            },
    //            {
    //                name: '冠海造船',
    //                all_name:'福建省冠海造船工业有限公司',
    //                value: 273
    //            },
    //            {
    //                name: '经纬集团',
    //                all_name:'福建省经纬集团有限公司',
    //                value: 265
    //            }
    //        ]
    //    } ]
    //};
    //myChart_county2.setOption(option_county2);
    //myChart_county2.on('click', function (params) {
    //    localStorage.companyname="";
    //    localStorage.companyname=params.data.all_name;
    //    window.location.href="companydetail.html";
    //});
        //}
    //});
    
    map = new BMap.Map("county_main",{minZoom:5});
   //左上角，添加默认缩放平移控件
    map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, offset: new BMap.Size(20, 53),type: BMAP_NAVIGATION_CONTROL_LARGE}));
    map.enableScrollWheelZoom(true);//随鼠标缩放
    map.enableScrollWheelZoom();
    //var fujian=['福州','漳州','泉州','厦门','南平','宁德','龙岩','莆田','三明','平潭'];
    //var fujian=[cityName+countyName];
    var color=['#008EEB', '#F00070', '#A72A26', '#F07000', '#EB264D', '#4D5B63', '#13182B', '#5C316E', '#3053CB', '#8FC800'];
    //画行政区
    function getBoundary(i){
        if(i==3){sRegion=cityName+countyName; map.centerAndZoom(cityName+countyName,11);};
        if(i==2){sRegion=cityName;map.centerAndZoom(cityName,9);};
        if(i==1){sRegion=provincename; map.centerAndZoom(provincename,7);};
        if(i==0){sRegion="北京"; map.centerAndZoom("西安",6);};
        var bdary = new BMap.Boundary();
        bdary.get(sRegion, function(rs){ //获取行政区域
            //map.clearOverlays(); //清除地图覆盖物 
            var count = rs.boundaries.length; //行政区域的点有多少个
            if(sRegion=="北京"){
                for(var i = 0; i < count; i++){
                    var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight:0.001,  fillColor: "transparent"}); //建立多边形覆盖物
                    map.addOverlay(ply); //添加覆盖物
                }
            }
            else {
                for(var i = 0; i < count; i++){
                    var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeStyle:"dashed",strokeColor: color[i], strokeOpacity:0.8, fillColor: "#F4F0D2"}); //建立多边形覆盖物
                    map.addOverlay(ply); //添加覆盖物
                    // map.setViewport(ply.getPath()); //调整视野 
                }
            }
        });
    }
    getBoundary(localStorage.rank);
    //获取工商数据
    $.ajax({
        url:localStorage.serverurl2+'/straitbd/servlet/CommonServlet/GetBD?type=7&pagecount=60',
        success:function(data){
            data=eval("(" + data + ")");
            var temp=data.data.data;
            //获取经纬度并写入数据库
            //var adds=[]
            //for(var i=0;i<temp.length;i++){
            //    if(temp[i].address){
            //        adds.push(temp[i].address)
            //    }
            //    else {
            //        adds.push(temp[i].companyname)
            //    }
            //}
            //var myGeo = new BMap.Geocoder();
            //var indexs=0;
            //function bdGEO(){
            //    var add = adds[indexs];
            //    geocodeSearch(add);
            //    indexs++;
            //}
            //function geocodeSearch(add){
            //    if(indexs < adds.length){
            //        setTimeout(bdGEO,500);
            //    }
            //    myGeo.getPoint(add, function(point){
            //        if (point) {
            //            console.log(add,point.lng, point.lat);
            //            $.ajax({
            //                url:"http://192.168.2.221:8086/straitbd/servlet/CommonServlet/UpdateCompanyLonLat?" ,
            //                type:"POST",
            //                data:{"lon":point.lng,"lat":point.lat,"companyname":temp[indexs-1].companyname},
            //            success:function (data){
            //            }
            //            })
            //        }
            //    }, "福建省");
            //}
            //bdGEO()
            //添加工商数据到百度地图
            var marker = new Array(); //存放标注点对象的数组 
            var info = new Array(); //存放提示信息窗口对象的数组
            var searchInfoWindow = new Array();
            for(var i=0;i<temp.length;i++){
                marker[i] = new BMap.Marker(new BMap.Point(temp[i].lon,temp[i].lat));  // 创建标注
                info[i] ="<div style='margin-top: 3px'><nobr>地址："+temp[i].address+"</nobr></div><span style='margin-bottom: 8px'>项目："+temp[i].projecrname+"</span><br><span class='countylistpr2'>"+temp[i].type+"</span>"; // 创建信息窗口对象
                searchInfoWindow[i] = new BMapLib.SearchInfoWindow(map, info[i], {
                    title  : "<a id='companydetail' onclick='showdetial()'>"+temp[i].companyname+"</a>",      //标题
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
global_data="";
global_type="";
var temp=[7];
var selsectindustry=function(e,event){
    $(".countylabel2").css("display","block");
    var classname=$("#list_type").val();
    //获取二级行业分类
    $.ajax({
        url:localStorage.serverurl2+'/straitbd/servlet/CommonServlet/GetMenu?',
        type:"POST",
        data:{"pname":classname},
        success:function(data){
            if(e==0){
                $("#list_type_second").empty();
                $("#list_type_second").append('<option value="">全部</option>');
            }
            if(classname!=""){
                data=eval("(" + data + ")");
                var data_length=data.data.length;
                for(var i=0;i<data_length;i++){
                    $("#list_type_second").append('<option value='+data.data[i].secondclass+'>'+data.data[i].secondclass+'</option>');
                }
            }
        }
    });
    if(e>0){
        if($(event).context.className==""){
            $(event).addClass("countylabellistselect");
            temp.push(e);
        }
        else {
            $(event).removeClass("countylabellistselect");
            temp.splice($.inArray(e,temp),1)
        }
        var a=$.inArray(7,temp);
        if(a==-1){
            $("#list_type").hide();
            $("#list_type").val("");
            $("#list_type_second").hide();
            $("#list_type_second").val("");
            $(".countylabel2").css("height","49px");
        }
        else {
            $("#list_type").show();
            $("#list_type_second").show();
            $(".countylabel2").css("height","79px");
        }
    }
    global_type=temp.toString();
    search_list(global_type);
}
var second_dustry=function(){
    $(".countylabel2").css("display","block");
    var classname=$("#list_type").val();
    global_type=temp.toString();
    search_list(global_type);
}
var submit_keywords=function(){
    $(".countylabel2").css("display","block");
    $("#signin_menu").css("display","none");
    var classname=$("#list_type").val();
    global_type=temp.toString();
    search_list(global_type);
}
var KeyDown=function(){
    if (event.keyCode == 13)
    {
        global_type=temp.toString();
        search_list(global_type);
    }
}
var search_list=function(type){
    var keyword= $("#list_name").val();
    var classname=$("#list_type").val();
    var classname_second=$("#list_type_second").val();
    if(keyword==undefined){
        keyword="";
    }
    var index=0;
    var pageno="";
    if(!type){
        type="";
    }
    $.ajax({
        url:localStorage.serverurl2+'/straitbd/servlet/CommonServlet/GetBD?',
        type:"POST",
        data:{"type":type,"pagecount":8,"name":keyword,"classname":classname,"pname":classname_second,"areacode":localStorage.areacode,"page":1},
        success:function(data){
            $("#hiddenresult").empty();
            $(".result").empty();
            data=eval("(" + data + ")");
            var temp4=data.data.data;
            var worddata=[];
            if(temp4.length){
                for(var i=0;i<data.data.pages;i++){
                    $("#hiddenresult").append("<div class='result'></div>");
                }
                for(var j=1;j<=data.data.data.length;j++){
                    var titlename1="";
                    switch(temp4[j-1].typecode){
                        case 1: //科研项目
                            if(!temp4[j-1].companyfirstclass){
                                temp4[j-1].companyfirstclass="暂无数据"
                            }
                            if(!temp4[j-1].projecrname){
                                temp4[j-1].projecrname="暂无数据"
                            }
                            titlename1="行业类别："+temp4[j-1].companyfirstclass+"<br>"+"项目名称："+temp4[j-1].projecrname;
                            break;
                        case 2: //申报项目
                            if(!temp4[j-1].projecrname){
                                temp4[j-1].projecrname="暂无数据"
                            }
                            titlename1="项目名称："+temp4[j-1].projecrname+"<br>"+"立项状态：";
                            break;
                        case 3: //三资企业
                            if(!temp4[j-1].address){
                                temp4[j-1].address="暂无数据"
                            }
                            titlename1="合作方式："+""+"<br>"+"地址："+temp4[j-1].address;
                            break;
                        case 4: //在建重点项目
                            if(!temp4[j-1].companyfirstclass){
                                temp4[j-1].companyfirstclass="暂无数据"
                            }
                            if(!temp4[j-1].projecrname){
                                temp4[j-1].projecrname="暂无数据"
                            }
                            titlename1="行业类别："+temp4[j-1].companyfirstclass+"<br>"+"项目名称："+temp4[j-1].projecrname;
                            break;
                        case 5: //产学研合作
                            if(!temp4[j-1].companyfirstclass){
                                temp4[j-1].companyfirstclass="暂无数据"
                            }
                            if(!temp4[j-1].projecrname){
                                temp4[j-1].projecrname="暂无数据"
                            }
                            titlename1="行业类别："+temp4[j-1].companyfirstclass+"<br>"+"项目名称："+temp4[j-1].projecrname;
                            break;
                        case 6: //大型企业
                            if(!temp4[j-1].address){
                                temp4[j-1].address="暂无数据"
                            }
                            titlename1="地址"+temp4[j-1].address;
                            break;
                        case 7: //工商数据
                            if(!temp4[j-1].companyfirstclass){
                                temp4[j-1].companyfirstclass="暂无数据"
                            }
                            if(!temp4[j-1].capital){
                                temp4[j-1].capital="暂无数据"
                            }
                            titlename1="行业类别："+temp4[j-1].companyfirstclass+"<br>"+"注册资本："+temp4[j-1].capital;
                            break;
                    }
                    global_data=data.data.data;
                    $(".result").append("" +
                        " <ul onclick='selectcompy("+j+")' class='countylist'>"+
                        "<li>"+
                        "<div class='countylistimg'>"+j+"</div>"+
                        "<div class='countylisttit'>"+data.data.data[j-1].companyname+"</div>"+
                        "<div class='countylistpr'>"+data.data.data[j-1].type+"</div>"+
                        "<div class='clear'></div>"+
                        "<div class='countylistcon'>"+titlename1+"</div>"+
                        "<div class='clear'></div>"+
                        "</li>"+
                        "<div class='clear'></div>"+
                        "</ul>");

                        var str=temp4[j-1].companyname;
                        var pattern = [,"福建省","福建","有限责任公司","开发有限公司","有限公司","股份","长乐市","福州分公司","分公司","子公司","公司"];
                        for(var i=0;i<pattern.length;i++){
                            str = str.replace(new RegExp(pattern[i]),"");
                        }
                        str = str.replace("\(\)","");
                        str = str.replace("\（\）","");
                        var arr={"name":str,"all_name":temp4[j-1].companyname,"value":(9-j)*10};
                        worddata.push(arr);
                }
                var arr2=[{
                    name: '经纬集团',
                    all_name:'福建省经纬集团有限公司',
                    value: 10

                    },
                    {
                        name: '华冠光电',
                        all_name:'福建华冠光电有限公司',
                        value: 6
                    },
                    {
                        name: '冠海造船工业',
                        all_name:'福建省冠海造船工业有限公司',
                        value: 5
                    },
                    {
                        name: '正隆纺织',
                        all_name:'福建省长乐市正隆纺织有限公司',
                        value: 4
                    },
                    {
                        name: ' 金源纺织',
                        all_name:'福建省长乐市金源纺织有限公司',
                        value: 3
                    },
                    {
                        name: '明达工业',
                        all_name:'明达工业(福建)有限公司',
                        value: 2
                    },
                    {
                        name: '亿鑫钢铁',
                        all_name:'福建亿鑫钢铁有限公司',
                        value: 1
                    },
                    {
                        name: '星网锐捷',
                        all_name:'福建星网锐捷通讯股份有限公司',
                        value: 20
                    }];
                worddata2=worddata;
                worddata=worddata.concat(arr2);
                var myChart_county2 = echarts.init(document.getElementById('county_right2_charts'));
                var option_county2 = {
                    tooltip: {},
                    series: [{
                        type: 'wordCloud',
                        gridSize: 2,
                        width:'100%',
                        sizeRange: [12, 35],
                        rotationRange: [-90, 90],
                        shape: 'pentagon',
                        textStyle: {
                            normal: {
                                color: function () {
                                    return 'rgb(' + [
                                            Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160)
                                        ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 4,
                                shadowColor: '#333'
                            }
                        },
                        data: worddata
                    } ]
                };
                myChart_county2.setOption(option_county2);
                myChart_county2.on('click', function (params) {
                    localStorage.companyname="";
                    localStorage.companyname=params.data.all_name;
                    window.location.href="companydetail.html";
                });
                //将搜索结果添加到地图中
                var myGeo = new BMap.Geocoder();
                var j=0;
                var tempindex4=0;
                var marker4 = new Array(); //存放标注点对象的数组 
                var info4 = new Array(); //存放提示信息窗口对象的数组
                var searchInfoWindow4 = new Array();
                function bdGEO4(){
                    if(tempindex4 < temp4.length){
                        var add = temp4[tempindex4].address;
                        geocodeSearch4(add);
                    }
                    tempindex4++;
                }
                function geocodeSearch4(add){
                    if(tempindex4 < temp4.length){
                        setTimeout(bdGEO4,300);
                    }
                    myGeo.getPoint(add, function(point){
                        if (point) {
                            //marker4[j] = new BMap.Marker(new BMap.Point(temp4[j].lon,temp4[j].lat));  // 创建标注
                            marker4[j] = new BMap.Marker(new BMap.Point(point.lng,point.lat));  // 创建标注
                            info4[j] ="<div style='margin-top: 3px'><nobr>地址："+temp4[j].address+"</nobr></div><br><span style='margin-bottom: 8px'>项目："+temp4[j].projecrname+"</span><br><span class='countylistpr2'>"+temp4[j].type+"</span>"; // 创建信息窗口对象
                            searchInfoWindow4[j] = new BMapLib.SearchInfoWindow(map, info4[j], {
                                title  : "<a id='companydetail' onclick='showdetial()'>"+temp4[j].companyname+"</a>",      //标题
                                panel  : "panel",         //检索结果面板
                                enableAutoPan : true,     //自动平移
                                searchTypes   :[]
                            });
                            map.addOverlay(marker4[j]);               // 将标注添加到地图中
                            marker4[j].addEventListener("click",
                                (function(k){
                                    // js 闭包
                                    return function(){
                                        searchInfoWindow4[k].open(marker4[k]);
                                    }
                                })(j)
                            );
                        }
                        j++
                    }, "福州市");
                }
                bdGEO4();
                var initPagination = function() {
                    var num_entries = $("#hiddenresult div.result").length;
                    // 创建分页
                    $("#Pagination").pagination(num_entries, {
                        num_edge_entries: 1, //边缘页数
                        num_display_entries: 4, //主体页数
                        callback: pageselectCallback,
                        items_per_page:1 //每页显示1项
                    });
                }();
                function pageselectCallback(page_index, jq){
                    pageno=page_index+1;
                    if(pageno>1){
                        $(".countylabel2").css("display","block");
                        $.ajax({
                            url:localStorage.serverurl2+'/straitbd/servlet/CommonServlet/GetBD?',
                            type:"POST",
                            data:{"type":type,"pagecount":8,"name":keyword,"classname":classname,"pname":classname_second,"areacode":localStorage.areacode,"page":pageno},
                            success:function(data){
                                $("#hiddenresult").empty();
                                $(".result").empty();
                                data=eval("(" + data + ")");
                                var temp3=data.data.data;
                                for(var i=0;i<data.data.pages;i++){
                                    $("#hiddenresult").append("<div class='result'></div>");
                                }
                                var worddata3=[];
                                for(var j=1;j<=data.data.data.length;j++){
                                    var titlename1="";
                                    global_data=data.data.data;
                                    switch(temp3[j-1].typecode){
                                        case 1: //科研项目
                                            if(!temp3[j-1].companyfirstclass){
                                                temp3[j-1].companyfirstclass="暂无数据"
                                            }
                                            if(!temp3[j-1].projecrname){
                                                temp3[j-1].projecrname="暂无数据"
                                            }
                                            titlename1="行业类别："+temp3[j-1].companyfirstclass+"<br>"+"项目名称："+temp3[j-1].projecrname;
                                            break;
                                        case 2: //申报项目
                                            if(!temp3[j-1].projecrname){
                                                temp3[j-1].projecrname="暂无数据"
                                            }
                                            titlename1="项目名称："+temp3[j-1].projecrname+"<br>"+"立项状态：";
                                            break;
                                        case 3: //三资企业
                                            if(!temp3[j-1].address){
                                                temp3[j-1].address="暂无数据"
                                            }
                                            titlename1="合作方式："+""+"<br>"+"地址："+temp3[j-1].address;
                                            break;
                                        case 4: //在建重点项目
                                            if(!temp3[j-1].companyfirstclass){
                                                temp3[j-1].companyfirstclass="暂无数据"
                                            }
                                            if(!temp3[j-1].projecrname){
                                                temp3[j-1].projecrname="暂无数据"
                                            }
                                            titlename1="行业类别："+temp3[j-1].companyfirstclass+"<br>"+"项目名称："+temp3[j-1].projecrname;
                                            break;
                                        case 5: //产学研合作
                                            if(!temp3[j-1].companyfirstclass){
                                                temp3[j-1].companyfirstclass="暂无数据"
                                            }
                                            if(!temp3[j-1].projecrname){
                                                temp3[j-1].projecrname="暂无数据"
                                            }
                                            titlename1="行业类别："+temp3[j-1].companyfirstclass+"<br>"+"项目名称："+temp3[j-1].projecrname;
                                            break;
                                        case 6: //大型企业
                                            if(!temp3[j-1].address){
                                                temp3[j-1].address="暂无数据"
                                            }
                                            titlename1="地址"+temp3[j-1].address;
                                            break;
                                        case 7: //工商数据
                                            if(!temp3[j-1].companyfirstclass){
                                                temp3[j-1].companyfirstclass="暂无数据"
                                            }
                                            if(!temp3[j-1].capital){
                                                temp3[j-1].capital="暂无数据"
                                            }
                                            titlename1="行业类别："+temp3[j-1].companyfirstclass+"<br>"+"注册资本："+temp3[j-1].capital;
                                            break;
                                    }
                                    $(".result").append("" +
                                        "<ul onclick='selectcompy("+j+")' class='countylist'>"+
                                        "<li>"+
                                        "<div class='countylistimg'>"+j+"</div>"+
                                        "<div class='countylisttit'>"+data.data.data[j-1].companyname+"</div>"+
                                        "<div class='countylistpr'>"+data.data.data[j-1].type+"</div>"+
                                        "<div class='clear'></div>"+
                                        "<div class='countylistcon'>"+titlename1+"</div>"+
                                        "<div class='clear'></div>"+
                                        "</li>"+
                                        "<div class='clear'></div>"+
                                        "</ul>");

                                    var str=temp3[j-1].companyname;
                                    var pattern = [,"福建省","福建","有限责任公司","开发有限公司","有限公司","股份","长乐市","福州分公司","分公司","子公司","公司"];
                                    for(var i=0;i<pattern.length;i++){
                                        str = str.replace(new RegExp(pattern[i]),"");
                                    }
                                    str = str.replace("\(\)","");
                                    str = str.replace("\（\）","");
                                    var arr={"name":str,"all_name":temp3[j-1].companyname,"value":(9-j)*15};
                                    worddata3.push(arr);
                                }
                                worddata3=worddata3.concat(worddata2);
                                //console.log(worddata3)
                                //console.log(worddata)
                                var myChart_county2 = echarts.init(document.getElementById('county_right2_charts'));
                                var option_county2 = {
                                    tooltip: {},
                                    series: [{
                                        type: 'wordCloud',
                                        gridSize: 2,
                                        width:'100%',
                                        sizeRange: [12, 30],
                                        rotationRange: [-90, 90],
                                        shape: 'pentagon',
                                        textStyle: {
                                            normal: {
                                                color: function () {
                                                    return 'rgb(' + [
                                                            Math.round(Math.random() * 160),
                                                            Math.round(Math.random() * 160),
                                                            Math.round(Math.random() * 160)
                                                        ].join(',') + ')';
                                                }
                                            },
                                            emphasis: {
                                                shadowBlur: 4,
                                                shadowColor: '#333'
                                            }
                                        },
                                        data: worddata3
                                    } ]
                                };
                                myChart_county2.setOption(option_county2);
                                myChart_county2.on('click', function (params) {
                                    localStorage.companyname="";
                                    localStorage.companyname=params.data.all_name;
                                    window.location.href="companydetail.html";
                                });
                                $(".countylabel2").css("display","none");
                                var new_content = $("#hiddenresult div.result:eq("+page_index+")").clone();
                                $("#Searchresult").empty().append(new_content); //装载对应分页的内容
                                //将搜索结果添加到地图中
                                var myGeo = new BMap.Geocoder();
                                var tempindex=0;
                                var j=0;
                                var marker = new Array(); //存放标注点对象的数组 
                                var info = new Array(); //存放提示信息窗口对象的数组
                                var searchInfoWindow = new Array();
                                function bdGEO3(){
                                    if(tempindex < temp3.length){
                                        var add = temp3[tempindex].companyname;
                                        geocodeSearch3(add);
                                    }
                                    tempindex++;
                                }
                                bdGEO3();
                                function geocodeSearch3(add){
                                    if(tempindex < temp3.length){
                                        setTimeout(bdGEO3,300);
                                    }
                                    myGeo.getPoint(add, function(point){
                                        if (point) {
                                            //marker[j] = new BMap.Marker(new BMap.Point(temp3[j].lon,temp3[j].lat));  // 创建标注
                                            marker[j] = new BMap.Marker(new BMap.Point(point.lng,point.lat));  // 创建标注
                                            info[j] ="<div style='margin-top: 3px'><nobr>地址："+temp3[j].address+"</nobr></div><br><span style='margin-bottom: 8px'>项目："+temp3[j].projecrname+"</span><br><span class='countylistpr2'>"+temp3[j].type+"</span>"; // 创建信息窗口对象
                                            searchInfoWindow[j] = new BMapLib.SearchInfoWindow(map, info[j], {
                                                title  : "<a id='companydetail' onclick='showdetial()'>"+temp3[j].companyname+"</a>",      //标题
                                                panel  : "panel",         //检索结果面板
                                                enableAutoPan : true,     //自动平移
                                                searchTypes   :[]
                                            });
                                            map.addOverlay(marker[j]);               // 将标注添加到地图中
                                            marker[j].addEventListener("click",
                                                (function(k){
                                                    return function(){
                                                        searchInfoWindow[k].open(marker[k]);
                                                    }
                                                })(j)
                                            );
                                        }
                                        j++
                                    }, "福州市");
                                }
                            }
                        })
                    }
                    if($(".current").html()=="上一页"){
                        $("#hiddenresult").empty();
                        $(".result").empty();
                        for(var i=0;i<data.data.pages;i++){
                            $("#hiddenresult").append("<div class='result'></div>");
                        }
                        for(var j=1;j<=data.data.data.length;j++){
                            var titlename1="";
                            switch(temp4[j-1].typecode){
                                case 1: //科研项目
                                    titlename1="行业类别："+temp4[j-1].companyfirstclass+"<br>"+"项目名称："+temp4[j-1].projecrname;
                                    break;
                                case 2: //申报项目
                                    titlename1="项目名称："+temp4[j-1].projecrname+"<br>"+"立项状态：";
                                    break;
                                case 3: //三资企业
                                    titlename1="合作方式："+""+"<br>"+"地址："+temp4[j-1].address;
                                    break;
                                case 4: //在建重点项目
                                    titlename1="行业类别："+temp4[j-1].companyfirstclass+"<br>"+"项目名称："+temp4[j-1].projecrname;
                                    break;
                                case 5: //产学研合作
                                    titlename1="行业类别："+temp4[j-1].companyfirstclass+"<br>"+"项目名称："+temp4[j-1].projecrname;
                                    break;
                                case 6: //大型企业
                                    titlename1="地址"+temp4[j-1].address;
                                    break;
                                case 7: //工商数据
                                    titlename1="行业类别："+temp4[j-1].companyfirstclass+"<br>"+"注册资本："+temp4[j-1].capital;
                                    break;
                            }
                            global_data=data.data.data;
                            $(".result").append("" +
                                " <ul onclick='selectcompy("+j+")' class='countylist'>"+
                                "<li>"+
                                "<div class='countylistimg'>"+j+"</div>"+
                                "<div class='countylisttit'>"+data.data.data[j-1].companyname+"</div>"+
                                "<div class='countylistpr'>"+data.data.data[j-1].type+"</div>"+
                                "<div class='clear'></div>"+
                                "<div class='countylistcon'>"+titlename1+"</div>"+
                                "<div class='clear'></div>"+
                                "</li>"+
                                "<div class='clear'></div>"+
                                "</ul>");
                        }
                    }
                    var new_content = $("#hiddenresult div.result:eq("+page_index+")").clone();
                    $("#Searchresult").empty().append(new_content); //装载对应分页的内容
                    return false;
                }
            }
            else {
                $("#Pagination").empty();
                $(".result").append("" +
                    "<div class='noresult'><img  src='./images/map-county_11.png' ></img></div>"+
                    "");
            }
            $(".countylabel2").css("display","none");
        }
    })

}
var selectcompy=function(e){
    var markertemp=global_data[e-1];
    // 创建信息窗口对象
    info ="<div style='margin-top: 3px'><nobr>地址："+markertemp.address+"</nobr></div><br><span style='margin-bottom: 8px'>项目："+markertemp.projecrname+"</span><br><span class='countylistpr2'>"+markertemp.type+"</span>"; 
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(markertemp.companyname, function(point){
        if (point) {
            map.centerAndZoom(point, 12);
            var marker=new BMap.Marker(new BMap.Point(point.lng, point.lat));
            searchInfoWindow= new BMapLib.SearchInfoWindow(map, info, {
                title  : "<a id='companydetail' onclick='showdetial()'>"+markertemp.companyname+"</a>",      //标题
                panel  : "panel",         //检索结果面板
                enableAutoPan : true,     //自动平移
                searchTypes   :[]
            });
            searchInfoWindow.open(new BMap.Point(point.lng, point.lat));
            map.addOverlay(marker);               // 将标注添加到地图中
            marker.addEventListener("click",
                (function(){
                    return function(){
                        searchInfoWindow.open(marker);
                    }
                })()
            );
        }else{
            console.log("您选择地址没有解析到结果!");
            alert("您选择地址没有解析到结果!");
            
        }
    }, "福州市");
        
}
//查看公司详情
localStorage.companyname="";
var showdetial=function(){
    localStorage.companyname=$("#companydetail").text();
    window.location.href="companydetail.html";

};
//显示大量字符云
var showmorecompany=function(){
    $(".countyframebottom").animate({width:"60%",top:"240px",height:"440px"},1000);
    $("#county_right2_charts").css("height","440px");
    $.ajax({
        url: localStorage.serverurl2 + '/straitbd/servlet/CommonServlet/GetBD?type=7&pagecount=100',
        success: function (data) {
            data = eval("(" + data + ")");
            var temp = data.data.data;
            var wordmap=[];
            for(var i=0;i<temp.length;i++){
                var str=temp[i].companyname;
                var pattern = [,"福建省","福建","有限公司","股份","有限公司","长乐市"];
                for(var j=0;j<pattern.length;j++){
                str = str.replace(new RegExp(pattern[j]),""); 
                }
                str = str.replace("\(\)","");
                str = str.replace("\（\）","");
                var arr={"name":str,"value":(temp.length-i)*10000};
                wordmap.push(arr);
            }
            var myChart_county2 = echarts.init(document.getElementById('county_right2_charts'));
            var option_county2 = {
                tooltip: {},
                series: [{
                    type: 'wordCloud',
                    gridSize: 2,
                    width:'100%',
                    sizeRange: [12, 40],
                    rotationRange: [-90, 90],
                    shape: 'pentagon',
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 4,
                            shadowColor: '#333'
                        }
                    },
                    data: wordmap
                } ]
            };
            myChart_county2.setOption(option_county2);
            myChart_county2.on('click', function (params) {
                localStorage.companyname="";
                localStorage.companyname=params.data.all_name;
                window.location.href="companydetail.html";
            });
        }
    })
}
//初始化显示工商数据
search_list(7);
