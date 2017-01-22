/**
 * Created by try on 2016.6.3.
 */
$(function(){
    //产业导航跳转
    localStorage.rank=0;
    localStorage.provincecode="";
    localStorage.countycode="";
    localStorage.citycode="";
    $(".topico01").click(function(){
        window.location.href="county.html";
    });
    //全国地图
    var province_no=[
        [110000,"北京"],
        [120000,"天津"],
        [130000,"河北"],
        [140000,"山西"],
        [150000,"内蒙古"],
        [210000,"辽宁"],
        [220000,"吉林"],
        [230000,"黑龙江"],
        [310000,"上海"],
        [320000,"江苏"],
        [330000,"浙江"],
        [340000,"安徽"],
        [350000,"福建"],
        [360000,"江西"],
        [370000,"山东"],
        [410000,"河南"],
        [420000,"湖北"],
        [430000,"湖南"],
        [440000,"广东"],
        [450000,"广西"],
        [460000,"海南"],
        [500000,"重庆"],
        [510000,"四川"],
        [520000,"贵州"],
        [530000,"云南"],
        [540000,"西藏"],
        [610000,"陕西"],
        [620000,"甘肃"],
        [630000,"青海"],
        [640000,"宁夏"],
        [650000,"新疆"],
        [710000,"台湾"],
        [810000,"香港"],
        [910000,"澳门"]
    ]
    $.get(encodeURI('mapjson/china.json'), function (chinaJson) {
        $.ajax({
            url:encodeURI(localStorage.serverurl+"/analysis/data?zb=1&reg=&sj="+localStorage.yeardate) ,
            success:function(data){
                var mapdata=[];
                for(var i=0;i<data.info.length;i++){
                    for (var j=0;j<province_no.length;j++){
                        if(data.info[i][0]==province_no[j][0]){
                            data.info[i].push(province_no[j][1])
                        }
                    }
                    var arr={"name":data.info[i][6],"value":data.info[i][2],"itemStyle":{normal:{borderColor:'#fff'}}};
                    mapdata.push(arr);
                }
                mapdata[12]={"name":'福建',"value":data.info[12][2], "selected":true,"itemStyle":{normal:{borderColor:'#fff',shadowColor: 'rgba(0, 0, 0, 1)', shadowBlur: 10,borderWidth:1.5,shadowOffsetX:1,shadowOffsetY:1}}}
                //console.log(mapdata[12])
                echarts.registerMap('china', chinaJson);
                var myChart_china1 = echarts.init(document.getElementById('china_main'));
                //var text="";
                myChart_china1.setOption({
                    title: {
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    //legend: {
                    //    orient: 'vertical',
                    //    left: 'left',
                    //    data:['GDP'],
                    //    show:false
                    //},
                    visualMap: {
                        show:true,
                        min: 0,
                        max: 70000,
                        bottom:'30',
                        right:'50',
                        text: ['高','低'],           // 文本，默认为数值文本
                        calculable: true
                    },
                    toolbox: {
                        show: false,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    series: [
                        {
                            name: 'GDP',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            //itemStyle:{normal:{borderWidth:0}},
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:mapdata
                        }
                    ]
                });
                myChart_china1.on('click',function(params){
                    for(var i=0;i<province_no.length;i++){
                        if (province_no[i][1]==params.name){
                            localStorage.provicecode=province_no[i][0];
                        }
                    }
                    if(params.dataIndex!=-1){
                        localStorage.rank=1;
                        localStorage.provinceName=params.name;
                        window.location.href="provincial.html";
                    }
                    
                })
            }
        })
        
    });
    //获取国内生产总值
    $.ajax({
        url:encodeURI(localStorage.serverurl+'/analysis/data?zb=1&reg=100000&sj='),
        success:function(data){
            var myChart_china2 = echarts.init(document.getElementById('china_left1_charts'));
            var option_china2 = {
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    feature: {
                        dataView: {show: false, readOnly: false},
                        magicType: {show: false, type: ['line', 'bar']},
                        restore: {show: false},
                        saveAsImage: {show: false}
                    }
                },
                grid:{
                    top:40,
                    left:60
                },
                lineStyle:{
                    normal:{
                        color:'#8ECEFE'
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#FE8920'
                    }
                },
                legend: {
                    bottom:'5px',
                    data:[{name:'国内生产总值(亿元)',textStyle:{color:'#FE8920'}},{name:'国内生产总值增长率(%)',textStyle:{color:'#8ECEFE'}}]
                },
                textStyle:{
                    color:'#fff'
                },
                xAxis: [
                    {
                        axisLabel: {
                            rotate: 30,
                            interval:0,
                            textStyle:{
                                color:'#fff'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#4A84B7'
                            }
                        },
                        splitLine:{
                            show:false
                        },
                        type: 'category',
                        data: ['2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年']
                    }
                ],
                yAxis: [
                    {
                        axisLine:{
                            lineStyle:{
                                color:'#4A84B7'
                            }
                        },
                        splitLine:{
                            show:false
                        },
                        type: 'value',
                        name: '亿元',
                        min: 0,
                        max: 700000,
                        interval: 100000,
                        axisLabel: {
                            formatter: '{value}',
                            textStyle:{
                                color:'#fff'
                            }
                        }
                    },
                    {
                        axisLine:{
                            lineStyle:{
                                color:'#4A84B7'
                            }
                        },

                        splitLine:{
                            show:false
                        },
                        type: 'value',
                        name: '%',
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: '{value}',
                            textStyle:{
                                color:'#fff'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name:'国内生产总值(亿元)',
                        type:'bar',
                        barWidth:20,
                        data:[data.info[9][2],data.info[8][2],data.info[7][2],data.info[6][2],data.info[5][2],data.info[4][2],data.info[3][2],data.info[2][2],data.info[1][2],data.info[0][2]]
                    },
                    {
                        name:'国内生产总值增长率(%)',
                        type:'line',
                        yAxisIndex: 1,
                        data:[(data.info[9][3]-100).toFixed(2),(data.info[8][3]-100).toFixed(2),(data.info[7][3]-100).toFixed(2),(data.info[6][3]-100).toFixed(2),(data.info[5][3]-100).toFixed(2),(data.info[4][3]-100).toFixed(2),(data.info[3][3]-100).toFixed(2),(data.info[2][3]-100).toFixed(2),(data.info[1][3]-100).toFixed(2),(data.info[0][3]-100).toFixed(2)]
                    }
                ]
            };
            myChart_china2.setOption(option_china2);
            var gdp_year=["2014","2013","2012","2011","2010"];
            for(var i=0;i<gdp_year.length;i++){
                for(var j=2;j<6;j++) {
                    if(j==3||j==5){
                        if (data.info[i][j] == 0||!data.info[i][j]) {
                            data.info[i][j] = String(data.info[i][j])
                            data.info[i][j] = "--"
                        }
                        else {
                            data.info[i][j] = (data.info[i][j] - 100).toFixed(2)
                        }
                    }
                    else {
                        if (data.info[i][j] == 0||!data.info[i][j]) {
                            data.info[i][j] = String(data.info[i][j])
                            data.info[i][j] = "--"
                        }
                    }
                }
            }
            $("#chinagdp_year").append("" +
                "<td width='28%' align='center' valign='middle'>指标</td>"+
                "<td width='12%' align='center' valign='middle'>"+gdp_year[0]+"年</td>"+
                "<td width='12%' align='center' valign='middle'>"+gdp_year[1]+"年</td>"+
                "<td width='12%' align='center' valign='middle'>"+gdp_year[2]+"年</td>"+
                "<td width='12%' align='center' valign='middle'>"+gdp_year[3]+"年</td>"+
                "<td width='12%' align='center' valign='middle'>"+gdp_year[4]+"年</td>"+
                "")
            $(".datalist1").append("" +
                "<li>"+
                "<p class='list01'><nobr>生产总值(亿元)</nobr></p>"+
                "<p class='list02'>"+data.info[0][2]+"</p>"+
                "<p class='list02'>"+data.info[1][2]+"</p>"+
                "<p class='list02'>"+data.info[2][2]+"</p>"+
                "<p class='list02'>"+data.info[3][2]+"</p>"+
                "<p class='list02'>"+data.info[4][2]+"</p>"+
                "</li>"+
                "<li>"+
                "<p class='list01'><nobr>生产总值增长率(%)</nobr></p>"+
                "<p class='list02'>" + data.info[0][3]+ "</p>" +
                "<p class='list02'>" + data.info[1][3]+ "</p>" +
                "<p class='list02'>" + data.info[2][3]+ "</p>" +
                "<p class='list02'>" + data.info[3][3]+ "</p>" +
                "<p class='list02'>" + data.info[4][3]+ "</p>" +
                "</li>"+
                "<li>"+
                "<p class='list01'><nobr>人均生产总值(元/人)</nobr></p>"+
                "<p class='list02'>"+data.info[0][4]+"</p>"+
                "<p class='list02'>"+data.info[1][4]+"</p>"+
                "<p class='list02'>"+data.info[2][4]+"</p>"+
                "<p class='list02'>"+data.info[3][4]+"</p>"+
                "<p class='list02'>"+data.info[4][4]+"</p>"+
                "</li>"+
                "<li>"+
                "<p class='list01'><nobr>人均生产总值增长率(%)</nobr></p>"+
                "<p class='list02'>" + data.info[0][5]+ "</p>" +
                "<p class='list02'>" + data.info[1][5]+ "</p>" +
                "<p class='list02'>" + data.info[2][5]+ "</p>" +
                "<p class='list02'>" + data.info[3][5]+ "</p>" +
                "<p class='list02'>" + data.info[4][5]+ "</p>" +
                "</li>"+
                "")
        }
    })
    //三次产业贡献率
    $.ajax({
        url:encodeURI(localStorage.serverurl+'/analysis/data?zb=2&reg=100000&sj='),
        success:function(data){
            var myChart_china3 = echarts.init(document.getElementById('china_left2_charts'));
            var option_china3 = {
                baseOption:{
                    timeline: {
                        // y: 0,
                        show:false,
                        axisType: 'category',
                        autoPlay: true,
                        playInterval: 1000,
                        padding:[0,0,0,0],
                        data: [
                            '2009-01-01', '2010-01-01','2011-01-01','2012-01-01','2013-01-01',
                            {
                                value: '2014-01-01',
                                symbol: 'diamond',
                                symbolSize: 18
                            },
                        ],
                        label: {
                            formatter : function(s) {
                                return (new Date(s)).getFullYear();
                            },
                            textStyle:{
                              color:'#fff'  
                            }
                        },
                        lineStyle:{
                            color:'#8ECEFE'
                        },
                        controlStyle:{
                            normal:{
                                color:'#8ECEFE',
                                borderColor:'#8ECEFE'
                            }
                        }
                    },
                    title: {
                        left: 'center',
                        top: 0

                    },
                    grid:{
                        top:0
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{d}%"
                    },
                    testStyle:{
                        color:'#fff'
                    },
                    series : [
                        {

                            type:'pie',
                            radius : '55%',
                            center: ['50%', '55%'],
                            data:[
                                {value:data.info[6][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                {value:data.info[6][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                {value:data.info[6][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                            ]
                        }
                    ]
                },
                options:[
                    {
                        title:{
                            text:"2009年",
                            textStyle:{
                                color:'#8ECEFE'
                            },
                            left:0
                        },
                        series : [
                            {

                                type:'pie',
                                radius : '55%',
                                center: ['50%', '55%'],
                                data:[
                                    {value:data.info[5][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                    {value:data.info[5][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                    {value:data.info[5][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                ]
                            }
                        ]
                    },
                    {
                        title:{text:"2010年"},
                        series : [
                            {

                                type:'pie',
                                radius : '55%',
                                center: ['50%', '55%'],
                                data:[
                                    {value:data.info[4][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                    {value:data.info[4][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                    {value:data.info[4][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                ]
                            }
                        ]
                    },
                    {
                        title:{text:"2011年"},
                        series : [
                            {

                                type:'pie',
                                radius : '55%',
                                center: ['50%', '55%'],
                                data:[
                                    {value:data.info[3][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                    {value:data.info[3][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                    {value:data.info[3][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                ]
                            }
                        ]
                    },
                    {
                        title:{text:"2012年"},
                        series : [
                            {

                                type:'pie',
                                radius : '55%',
                                center: ['50%', '55%'],
                                data:[
                                    {value:data.info[2][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                    {value:data.info[2][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                    {value:data.info[2][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                ]
                            }
                        ]
                    },
                    {
                        title:{text:"2013年"},
                        series : [
                            {

                                type:'pie',
                                radius : '55%',
                                center: ['50%', '55%'],
                                data:[
                                    {value:data.info[1][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                    {value:data.info[1][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                    {value:data.info[1][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                ]
                            }
                        ]
                    },
                    {
                        title:{text:"2014年"},
                        series : [
                            {

                                type:'pie',
                                radius : '55%',
                                center: ['50%', '55%'],
                                data:[
                                    {value:data.info[0][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                    {value:data.info[0][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                    {value:data.info[0][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                ]
                            }
                        ]    
                    }
                ]
                
            };
            myChart_china3.setOption(option_china3);
            var chanye_year=["2014","2013","2012","2011","2010"];
            $("#china_chanye").append("" +
                "<td width='28%' align='center' valign='middle'>指标</td>"+
                "<td width='12%' align='center' valign='middle'>"+chanye_year[0]+"年</td>"+
                "<td width='12%' align='center' valign='middle'>"+chanye_year[1]+"年</td>"+
                "<td width='12%' align='center' valign='middle'>"+chanye_year[2]+"年</td>"+
                "<td width='12%' align='center' valign='middle'>"+chanye_year[3]+"年</td>"+
                "<td width='12%' align='center' valign='middle'>"+chanye_year[4]+"年</td>"+
                "")
            $(".datalist2").append("" +
                "<li>"+
                "<p class='list01'>第一产业(%)</p>"+
                "<p class='list02'>"+data.info[0][2]+"</p>"+
                "<p class='list02'>"+data.info[1][2]+"</p>"+
                "<p class='list02'>"+data.info[2][2]+"</p>"+
                "<p class='list02'>"+data.info[3][2]+"</p>"+
                "<p class='list02'>"+data.info[4][2]+"</p>"+
                "</li>"+
                "<li>"+
                "<p class='list01'>第二产业(%)</p>"+
                "<p class='list02'>"+data.info[0][3]+"</p>"+
                "<p class='list02'>"+data.info[1][3]+"</p>"+
                "<p class='list02'>"+data.info[2][3]+"</p>"+
                "<p class='list02'>"+data.info[3][3]+"</p>"+
                "<p class='list02'>"+data.info[4][3]+"</p>"+
                "</li>"+
                "<li>"+
                "<p class='list01'>第三产业(%)</p>"+
                "<p class='list02'>"+data.info[0][4]+"</p>"+
                "<p class='list02'>"+data.info[1][4]+"</p>"+
                "<p class='list02'>"+data.info[2][4]+"</p>"+
                "<p class='list02'>"+data.info[3][4]+"</p>"+
                "<p class='list02'>"+data.info[4][4]+"</p>"+
                "</li>"+
                "")
        }
    })
    //三次产业构成
    $.ajax({
        url:encodeURI(localStorage.serverurl+"/analysis/data?zb=9&reg=10000&sj="),
        success:function(data){
            var myChart_china4 = echarts.init(document.getElementById('china_right1_charts'));
            var option_china4 = {
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    feature: {
                        dataView: {show: false, readOnly: false},
                        magicType: {show: false, type: ['line', 'bar']},
                        restore: {show: false},
                        saveAsImage: {show: false}
                    }
                },
                grid:{
                    top:20,
                    left:70
                },
                legend: {
                    bottom:'0px',
                    padding:5,
                    icon:'rect',
                    data:[
                        //{name:'国内生产总值(%)',textStyle:{color:'#FF7F50'}},
                        {name:'第一产业增加值',textStyle:{color:'#86CEF9'}},
                        {name:'第二产业增加值',textStyle:{color:'#DA70D5'}},
                        {name:'第三产业增加值',textStyle:{color:'#35CD33'}}]
                },
                xAxis: [
                    {
                        axisLabel: {
                            formatter: '{value}',
                            textStyle:{
                                color:'#fff'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#4A84B7'
                            }
                        },
                        splitLine:{
                            show:false
                        },
                        type: 'category',
                        data: ['2010年','2011年','2012年','2013年','2014年']
                    }
                ],
                yAxis: [
                    {
                        splitLine:{
                            show:false
                        },
                        type: 'value',
                        name: '',
                        min: 0,
                        max: 350000,
                        interval: 50000,
                        axisLabel: {
                            formatter: '{value}',
                            textStyle:{
                                color:'#fff'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#4A84B7'
                            }
                        }
                    }
                ],
                series: [
                    //{
                    //    itemStyle:{normal:{color:'#FF7F50'}},
                    //
                    //    name:'国内生产总值(%)',
                    //    type:'bar',
                    //    data:[99.0, 99.9, 100.0, 100.0, 100.0]
                    //},
                    {
                        itemStyle:{normal:{color:'#86CEF9'}},
                        name:'第一产业增加值',
                        type:'bar',
                        data:[data.info[4][2], data.info[3][2], data.info[2][2], data.info[1][2], data.info[0][2]]
                    },
                    {
                        itemStyle:{normal:{color:'#DA70D5'}},
                        name:'第二产业增加值',
                        type:'bar',
                        data:[data.info[4][3], data.info[3][3], data.info[2][3], data.info[1][3], data.info[0][3]]
                    },
                    {
                        itemStyle:{normal:{color:'#35CD33'}},
                        name:'第三产业增加值',
                        type:'bar',
                        data:[data.info[4][4], data.info[3][4], data.info[2][4], data.info[1][4], data.info[0][4]]
                    }
                ]
            };
            myChart_china4.setOption(option_china4);
        }
    })
   //获取GDP排名
    $.ajax({
       url:encodeURI(localStorage.serverurl+"/analysis/data?zb=4&reg=&sj="+localStorage.yeardate), 
       success:function(data){
           for(var i=0;i<data.info.length;i++){
               for (var j=0;j<province_no.length;j++){
                   if(data.info[i][0]==province_no[j][0]){
                       data.info[i].push(province_no[j][1])
                   }
               }
           }
           //console.log(data.info);
           var showgdplength=7;
           $("#showallgdp").click(function(){
               if(showgdplength==7){
                   $("#china_right2_charts").animate({height:"450"},0);
                   $(".mainframe").animate({height:"1350"},0);
                   $("#showallgdp").html("（收起）")
                   showgdplength=data.info.length-1
                   var myChart_china5 = echarts.init(document.getElementById('china_right2_charts'));
                   var option_china5 = {
                       title : {
                           show:false,
                           text: '全国GDP排名',
                           subtext: '数据来自网络'
                       },
                       tooltip : {
                           trigger: 'axis'
                       },
                       legend: {
                           bottom:'5px',
                           show:false,
                           data:['2014年']
                       },
                       grid:{
                           top:20,
                           left:50
                       },
                       toolbox: {
                           show : true,
                           feature : {
                               mark : {show: false},
                               dataView : {show: false, readOnly: false},
                               magicType: {show: false, type: ['line', 'bar']},
                               restore : {show: false},
                               saveAsImage : {show: false}
                           }
                       },
                       calculable : true,
                       xAxis : [
                           {
                               axisLabel: {
                                   formatter: '{value}',
                                   textStyle:{
                                       color:'#fff'
                                   }
                               },
                               axisLine:{
                                   lineStyle:{
                                       color:'#4A84B7'
                                   }
                               },
                               splitLine:{
                                   show:false
                               },
                               type : 'value',
                               boundaryGap : [0, 0.01]
                           }
                       ],
                       yAxis : [
                           {
                               axisLabel: {
                                   interval:0,
                                   formatter: '{value}',
                                   textStyle:{
                                       color:'#fff',
                                       fontSize:2
                                   }
                               },
                               axisLine:{
                                   lineStyle:{
                                       color:'#4A84B7'
                                   }
                               },
                               splitLine:{
                                   show:false
                               },
                               type : 'category',
                               data : (function(){
                                   var res=[];
                                   for(var i=showgdplength;i>=0;i--){
                                       var arr={"value":data.info[i][4]};
                                       res.push(arr);
                                   }
                                   return res
                               })()
                           }
                       ],
                       series : [
                           {
                               name:'2014年',
                               type:'bar',
                               //barWidth:5,
                               data:(function(){
                                   var res=[];
                                   for(var i=showgdplength;i>=0;i--){
                                       if(i%2==0){
                                           var arr={"value": data.info[i][2], "itemStyle": {normal: {color: '#FE8920'}}};
                                       }
                                       else {
                                           var arr={"value": data.info[i][2], "itemStyle": {normal: {color: '#8ECEFE'}}};
                                       }
                                       res.push(arr);
                                   }
                                   return res
                               })()
                           }
                       ]
                   };
                   myChart_china5.setOption(option_china5);
                   return ;
               }
               if(showgdplength==data.info.length-1){
                   $("#china_right2_charts").animate({height:"250"},0);
                   $(".mainframe").animate({height:"1160"},0);
                   $("#showallgdp").html("（展开）")
                   showgdplength=7
                   var myChart_china5 = echarts.init(document.getElementById('china_right2_charts'));
                   var option_china5 = {
                       title : {
                           show:false,
                           text: '全国GDP排名',
                           subtext: '数据来自网络'
                       },
                       tooltip : {
                           trigger: 'axis'
                       },
                       legend: {
                           bottom:'5px',
                           show:false,
                           data:['2014年']
                       },
                       grid:{
                           top:20,
                           left:50
                       },
                       toolbox: {
                           show : true,
                           feature : {
                               mark : {show: false},
                               dataView : {show: false, readOnly: false},
                               magicType: {show: false, type: ['line', 'bar']},
                               restore : {show: false},
                               saveAsImage : {show: false}
                           }
                       },
                       calculable : true,
                       xAxis : [
                           {
                               axisLabel: {
                                   formatter: '{value}',
                                   textStyle:{
                                       color:'#fff'
                                   }
                               },
                               axisLine:{
                                   lineStyle:{
                                       color:'#4A84B7'
                                   }
                               },
                               splitLine:{
                                   show:false
                               },
                               type : 'value',
                               boundaryGap : [0, 0.01]
                           }
                       ],
                       yAxis : [
                           {
                               axisLabel: {
                                   interval:0,
                                   formatter: '{value}',
                                   textStyle:{
                                       color:'#fff',
                                       fontSize:2
                                   }
                               },
                               axisLine:{
                                   lineStyle:{
                                       color:'#4A84B7'
                                   }
                               },
                               splitLine:{
                                   show:false
                               },
                               type : 'category',
                               data : (function(){
                                   var res=[];
                                   for(var i=showgdplength;i>=0;i--){
                                       var arr={"value":data.info[i][4]};
                                       res.push(arr);
                                   }
                                   return res
                               })()
                           }
                       ],
                       series : [
                           {
                               name:'2014年',
                               type:'bar',
                               //barWidth:5,
                               data:(function(){
                                   var res=[];
                                   for(var i=showgdplength;i>=0;i--){
                                       if(i%2==0){
                                           var arr={"value": data.info[i][2], "itemStyle": {normal: {color: '#FE8920'}}};
                                       }
                                       else {
                                           var arr={"value": data.info[i][2], "itemStyle": {normal: {color: '#8ECEFE'}}};
                                       }
                                       res.push(arr);
                                   }
                                   return res
                               })()
                           }
                       ]
                   };
                   myChart_china5.setOption(option_china5);
                   return ;
               }
           })
           var myChart_china5 = echarts.init(document.getElementById('china_right2_charts'));
           var option_china5 = {
               title : {
                   show:false,
                   text: '全国GDP排名'
               },
               tooltip : {
                   trigger: 'axis'
               },
               legend: {
                   bottom:'5px',
                   show:false,
                   data:['2014年']
               },
               grid:{
                   top:20,
                   left:50
               },
               toolbox: {
                   show : true,
                   feature : {
                       mark : {show: false},
                       dataView : {show: false, readOnly: false},
                       magicType: {show: false, type: ['line', 'bar']},
                       restore : {show: false},
                       saveAsImage : {show: false}
                   }
               },
               calculable : true,
               xAxis : [
                   {
                       axisLabel: {
                           formatter: '{value}',
                           textStyle:{
                               color:'#fff'
                           }
                       },
                       axisLine:{
                           lineStyle:{
                               color:'#4A84B7'
                           }
                       },
                       splitLine:{
                           show:false
                       },
                       type : 'value',
                       boundaryGap : [0, 0.01]
                   }
               ],
               yAxis : [
                   {
                       axisLabel: {
                           interval:0,
                           formatter: '{value}',
                           textStyle:{
                               color:'#fff',
                               fontSize:2
                           }
                       },
                       axisLine:{
                           lineStyle:{
                               color:'#4A84B7'
                           }
                       },
                       splitLine:{
                           show:false
                       },
                       type : 'category',
                       data : (function(){
                           var res=[]
                           for(var i=showgdplength;i>=0;i--){
                               var arr={"value":data.info[i][4]};
                               res.push(arr);
                           }
                           return res
                       })()
                   }
               ],
               series : [
                   {
                       name:'2014年',
                       type:'bar',
                       //barWidth:5,
                       data:(function(){
                           var res=[];
                           for(var i=showgdplength;i>=0;i--){
                               if(i%2==0){
                                   var arr={"value": data.info[i][2], "itemStyle": {normal: {color: '#FE8920'}}};
                               }
                               else {
                                   var arr={"value": data.info[i][2], "itemStyle": {normal: {color: '#8ECEFE'}}};
                               }
                               res.push(arr);
                           }
                           return res
                       })()
                   }
               ]
           };
           myChart_china5.setOption(option_china5);
       }
    })
    //全国重点产业数据
    $.ajax({
        url:encodeURI(localStorage.serverurl+"/analysis/data?zb=5&reg=100000&sj="+localStorage.yeardate),
        success:function(data){ 
            var myChart_china6 = echarts.init(document.getElementById('china_right3_charts'));
            var option_china6 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    x: 'left',
                    y: 'bottom',
                   right:'20',
                   left:'20',
                    //orient:'vertical',
                    data:[
                        {name:'农林牧渔业',icon:'circle',textStyle:{color:'#D53A35'}},
                        {name:'工业',icon:'circle',textStyle:{color:'#FE8920'}},
                        {name:'建筑业',icon:'circle',textStyle:{color:'#FE8920'}},
                        {name:'批发和零售业',icon:'circle',textStyle:{color:'#FE8920'}},
                        {name:'交通运输、仓储和邮政业',icon:'circle',textStyle:{color:'#FE8920'}},
                        {name:'住宿和餐饮业',icon:'circle',textStyle:{color:'#FE8920'}},
                        {name:'金融业',icon:'circle',textStyle:{color:'#FE8920'}},
                        {name:'房地产业',icon:'circle',textStyle:{color:'#FE8920'}},
                        {name:'其他行业',icon:'circle',textStyle:{color:'#8ECEFE'}}
                    ]
                },
                series: [
                    {
                        type:'pie',
                        radius: [0, '30%'],
                        center:['60%', '40%'],
                        label:{
                            normal:{
                                position:'inner'
                            }
                        },
                        labelLine:{
                            normal:{
                                show:false
                            }
                        },
                        data:[
                            {value:data.info[0][2], name:'第一产业',itemStyle:{normal:{color:'#8ECEFE'}}},
                            {value:data.info[0][3]+data.info[0][4], name:'第二产业',itemStyle:{normal:{color:'#DEB655'}}},
                            {value:data.info[0][5]+data.info[0][6]+data.info[0][7]+data.info[0][8]+data.info[0][9]+data.info[0][10], name:'第三产业',itemStyle:{normal:{color:'#FE8920'}}},
                        ]
                    },
                    {
                        type:'pie',
                        radius: ['40%', '55%'],
                        center:['60%', '40%'],
                        data:[
                            {value:data.info[0][2], name:'农林牧渔业',itemStyle:{normal:{color:'#8ECEFE'}}},
                            {value:data.info[0][3], name:'工业',itemStyle:{normal:{color:'#DEB655'}}},
                            {value:data.info[0][4], name:'建筑业',itemStyle:{normal:{color:'#DEB655'}}},
                            {value:data.info[0][5], name:'批发和零售业',itemStyle:{normal:{color:'#FE8920'}}},
                            {value:data.info[0][6], name:'交通运输、仓储和邮政业',itemStyle:{normal:{color:'#FE8920'}}},
                            {value:data.info[0][7], name:'住宿和餐饮业',itemStyle:{normal:{color:'#FE8920'}}},
                            {value:data.info[0][8], name:'金融业',itemStyle:{normal:{color:'#FE8920'}}},
                            {value:data.info[0][9], name:'房地产业',itemStyle:{normal:{color:'#FE8920'}}},
                            {value:data.info[0][10], name:'其他行业',itemStyle:{normal:{color:'#FE8920'}}}
                        ]
                    }
                ]
            };
            myChart_china6.setOption(option_china6);}
    });
    //三次产业概况
    $.ajax({
        url:encodeURI(localStorage.serverurl+"/analysis/general?reg=100000"),
        success:function(data){
            $("#indus_1").html(data.info.indus_1+"<br>第一产业");
            $("#indus_2").html(data.info.indus_2+"<br>第二产业");
            $("#indus_3").html(data.info.indus_3+"<br>第三产业");
            $(".indus_main").html(data.info.corporation+"<br>"+data.info.employment+"<br>"+data.info.population);
        }
    })
   
})
