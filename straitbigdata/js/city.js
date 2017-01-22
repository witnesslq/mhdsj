/**
 * Created by try on 2016.6.6.
 */
$(document).ready(function(){
    //城市图表
    //alert( localStorage.citycode);
    //alert( localStorage.provicecode);
    localStorage.countycode="";
    var county_no=[
        [350100,"福州市","福州市"],
        [350101,"福州市市辖区","福州市市辖区"],
        [350102,"福州市鼓楼区","鼓楼区"],
        [350103,"福州市台江区","台江区"],
        [350104,"福州市仓山区","仓山区"],
        [350105,"福州市马尾区","马尾区"],
        [350111,"福州市晋安区","晋安区"],
        [350121,"福州市闽侯县","闽侯县"],
        [350122,"福州市连江县","连江县"],
        [350123,"福州市罗源县","罗源县"],
        [350124,"福州市闽清县","闽清县"],
        [350125,"福州市永泰县","永泰县"],
        [350128,"福州市平潭县","平潭县"],
        [350181,"福州市福清市","福清市"],
        [350182,"福州市长乐市","长乐市"],
        [350200,"厦门市","厦门市"],
        [350201,"厦门市市辖区","厦门市市辖区"],
        [350203,"厦门市思明区","思明区"],
        [350205,"厦门市海沧区","海沧区"],
        [350206,"厦门市湖里区","湖里区"],
        [350211,"厦门市集美区","集美区"],
        [350212,"厦门市同安区","同安区"],
        [350213,"厦门市翔安区","翔安区"],
        [350300,"莆田市","莆田市"],
        [350301,"莆田市市辖区","莆田市市辖区"],
        [350302,"莆田市城厢区","城厢区"],
        [350303,"莆田市涵江区","涵江区"],
        [350304,"莆田市荔城区","荔城区"],
        [350305,"莆田市秀屿区","秀屿区"],
        [350322,"莆田市仙游县","仙游县"],
        [350400,"三明市","三明市"],
        [350401,"三明市市辖区","三明市市辖区"],
        [350402,"三明市梅列区","梅列区"],
        [350403,"三明市三元区","三元区"],
        [350421,"三明市明溪县","明溪县"],
        [350423,"三明市清流县","清流县"],
        [350424,"三明市宁化县","宁化县"],
        [350425,"三明市大田县","大田县"],
        [350426,"三明市尤溪县","尤溪县"],
        [350427,"三明市沙县","沙县"],
        [350428,"三明市将乐县","将乐县"],
        [350429,"三明市泰宁县","泰宁县"],
        [350430,"三明市建宁县","建宁县"],
        [350481,"三明市永安市","永安市"],
        [350526,"泉州市德化县","德化县"],
        [350527,"泉州市金门县","金门县"],
        [350581,"泉州市石狮市","石狮市"],
        [350582,"泉州市晋江市","晋江市"],
        [350583,"泉州市南安市","南安市"],
        [350502,"泉州市鲤城区","鲤城区"],
        [350503,"泉州市丰泽区","丰泽区"],
        [350504,"泉州市洛江区","洛江区"],
        [350505,"泉州市泉港区","泉港区"],
        [350521,"泉州市惠安县","惠安县"],
        [350524,"泉州市安溪县","安溪县"],
        [350525,"泉州市永春县","永春县"],
        [350598,"泉州市经济技术开发区","经济技术开发区"],
        [350600,"漳州市","漳州市"],
        [350601,"漳州市市辖区","漳州市市辖区"],
        [350602,"漳州市芗城区","芗城区"],
        [350603,"漳州市龙文区","龙文区"],
        [350622,"漳州市云霄县","云霄县"],
        [350623,"漳州市漳浦县","漳浦县"],
        [350624,"漳州市诏安县","诏安县"],
        [350625,"漳州市长泰县","长泰县"],
        [350626,"漳州市东山县","东山县"],
        [350627,"漳州市南靖县","南靖县"],
        [350628,"漳州市平和县","平和县"],
        [350629,"漳州市华安县","华安县"],
        [350681,"漳州市龙海市","龙海市"],
        [350700,"南平市","南平市"],
        [350701,"南平市市辖区","南平市市辖区"],
        [350702,"南平市延平区","延平区"],
        [350721,"南平市顺昌县","顺昌县"],
        [350722,"南平市浦城县","浦城县"],
        [350723,"南平市光泽县","光泽县"],
        [350724,"南平市松溪县","松溪县"],
        [350725,"南平市政和县","政和县"],
        [350781,"南平市邵武市","邵武市"],
        [350782,"南平市武夷山市","武夷山市"],
        [350783,"南平市建瓯市","建瓯市"],
        [350784,"南平市建阳区","建阳区"],
        [350800,"龙岩市","龙岩市"],
        [350801,"龙岩市市辖区","龙岩市市辖区"],
        [350802,"龙岩市新罗区","新罗区"],
        [350821,"龙岩市长汀县","长汀县"],
        [350822,"龙岩市永定县","永定县"],
        [350823,"龙岩市上杭县","上杭县"],
        [350824,"龙岩市武平县","武平县"],
        [350825,"龙岩市连城县","连城县"],
        [350881,"龙岩市漳平市","漳平市"],
        [350900,"宁德市","宁德市"],
        [350901,"宁德市市辖区","宁德市市辖区"],
        [350902,"宁德市蕉城区","蕉城区"],
        [350921,"宁德市霞浦县","霞浦县"],
        [350922,"宁德市古田县","古田县"],
        [350923,"宁德市屏南县","屏南县"],
        [350924,"宁德市寿宁县","寿宁县"],
        [350925,"宁德市周宁县","周宁县"],
        [350926,"宁德市柘荣县","柘荣县"],
        [350981,"宁德市福安市","福安市"],
        [350982,"宁德市福鼎市","福鼎市"]
    ];
    localStorage.rank=2;
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
    ];
    var provincename=localStorage.provinceName;
    var cityName=localStorage.cityName;
    //产业导航跳转
    $(".topico01").click(function(){
        window.location.href="county.html";
    });
    for (var i = 0; i < province_no.length; i++) {
        if (provincename==province_no[i][1]) {
            provinceIndex = province_no[i][0]
        }
    }
    var zhixiashi = [110000, 120000, 50000, 310000];
    var zizhiqu = [150000, 450000, 540000, 640000, 650000];
    //alert(zhixiashi.indexOf(parseInt(provinceIndex)))
    if (zhixiashi.indexOf(parseInt(provinceIndex)) != -1) {
        $(".provincename").html(provincename + '市');
    }
    else {
            if (zizhiqu.indexOf(parseInt(provinceIndex)) != -1) {
                $(".provincename").html(provincename);
            }
            else {
                $(".provincename").html(provincename + '省');
            }
    }
    $(".topleft-tit").click(function(){
        switch ($(this).index()){
            case 0:
                localStorage.rank=0;
                window.location.href="china.html";
                break;
            case 2:
                localStorage.rank=1;
                window.location.href="provincial.html";
                break;
        }
    });
    if(cityName){
        $(".cityname").html(cityName);
    }
    //$.get('mapjson/city_no.json', function (city_no) {
        var city_no=localStorage.city_no;
        city_no=city_no.split(";")
        $(city_no).each(function(index,element){
            city_no[index]=city_no[index].split(",");
    
        })
        for(var i=0;i<city_no.length;i++){
                if(city_no[i][1]==cityName){
                    cityIndex=city_no[i][0]
                }
            }
        var reg = String(cityIndex);
        reg = reg.substr(0, 4);
        $.get('mapjson/' + provinceIndex + '/' + cityIndex + '.json', function (geoJson) {
            //console.log(geoJson)
            var countyfeature=geoJson.features;
            var county_no=[]
            for(var i=0;i<countyfeature.length;i++){
                county_no.push([countyfeature[i].id,countyfeature[i].properties.name]);
            }
            localStorage.county_no=county_no.join(";");
            //获取市级下的行政编码对照表
            //$.get('mapjson/'+provinceIndex+'/county_350000.json', function (county_no) {
                $.ajax({
                    url: localStorage.serverurl + "/analysis/data?zb=1&reg=" + reg + "&sj=" + localStorage.yeardate,
                    success: function (data) {
                        var mapdata=[]
                            for(var i=0;i<data.info.length;i++){
                                for (var j=0;j<county_no.length;j++){
                                    if(data.info[i][0]==county_no[j][0]){
                                        data.info[i].push(county_no[j][1])
                                    }
                                }
                                var arr={"name":data.info[i][6],"value":data.info[i][2]};
                                mapdata.push(arr);
                            }
                           //绘制市级地图
                           var myChart_city1 = echarts.init(document.getElementById('fuzhou_main'));
                           echarts.registerMap('FJ', geoJson);
                           var option_city1 = {
                            title: {
                                show: false
                            },
                               visualMap: {
                                   min: 0,
                                   max: data.info[0][2],
                                   bottom:'100',
                                   right:'100',
                                   text: ['高', '低'],           // 文本，默认为数值文本
                                   color: ["#FF994F", "#DDDDDD"],
                                   calculable: true,
                                   show:true
                               },
                            tooltip: {
                                trigger: 'item',
                            },
                            toolbox: {
                                show: true,
                                orient: 'vertical',
                                left: 'right',
                                top: 'center',
                                feature: {
                                    mark: {show: false},
                                    dataView: {show: false, readOnly: false},
                                    restore: {show: false},
                                    saveAsImage: {show: false}
                                }
                            },
                            series: [
                                {
                                    label: {
                                        normal: {
                                            show: true
                                        },
                                        emphasis: {
                                            show: true,
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: '#000',
                                            areaColor: 'transparent',
                                            borderColor: '#fff',
                                            borderWidth: 1,
                                        },
                                        emphasis: {
                                            areaStyle: {
                                                backgroudColor: '#fff'
                                            },
                                            label: {
                                                show: true,
                                                color: 'red',
                                                textStyle: {
                                                    // fontWeight:'bold',
                                                    color: "#fff"
                                                }
                                            }
                                        }
                                    },
                                    name:"GDP",
                                    type: 'map',
                                    mapType: 'FJ', // 自定义扩展图表类型
                                    data: mapdata,
                                }
                            ]
                        };
                            myChart_city1.setOption(option_city1);
                            myChart_city1.on('click', function (params) {
                                for(var i=0;i<county_no.length;i++){
                                    if (county_no[i][1]==params.name){
                                        localStorage.countycode=county_no[i][0];
                                    }
                                }
                                localStorage.rank=3;
                                localStorage.countyName=params.name;
                                window.location.href="county.html";
                        })
                    },
                });
            //})
            
        });
        //获取城市生产总值
        $.ajax({
            url:localStorage.serverurl+'/analysis/data?zb=1&reg='+reg+'&sj=',
            success:function(data){
                var myChart_city2= echarts.init(document.getElementById('city_left1_charts'));
                var option_city2 = {
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
                        left:60,
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
                        data:[{name:cityName+'生产总值(亿元)',textStyle:{color:'#FE8920'}},{name:cityName+'生产总值增长率(%)',textStyle:{color:'#8ECEFE'}}],
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
                            max: 3000,
                            interval:500,
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
                            },
                        }
                    ],
                    series: [
                        {
                            name:cityName+'生产总值(亿元)',
                            type:'bar',
                            barWidth:20,
                            data: [data.info[9][2], data.info[8][2], data.info[7][2], data.info[6][2], data.info[5][2], data.info[4][2], data.info[3][2], data.info[2][2], data.info[1][2], data.info[0][2]]
                        },
                        {
                            name:cityName+'生产总值增长率(%)',
                            type:'line',
                            yAxisIndex: 1,
                            data: [(data.info[9][3] - 100).toFixed(2), (data.info[8][3] - 100).toFixed(2), (data.info[7][3] - 100).toFixed(2), (data.info[6][3] - 100).toFixed(2), (data.info[5][3] - 100).toFixed(2), (data.info[4][3] - 100).toFixed(2), (data.info[3][3] - 100).toFixed(2), (data.info[2][3] - 100).toFixed(2), (data.info[1][3] - 100).toFixed(2), (data.info[0][3] - 100).toFixed(2)]
                        }
                    ]
                };
                myChart_city2.setOption(option_city2);
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
                    $("#citygdp_year").append("" +
                    "<td width='28%' align='center' valign='middle'>指标</td>"+
                    "<td width='12%' align='center' valign='middle'>"+gdp_year[0]+"年</td>"+
                    "<td width='12%' align='center' valign='middle'>"+gdp_year[1]+"年</td>"+
                    "<td width='12%' align='center' valign='middle'>"+gdp_year[2]+"年</td>"+
                    "<td width='12%' align='center' valign='middle'>"+gdp_year[3]+"年</td>"+
                    "<td width='12%' align='center' valign='middle'>"+gdp_year[4]+"年</td>"+
                    "")
                $(".datalist1").append("" +
                    "<li>"+
                    "<p class='list01'>"+"生产总值(亿元)</p>"+
                    "<p class='list02'>"+data.info[0][2]+"</p>"+
                    "<p class='list02'>"+data.info[1][2]+"</p>"+
                    "<p class='list02'>"+data.info[2][2]+"</p>"+
                    "<p class='list02'>"+data.info[3][2]+"</p>"+
                    "<p class='list02'>"+data.info[4][2]+"</p>"+
                    "</li>"+
                    "<li>"+
                    "<p class='list01'>"+"生产总值增长率(%)</p>"+
                    "<p class='list02'>"+data.info[0][3]+"</p>"+
                    "<p class='list02'>"+data.info[1][3]+"</p>"+
                    "<p class='list02'>"+data.info[2][3]+"</p>"+
                    "<p class='list02'>"+data.info[3][3]+"</p>"+
                    "<p class='list02'>"+data.info[4][3]+"</p>"+
                    "</li>"+
                    "<li>"+
                    "<p class='list01'>"+"人均生产总值(元/人)</p>"+
                    "<p class='list02'>"+data.info[0][4]+"</p>"+
                    "<p class='list02'>"+data.info[1][4]+"</p>"+
                    "<p class='list02'>"+data.info[2][4]+"</p>"+
                    "<p class='list02'>"+data.info[3][4]+"</p>"+
                    "<p class='list02'>"+data.info[4][4]+"</p>"+
                    "</li>"+
                    "<li>"+
                    "<p class='list01'>"+"人均生产总值增长率(%)</p>"+
                    "<p class='list02'>"+data.info[0][5]+"</p>"+
                    "<p class='list02'>"+data.info[1][5]+"</p>"+
                    "<p class='list02'>"+data.info[2][5]+"</p>"+
                    "<p class='list02'>"+data.info[3][5]+"</p>"+
                    "<p class='list02'>"+data.info[4][5]+"</p>"+
                    "</li>"+
                    "")
            }
        })
        //三次产业贡献率
        $.ajax({
            url:localStorage.serverurl+'/analysis/data?zb=2&reg='+cityIndex+'&sj=',
            success:function(data){
                for(var i=0;i<data.info.length;i++){
                    for(var j=2;j<5;j++){
                        if(data.info[i][j]==null){
                            data.info[i][j]="--"
                        }
                    }
                }
                var myChart_china3 = echarts.init(document.getElementById('city_left2_charts'));
                var option_china3 = {
                    baseOption:{
                        timeline: {
                            // y: 0,
                            show:false,
                            axisType: 'category',
                            autoPlay: true,
                            playInterval: 1000,
                            padding:[0,0,3,0],
                            data: [
                                 '2010-01-01','2011-01-01','2012-01-01','2013-01-01',
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
                                color:'#8ECEFE',
                            },
                            controlStyle:{
                                normal:{
                                    color:'#8ECEFE',
                                    borderColor:'#8ECEFE',
                                }
                            }
                        },
                        title: {
                            left: 'center',
                            top: 20,

                        },
                        grid:{
                            top:20
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
                                center: ['50%', '50%'],
                                data:[
                                    {value:data.info[4][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                    {value:data.info[4][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                    {value:data.info[4][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                ],
                            }
                        ]
                    },
                    options:[
                        {
                            title:{
                                text:"2010年",
                                textStyle:{
                                    color:'#8ECEFE',
                                },
                                left:0,
                            },
                            series : [
                                {

                                    type:'pie',
                                    radius : '55%',
                                    center: ['50%', '50%'],
                                    data:[
                                        {value:data.info[4][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                        {value:data.info[4][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                        {value:data.info[4][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                    ],
                                }
                            ]
                        },
                        {
                            title:{text:"2011年"},
                            series : [
                                {

                                    type:'pie',
                                    radius : '55%',
                                    center: ['50%', '50%'],
                                    data:[
                                        {value:data.info[3][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                        {value:data.info[3][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                        {value:data.info[3][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                    ],
                                }
                            ]
                        },
                        {
                            title:{text:"2012年"},
                            series : [
                                {

                                    type:'pie',
                                    radius : '55%',
                                    center: ['50%', '50%'],
                                    data:[
                                        {value:data.info[2][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                        {value:data.info[2][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                        {value:data.info[2][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                    ],
                                }
                            ]
                        },
                        {
                            title:{text:"2013年"},
                            series : [
                                {

                                    type:'pie',
                                    radius : '55%',
                                    center: ['50%', '50%'],
                                    data:[
                                        {value:data.info[1][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                        {value:data.info[1][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                        {value:data.info[1][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                    ],
                                }
                            ]
                        },
                        {
                            title:{text:"2014年"},
                            series : [
                                {

                                    type:'pie',
                                    radius : '55%',
                                    center: ['50%', '50%'],
                                    data:[
                                        {value:data.info[0][2], name:'第一产业',label:{normal:{textStyle:{color:'#FFC907'}}},labelLine:{normal:{lineStyle:{color:'#FFC907'}}},itemStyle:{normal:{color:'#FFC907'}}},
                                        {value:data.info[0][3], name:'第二产业',label:{normal:{textStyle:{color:'#90C400'}}},labelLine:{normal:{lineStyle:{color:'#90C400'}}},itemStyle:{normal:{color:'#90C400'}}},
                                        {value:data.info[0][4], name:'第三产业',label:{normal:{textStyle:{color:'#36BFED'}}},labelLine:{normal:{lineStyle:{color:'#36BFED'}}},itemStyle:{normal:{color:'#36BFED'}}}
                                    ],
                                }
                            ]
                        },
                    ]

                };
                myChart_china3.setOption(option_china3);
                var chanye_year=["2014","2013","2012","2011","2010"];
                $("#city_chanye").append("" +
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
                    "<p class='list03'>"+data.info[0][2]+"</p>"+
                    "<p class='list03'>"+data.info[1][2]+"</p>"+
                    "<p class='list03'>"+data.info[2][2]+"</p>"+
                    "<p class='list03'>"+data.info[3][2]+"</p>"+
                    "<p class='list03'>"+data.info[4][2]+"</p>"+
                    "</li>"+
                    "<li>"+
                    "<p class='list01'>第二产业(%)</p>"+
                    "<p class='list03'>"+data.info[0][3]+"</p>"+
                    "<p class='list03'>"+data.info[1][3]+"</p>"+
                    "<p class='list03'>"+data.info[2][3]+"</p>"+
                    "<p class='list03'>"+data.info[3][3]+"</p>"+
                    "<p class='list03'>"+data.info[4][3]+"</p>"+
                    "</li>"+
                    "<li>"+
                    "<p class='list01'>第三产业(%)</p>"+
                    "<p class='list03'>"+data.info[0][4]+"</p>"+
                    "<p class='list03'>"+data.info[1][4]+"</p>"+
                    "<p class='list03'>"+data.info[2][4]+"</p>"+
                    "<p class='list03'>"+data.info[3][4]+"</p>"+
                    "<p class='list03'>"+data.info[4][4]+"</p>"+
                    "</li>"+
                    "")
            }
        })
        //三次产业总值
        $.ajax({
            url: localStorage.serverurl + "/analysis/data?zb=9&reg=" + cityIndex + "&sj=",
            success: function (data) {
                var myChart_city4 = echarts.init(document.getElementById('city_right1_charts'));
                var option_city4 = {
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
                        top:20
                    },
                    legend: {
                        bottom:'0px',
                        padding:5,
                        icon:'rect',
                        data:[
                            {name:'第一产业增加值',textStyle:{color:'#86CEF9'}}
                        ]
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
                            interval: 100,
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
                        }
                    ],
                    series: [
                        {
                            itemStyle:{normal:{color:'#86CEF9'}},
                            name:'第一产业增加值',
                            type:'bar',
                            data:[
                                {value:data.info[4][2], name:'2010年',itemStyle:{normal:{color:'#5DC82A'}}},
                                {value:data.info[3][2], name:'2011年',itemStyle:{normal:{color:'#5480E9'}}},
                                {value:data.info[2][2], name:'2012年',itemStyle:{normal:{color:'#E8673D'}}},
                                {value:data.info[1][2], name:'2013年',itemStyle:{normal:{color:'#77C4F8'}}},
                                {value:data.info[0][2], name:'2014年',itemStyle:{normal:{color:'#D054CE'}}}
                            ]
                        },
                    ]
                };
                myChart_city4.setOption(option_city4);
                var myChart_city5 = echarts.init(document.getElementById('city_right2_charts'));
                var option_city5 = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    grid:{
                        top:0
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['2010年','2011年','2012年','2013年','2014年'],
                        show:false
                    },
                    series : [
                        {
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '40%'],
                            data:[
                                {value:data.info[4][3], name:'2010年',itemStyle:{normal:{color:'#5DC82A'}}},
                                {value:data.info[3][3], name:'2011年',itemStyle:{normal:{color:'#5480E9'}}},
                                {value:data.info[2][3], name:'2012年',itemStyle:{normal:{color:'#E8673D'}}},
                                {value:data.info[1][3], name:'2013年',itemStyle:{normal:{color:'#77C4F8'}}},
                                {value:data.info[0][3], name:'2014年',itemStyle:{normal:{color:'#D054CE'}}}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                myChart_city5.setOption(option_city5);
                var myChart_city6 = echarts.init(document.getElementById('city_right3_charts'));
                var option_city6 = {
                    title : {
                        show:false,
                        text: cityName+'第三产业',
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        bottom:'5px',
                        show:false,
                        data:['2011年', '2012年']
                    },
                    grid:{
                        top:20,
                        left:60,
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
                            type : 'category',
                            data : ['2010年','2011年','2012年','2013年','2014年']
                        }
                    ],
                    series : [
                        {
                            type:'bar',
                            data:[
                                {value:data.info[4][4],itemStyle:{normal:{color:'#FE8920'}}},
                                {value:data.info[3][4],itemStyle:{normal:{color:'#8ECEFE'}}},
                                {value:data.info[2][4],itemStyle:{normal:{color:'#FE8920'}}},
                                {value:data.info[1][4],itemStyle:{normal:{color:'#8ECEFE'}}},
                                {value:data.info[0][4],itemStyle:{normal:{color:'#FE8920'}}},
                            ]
                        }
                    ]
                };
                myChart_city6.setOption(option_city6);
            },
        });
    //三次产业概况
    $.ajax({
        url: localStorage.serverurl + "/analysis/data?zb=9&reg="+cityIndex+"&sj=2014",
        success: function (data) {
            console.log(data.info[0])
            if(!data.info[0]){
                $("#indus_1").html("--<br>第一产业");
                $("#indus_2").html("--<br>第二产业");
                $("#indus_3").html("--<br>第三产业");
                $(".indus_main").html("--");
            }
            else {
                $("#indus_1").html(data.info[0][2] + "(亿元)<br>第一产业");
                $("#indus_2").html(data.info[0][3]  + "(亿元)<br>第二产业");
                $("#indus_3").html(data.info[0][4]  + "(亿元)<br>第三产业");
            }
        }
    });
    //})
})
