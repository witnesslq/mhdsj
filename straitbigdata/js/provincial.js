/**
 * Created by try on 2016.6.6.
 */
$(document).ready(function(){
    localStorage.countycode="";
    localStorage.citycode="";
    localStorage.rank=1;
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
    var city_no=[
        [350300,"莆田市"],
        [350700,"南平市"],
        [350200,"厦门市"],
        [350600,"漳州市"],
        [350100,"福州市"],
        [350500,"泉州市"],
        [350900,"宁德市"],
        [350400,"三明市"],
        [350800,"龙岩市"],
        [530500,"保山市"],
        [530900,"临沧市"],
        [532800,"西双版纳傣族自治州"],
        [533400,"迪庆藏族自治州"],
        [530400,"玉溪市"],
        [530800,"普洱市"],
        [532600,"文山壮族苗族自治州"],
        [533300,"怒江傈僳族自治州"],
        [530300,"曲靖市"],
        [530700,"丽江市"],
        [532500,"红河哈尼族彝族自治州"],
        [533100,"德宏傣族景颇族自治州"],
        [530100,"昆明市"],
        [530600,"昭通市"],
        [532300,"楚雄彝族自治州"],
        [532900,"大理白族自治州"],
        [150200,"包头市"],
        [150600,"鄂尔多斯市"],
        [152200,"兴安盟"],
        [150100,"呼和浩特市"],
        [150500,"通辽市"],
        [150900,"乌兰察布市"],
        [150400,"赤峰市"],
        [150800,"巴彦淖尔市"],
        [152900,"阿拉善盟"],
        [150300,"乌海市"],
        [150700,"呼伦贝尔市"],
        [152500,"锡林郭勒盟"],
        [710100,"台湾省"],
        [220400,"辽源市"],
        [220800,"白城市"],
        [220300,"四平市"],
        [220700,"松原市"],
        [220200,"吉林市"],
        [220600,"白山市"],
        [220100,"长春市"],
        [220500,"通化市"],
        [222400,"延边朝鲜族自治州"],
        [511600,"广安市"],
        [512000,"资阳市"],
        [510300,"自贡市"],
        [510700,"绵阳市"],
        [511100,"乐山市"],
        [511500,"宜宾市"],
        [511900,"巴中市"],
        [513400,"凉山彝族自治州"],
        [510100,"成都市"],
        [510600,"德阳市"],
        [511000,"内江市"],
        [511400,"眉山市"],
        [511800,"雅安市"],
        [513300,"甘孜藏族自治州"],
        [510500,"泸州市"],
        [510900,"遂宁市"],
        [511700,"达州市"],
        [513200,"阿坝藏族羌族自治州"],
        [510400,"攀枝花市"],
        [510800,"广元市"],
        [511300,"南充市"],
        [640100,"银川市"],
        [640500,"中卫市"],
        [640400,"固原市"],
        [640300,"吴忠市"],
        [640200,"石嘴山市"],
        [340300,"蚌埠市"],
        [340700,"铜陵市"],
        [341200,"阜阳市"],
        [341700,"池州市"],
        [340200,"芜湖市"],
        [340600,"淮北市"],
        [341100,"滁州市"],
        [341600,"亳州市"],
        [340100,"合肥市"],
        [340500,"马鞍山市"],
        [341000,"黄山市"],
        [341500,"六安市"],
        [341800,"宣城市"],
        [340400,"淮南市"],
        [340800,"安庆市"],
        [341300,"宿州市"],
        [370300,"淄博市"],
        [370700,"潍坊市"],
        [371100,"日照市"],
        [371500,"聊城市"],
        [370200,"青岛市"],
        [370600,"烟台市"],
        [371000,"威海市"],
        [371400,"德州市"],
        [370100,"济南市"],
        [370500,"东营市"],
        [370900,"泰安市"],
        [371300,"临沂市"],
        [371700,"菏泽市"],
        [370400,"枣庄市"],
        [370800,"济宁市"],
        [371200,"莱芜市"],
        [371600,"滨州市"],
        [140100,"太原市"],
        [140500,"晋城市"],
        [140900,"忻州市"],
        [140400,"长治市"],
        [140800,"运城市"],
        [140300,"阳泉市"],
        [140700,"晋中市"],
        [141100,"吕梁市"],
        [140200,"大同市"],
        [140600,"朔州市"],
        [141000,"临汾市"],
        [440400,"珠海市"],
        [440800,"湛江市"],
        [441400,"梅州市"],
        [441800,"清远市"],
        [442000,"中山市"],
        [440300,"深圳市"],
        [440700,"江门市"],
        [441300,"惠州市"],
        [441700,"阳江市"],
        [445300,"云浮市"],
        [441900,"东莞市"],
        [440200,"韶关市"],
        [440600,"佛山市"],
        [441200,"肇庆市"],
        [441600,"河源市"],
        [445200,"揭阳市"],
        [440100,"广州市"],
        [440500,"汕头市"],
        [440900,"茂名市"],
        [441500,"汕尾市"],
        [445100,"潮州市"],
        [450100,"南宁市"],
        [450700,"钦州市"],
        [451100,"贺州市"],
        [450600,"防城港市"],
        [451000,"百色市"],
        [451400,"崇左市"],
        [450300,"桂林市"],
        [450500,"北海市"],
        [450900,"玉林市"],
        [451300,"来宾市"],
        [450200,"柳州市"],
        [450400,"梧州市"],
        [450800,"贵港市"],
        [451200,"河池市"],
        [652200,"哈密地区"],
        [652900,"阿克苏地区"],
        [654000,"伊犁哈萨克自治州"],
        [652100,"吐鲁番地区"],
        [652800,"巴音郭楞蒙古自治州"],
        [653200,"和田地区"],
        [650200,"克拉玛依市"],
        [652700,"博尔塔拉蒙古自治州"],
        [653100,"喀什地区"],
        [654300,"阿勒泰地区"],
        [650100,"乌鲁木齐市"],
        [652300,"昌吉回族自治州"],
        [653000,"克孜勒苏柯尔克孜自治州"],
        [654200,"塔城地区"],
        [659000,"新疆省直辖县级行政区划"],
        [320700,"连云港市"],
        [321100,"镇江市"],
        [320200,"无锡市"],
        [320600,"南通市"],
        [321000,"扬州市"],
        [320100,"南京市"],
        [320500,"苏州市"],
        [320900,"盐城市"],
        [321300,"宿迁市"],
        [320400,"常州市"],
        [320800,"淮安市"],
        [321200,"泰州市"],
        [320300,"徐州市"],
        [360200,"景德镇市"],
        [360600,"鹰潭市"],
        [361000,"抚州市"],
        [360100,"南昌市"],
        [360500,"新余市"],
        [360900,"宜春市"],
        [360400,"九江市"],
        [360800,"吉安市"],
        [360300,"萍乡市"],
        [360700,"赣州市"],
        [361100,"上饶市"],
        [130400,"邯郸市"],
        [130800,"承德市"],
        [130300,"秦皇岛市"],
        [130700,"张家口市"],
        [131100,"衡水市"],
        [130200,"唐山市"],
        [130600,"保定市"],
        [131000,"廊坊市"],
        [130100,"石家庄市"],
        [130500,"邢台市"],
        [130900,"沧州市"],
        [410200,"开封市"],
        [410600,"鹤壁市"],
        [411000,"许昌市"],
        [411400,"商丘市"],
        [411700,"驻马店市"],
        [410100,"郑州市"],
        [410500,"安阳市"],
        [410900,"濮阳市"],
        [411300,"南阳市"],
        [410400,"平顶山市"],
        [410800,"焦作市"],
        [411200,"三门峡市"],
        [411600,"周口市"],
        [410300,"洛阳市"],
        [410700,"新乡市"],
        [411100,"漯河市"],
        [411500,"信阳市"],
        [419000,"河南省省直辖县级行政区划"],
        [330200,"宁波市"],
        [330600,"绍兴市"],
        [331000,"台州市"],
        [330100,"杭州市"],
        [330500,"湖州市"],
        [330900,"舟山市"],
        [330400,"嘉兴市"],
        [330800,"衢州市"],
        [330300,"温州市"],
        [330700,"金华市"],
        [331100,"丽水市"],
        [460100,"海口市"],
        [460300,"三沙市"],
        [460200,"三亚市"],
        [469000,"省直辖县级行政单位"],
        [420100,"武汉市"],
        [420700,"鄂州市"],
        [421100,"黄冈市"],
        [420500,"宜昌市"],
        [420600,"襄阳市"],
        [421000,"荆州市"],
        [422800,"恩施土家族苗族自治州"],
        [420300,"十堰市"],
        [420900,"孝感市"],
        [421300,"随州市"],
        [420200,"黄石市"],
        [420800,"荆门市"],
        [421200,"咸宁市"],
        [429000,"湖北省省直辖县级行政区划"],
        [430500,"邵阳市"],
        [430900,"益阳市"],
        [431300,"娄底市"],
        [430100,"长沙市"],
        [430400,"衡阳市"],
        [430800,"张家界市"],
        [431200,"怀化市"],
        [430300,"湘潭市"],
        [430700,"常德市"],
        [431100,"永州市"],
        [430600,"岳阳市"],
        [431000,"郴州市"],
        [433100,"湘西土家族苗族自治州"],
        [430200,"株洲市"],
        [820100,"澳门特别行政区"],
        [620300,"金昌市"],
        [620700,"张掖市"],
        [621100,"定西市"],
        [620600,"武威市"],
        [621000,"庆阳市"],
        [623000,"甘南藏族自治州"],
        [620200,"嘉峪关市"],
        [620500,"天水市"],
        [620900,"酒泉市"],
        [622900,"临夏回族自治州"],
        [620100,"兰州市"],
        [620400,"白银市"],
        [620800,"平凉市"],
        [621200,"陇南市"],
        [542300,"日喀则地区"],
        [542200,"山南地区"],
        [542600,"林芝地区"],
        [542100,"昌都地区"],
        [542500,"阿里地区"],
        [540100,"拉萨市"],
        [542400,"那曲地区"],
        [520100,"贵阳市"],
        [522400,"毕节市"],
        [522700,"黔南布依族苗族自治州"],
        [520400,"安顺市"],
        [522600,"黔东南苗族侗族自治州"],
        [520300,"遵义市"],
        [522300,"黔西南布依族苗族自治州"],
        [520200,"六盘水市"],
        [522200,"铜仁市"],
        [211400,"葫芦岛市"],
        [210200,"大连市"],
        [210600,"丹东市"],
        [211000,"辽阳市"],
        [210100,"沈阳市"],
        [210500,"本溪市"],
        [210900,"阜新市"],
        [211300,"朝阳市"],
        [210400,"抚顺市"],
        [210800,"营口市"],
        [211200,"铁岭市"],
        [210300,"鞍山市"],
        [210700,"锦州市"],
        [211100,"盘锦市"],
        [610100,"西安市"],
        [610500,"渭南市"],
        [610900,"安康市"],
        [610400,"咸阳市"],
        [610800,"榆林市"],
        [610300,"宝鸡市"],
        [610700,"汉中市"],
        [610200,"铜川市"],
        [610600,"延安市"],
        [611000,"商洛市"],
        [630100,"西宁市"],
        [632500,"海南藏族自治州"],
        [632300,"黄南藏族自治州"],
        [632800,"海西蒙古族藏族自治州"],
        [632200,"海北藏族自治州"],
        [632700,"玉树藏族自治州"],
        [632100,"海东地区"],
        [632600,"果洛藏族自治州"],
        [810100,"香港特别行政区"],
        [230300,"鸡西市"],
        [230700,"伊春市"],
        [231100,"黑河市"],
        [230200,"齐齐哈尔市"],
        [230600,"大庆市"],
        [231000,"牡丹江市"],
        [230100,"哈尔滨市"],
        [230500,"双鸭山市"],
        [230900,"七台河市"],
        [232700,"大兴安岭地区"],
        [230400,"鹤岗市"],
        [230800,"佳木斯市"],
        [231200,"绥化市"],
        [110101,"东城区"],
        [110102,"西城区"],
        [110103,"崇文区"],
        [110104,"宣武区"],
        [110105,"朝阳区"],
        [110106,"丰台区"],
        [110107,"石景山区"],
        [110108,"海淀区"],
        [110109,"门头沟区"],
        [110111,"房山区"],
        [110112,"通州区"],
        [110113,"顺义区"],
        [110114,"昌平区"],
        [110115,"大兴区"],
        [110116,"怀柔区"],
        [110117,"平谷区"],
        [110228,"密云县"],
        [110229,"延庆县"],
        [120101,"和平区 "],
        [120102,"河东区 "],
        [120103,"河西区 "],
        [120104,"南开区 "],
        [120105,"河北区 "],
        [120106,"红桥区 "],
        [120107,"塘沽区 "],
        [120108,"汉沽区 "],
        [120109,"大港区 "],
        [120110,"东丽区 "],
        [120111,"西青区 "],
        [120112,"津南区 "],
        [120113,"北辰区 "],
        [120114,"武清区 "],
        [120115,"宝坻区 "],
        [120116,"滨海新区"],
        [120221,"宁河县 "],
        [120223,"静海县 "],
        [120225,"蓟县"],
        [500101,"万州区"],
        [500102,"涪陵区"],
        [500103,"渝中区"],
        [500104,"大渡口区"],
        [500105,"江北区"],
        [500106,"沙坪坝区"],
        [500107,"九龙坡区"],
        [500108,"南岸区"],
        [500109,"北碚区"],
        [500110,"万盛区"],
        [500111,"双桥区"],
        [500112,"渝北区"],
        [500113,"巴南区"],
        [500114,"黔江区"],
        [500115,"长寿区"],
        [500116,"江津区"],
        [500117,"合川区"],
        [500118,"永川区"],
        [500119,"南川区"],
        [500120,"璧山区"],
        [500121,"大足区"],
        [500222,"綦江县"],
        [500223,"潼南县"],
        [500224,"铜梁县"],
        [500225,"大足县"],
        [500226,"荣昌县"],
        [500227,"璧山县"],
        [500228,"梁平县"],
        [500229,"城口县"],
        [500230,"丰都县"],
        [500231,"垫江县"],
        [500232,"武隆县"],
        [500233,"忠县"],
        [500234,"开县"],
        [500235,"云阳县"],
        [500236,"奉节县"],
        [500237,"巫山县"],
        [500238,"巫溪县"],
        [500240,"石柱土家族自治县"],
        [500241,"秀山土家族苗族自治县"],
        [500242,"酉阳土家族苗族自治县"],
        [500243,"彭水苗族土家族自治县"],
        [310101,"黄浦区 "],
        [310103,"卢湾区 "],
        [310104,"徐汇区 "],
        [310105,"长宁区 "],
        [310106,"静安区 "],
        [310107,"普陀区 "],
        [310108,"闸北区 "],
        [310109,"虹口区 "],
        [310110,"杨浦区 "],
        [310112,"闵行区 "],
        [310113,"宝山区 "],
        [310114,"嘉定区 "],
        [310115,"浦东新区 "],
        [310116,"金山区 "],
        [310117,"松江区 "],
        [310118,"青浦区 "],
        [310119,"南汇区 "],
        [310120,"奉贤区 "],
        [310230,"崇明县 "]
    ];
    var provinceIndex="";
    var provinceName=localStorage.provinceName;
    $(".topleft-tit").click(function(){
        if($(this).index()==0){
                localStorage.rank=0;
                window.location.href="china.html";
        }
    });
    //产业导航跳转
    $(".topico01").click(function(){
        window.location.href="county.html";
    });
    //$.get('mapjson/province_no.json', function (province_no) {
    //    for (var i = 0; i < province_no.length; i++) {
    //        if (province_no[i][1] == provinceName) {
    //            provinceIndex = province_no[i][0]
    //        }
    //    }
        provinceIndex=localStorage.provicecode
        var reg = String(provinceIndex);
        reg = reg.substr(0, 2);
        var zhixiashi = [110000, 120000, 50000, 310000];
        var zizhiqu = [150000, 450000, 540000, 640000, 650000];
        //兼容ie不支持indexof方法
        if(!Array.indexOf)
        {
            Array.prototype.indexOf = function(obj)
            {
                for(var i=0; i<this.length; i++)
                {
                    if(this[i]==obj)
                    {
                        return i;
                    }
                }
                return -1;
            }
        }
        //alert(zhixiashi.indexOf(parseInt(provinceIndex)))
        if (zhixiashi.indexOf(parseInt(provinceIndex)) != -1) {
            $(".provincename").html(provinceName + '市');
        }
        else {
                if (zizhiqu.indexOf(parseInt(provinceIndex)) != -1) {
                    $(".provincename").html(provinceName);
                }
                else {
                    $(".provincename").html(provinceName + '省');
                }
        }
        //省份图表
        $.get('mapjson/province/' + provinceIndex + '.json', function (geoJson) {
            var cityfeature=geoJson.features;
            var city_no=[]
            for(var i=0;i<cityfeature.length;i++){
                city_no.push([cityfeature[i].id,cityfeature[i].properties.name]);
            }
            localStorage.city_no=city_no.join(";");

            //获取省份下的行政编码对照表
            //$.get('mapjson/city_no.json', function (city_no) {
                $.ajax({
                    url: localStorage.serverurl + "/analysis/data?zb=4&reg=" + reg + "&sj=" + localStorage.yeardate,
                    success: function (data) {
                        for (var i = 0; i < data.info.length; i++) {
                            for (var j = 0; j < city_no.length; j++) {
                                if (data.info[i][0] == city_no[j][0]) {
                                    data.info[i].push(city_no[j][1])
                                }
                            }
                        }
                        //绘制地图
                        $.ajax({
                            url: localStorage.serverurl + "/analysis/data?zb=1&reg=" + reg + "&sj=" + localStorage.yeardate,
                            success: function (data){
                                var mapdata=[]
                                for(var i=0;i<data.info.length;i++){
                                    for (var j=0;j<city_no.length;j++){
                                        if(data.info[i][0]==city_no[j][0]){
                                            data.info[i].push(city_no[j][1])
                                        }
                                    }
                                    var arr={"name":data.info[i][6],"value":data.info[i][2]};
                                    mapdata.push(arr);
                                }
                                mapdata[0]={"name":'福州市',"value":data.info[0][2], "selected":true,"itemStyle":{normal:{borderColor:'#445',shadowColor: 'rgba(0, 0, 0, 0.5)', shadowBlur: 10,borderWidth:1}}}
                                var myChart_province1 = echarts.init(document.getElementById('fujian_main'));
                                myChart_province1.hideLoading();
                                echarts.registerMap('FJ', geoJson);
                                myChart_province1.setOption(option_province1 = {
                                    visualMap: {
                                        min: 0,
                                        max: mapdata[0].value+1000,
                                        bottom:'130',
                                        right:'170',
                                        text: ['高', '低'],           // 文本，默认为数值文本
                                        color: ["#FF994F", "#DDDDDD"],
                                        calculable: true,
                                        show:true
                                    },
                                    tooltip: {
                                        //trigger: 'item'
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
                                                    show: true
                                                }
                                            },
                                            itemStyle: {
                                                normal: {
                                                    color: '#000',
                                                    areaColor: 'transparent',
                                                    borderColor: '#fff',
                                                    borderWidth: 1
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
                                            data: mapdata
                                        }
                                    ]
                                });
                                myChart_province1.on('click', function (params) {
                                    console.log(params.all);
                                    for(var i=0;i<city_no.length;i++){
                                        if (city_no[i][1]==params.name){
                                            localStorage.citycode=city_no[i][0];
                                        }
                                    }
                                    localStorage.rank=2;
                                    localStorage.cityName=params.name;
                                    window.location.href = "city.html";
                                })
                            }
                        });
                        //获取GDP排名
                        var myChart_province5 = echarts.init(document.getElementById('provincial_right2_charts'));
                        var option_province5 = {
                            title: {
                                show: false,
                                text: '全国GDP排名',
                                subtext: '数据来自网络'
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                bottom: '5px',
                                show: false,
                                data: ['2014年']
                            },
                            grid: {
                                top: 20,
                                left:70
                            },
                            toolbox: {
                                show: true,
                                feature: {
                                    mark: {show: false},
                                    dataView: {show: false, readOnly: false},
                                    magicType: {show: false, type: ['line', 'bar']},
                                    restore: {show: false},
                                    saveAsImage: {show: false}
                                }
                            },
                            calculable: true,
                            xAxis: [
                                {
                                    axisLabel: {
                                        formatter: '{value}',
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: '#4A84B7'
                                        }
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    type: 'value',
                                    boundaryGap: [0, 0.01]
                                }
                            ],
                            yAxis: [
                                {
                                    axisLabel: {
                                        formatter: '{value}',
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: '#4A84B7'
                                        }
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    type: 'category',
                                    data : (function(){
                                        var res=[]
                                        if (!data.info.length){
                                            res.push("暂无数据");
                                        }
                                        else {
                                            for(var i=data.info.length-1;i>=0;i--){
                                                var arr={"value":data.info[i][4]};
                                                res.push(arr);
                                            } 
                                        }
                                        return res
                                    })()
                                }
                            ],
                            series: [
                                {
                                    name: '2014年',
                                    type: 'bar',
                                    data:(function(){
                                        var res=[]
                                        if (!data.info.length){
                                            res.push("暂无数据");
                                        }
                                        else {
                                            for(var i=data.info.length-1;i>=0;i--){
                                                if(i%2==0){
                                                    var arr={"value": data.info[i][2], "itemStyle": {normal: {color: '#FE8920'}}};
                                                }
                                                else {
                                                    var arr={"value": data.info[i][2], "itemStyle": {normal: {color: '#8ECEFE'}}};
                                                }
                                                res.push(arr);
                                            }  
                                        }
                                        return res
                                    })()
                                }
                            ]
                        }
                        myChart_province5.setOption(option_province5);
                    }
                //});
            })
           
        });
        
        // 省份重点产业数据
        $.ajax({
            url: localStorage.serverurl + "/analysis/data?zb=5&reg=" + provinceIndex + "&sj=" + localStorage.yeardate,
            success: function (data) {
                var myChart_province6 = echarts.init(document.getElementById('provincial_right3_charts'));
                var option_province6 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}: {c} ({d}%)"
                    },
                    legend: {
                        x: 'left',
                        y: 'bottom',
                        right:'20',
                        left:'20',
                        data: [
                            {name: '农林牧渔业', icon: 'circle', textStyle: {color: '#D53A35'}},
                            {name: '工业', icon: 'circle', textStyle: {color: '#FE8920'}},
                            {name: '建筑业', icon: 'circle', textStyle: {color: '#FE8920'}},
                            {name: '批发和零售业', icon: 'circle', textStyle: {color: '#FE8920'}},
                            {name: '交通运输、仓储和邮政业', icon: 'circle', textStyle: {color: '#FE8920'}},
                            {name: '住宿和餐饮业', icon: 'circle', textStyle: {color: '#FE8920'}},
                            {name: '金融业', icon: 'circle', textStyle: {color: '#FE8920'}},
                            {name: '房地产业', icon: 'circle', textStyle: {color: '#FE8920'}},
                            {name: '其他行业', icon: 'circle', textStyle: {color: '#8ECEFE'}}
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
                                {value:data.info[0][5]+data.info[0][6]+data.info[0][7]+data.info[0][8]+data.info[0][9]+data.info[0][10], name:'第三产业',itemStyle:{normal:{color:'#FE8920'}}}
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
                myChart_province6.setOption(option_province6);
            }
        });
        //获取省份生产总值
        $.ajax({
            url: localStorage.serverurl + '/analysis/data?zb=1&reg=' + provinceIndex + '&sj=',
            success: function (data) {
                var myChart_province2 = echarts.init(document.getElementById('provincial_left1_charts'));
                var option_province2 = {
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
                    grid: {
                        top: 40,
                        left:60
                    },
                    lineStyle: {
                        normal: {
                            color: '#8ECEFE'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FE8920'
                        }
                    },
                    legend: {
                        bottom: '5px',
                        data: [{
                            name: provinceName + '生产总值(亿元)',
                            textStyle: {color: '#FE8920'}
                        }, {name: provinceName + '生产总值增长率(%)', textStyle: {color: '#8ECEFE'}}]
                    },
                    textStyle: {
                        color: '#fff'
                    },
                    xAxis: [
                        {
                            axisLabel: {
                                rotate: 30,
                                interval: 0,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#4A84B7'
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            type: 'category',
                            data: ['2005年', '2006年', '2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年']
                        }
                    ],
                    yAxis: [
                        {
                            axisLine: {
                                lineStyle: {
                                    color: '#4A84B7'
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            type: 'value',
                            name: '亿元',
                            min: 0,
                            max:30000,
                            interval: 5000,
                            axisLabel: {
                                formatter: '{value}',
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        {
                            axisLine: {
                                lineStyle: {
                                    color: '#4A84B7'
                                }
                            },

                            splitLine: {
                                show: false
                            },
                            type: 'value',
                            name: '%',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value}',
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: provinceName + '生产总值(亿元)',
                            type: 'bar',
                            barWidth:20,
                            data: [data.info[9][2], data.info[8][2], data.info[7][2], data.info[6][2], data.info[5][2], data.info[4][2], data.info[3][2], data.info[2][2], data.info[1][2], data.info[0][2]]
                        },
                        {
                            name: provinceName + '生产总值增长率(%)',
                            type: 'line',
                            yAxisIndex: 1,
                            data: [(data.info[9][3] - 100).toFixed(2), (data.info[8][3] - 100).toFixed(2), (data.info[7][3] - 100).toFixed(2), (data.info[6][3] - 100).toFixed(2), (data.info[5][3] - 100).toFixed(2), (data.info[4][3] - 100).toFixed(2), (data.info[3][3] - 100).toFixed(2), (data.info[2][3] - 100).toFixed(2), (data.info[1][3] - 100).toFixed(2), (data.info[0][3] - 100).toFixed(2)]
                        }
                    ]
                };
                myChart_province2.setOption(option_province2);
               
                var gdp_year = ["2014", "2013", "2012", "2011", "2010"];
                for(var i=0;i<gdp_year.length;i++){
                    for(var j=2;j<6;j++) {
                        if(j==3||j==5){
                            if (data.info[i][j] == 0||!data.info[i][j]) {
                                data.info[i][j] = String(data.info[i][j]);
                                data.info[i][j] = "--"
                            }
                            else {
                                data.info[i][j] = (data.info[i][j] - 100).toFixed(2)
                            }
                        }
                        else {
                            if (data.info[i][j] == 0||!data.info[i][j]) {
                                data.info[i][j] = String(data.info[i][j]);
                                data.info[i][j] = "--"
                            }
                        }
                    }
                }
                $("#provincegdp_year").append("" +
                    "<td width='28%' align='center' valign='middle'>指标</td>" +
                    "<td width='12%' align='center' valign='middle'>" + gdp_year[0] + "年</td>" +
                    "<td width='12%' align='center' valign='middle'>" + gdp_year[1] + "年</td>" +
                    "<td width='12%' align='center' valign='middle'>" + gdp_year[2] + "年</td>" +
                    "<td width='12%' align='center' valign='middle'>" + gdp_year[3] + "年</td>" +
                    "<td width='12%' align='center' valign='middle'>" + gdp_year[4] + "年</td>" +
                    "")
                $(".datalist1").append("" +
                    "<li>" +
                    "<p class='list01'>" + "生产总值(亿元)</p>" +
                    "<p class='list02'>" + data.info[0][2] + "</p>" +
                    "<p class='list02'>" + data.info[1][2] + "</p>" +
                    "<p class='list02'>" + data.info[2][2] + "</p>" +
                    "<p class='list02'>" + data.info[3][2] + "</p>" +
                    "<p class='list02'>" + data.info[4][2] + "</p>" +
                    "</li>" +
                    "<li>" +
                    "<p class='list01'>" + "生产总值增长率(%)</p>" +
                    "<p class='list02'>" + data.info[0][3]+ "</p>" +
                    "<p class='list02'>" + data.info[1][3]+ "</p>" +
                    "<p class='list02'>" + data.info[2][3]+ "</p>" +
                    "<p class='list02'>" + data.info[3][3]+ "</p>" +
                    "<p class='list02'>" + data.info[4][3]+ "</p>" +
                    "</li>" +
                    "<li>" +
                    "<p class='list01'>" + "人均生产总值(元/人)</p>" +
                    "<p class='list02'>" + data.info[0][4] + "</p>" +
                    "<p class='list02'>" + data.info[1][4] + "</p>" +
                    "<p class='list02'>" + data.info[2][4] + "</p>" +
                    "<p class='list02'>" + data.info[3][4] + "</p>" +
                    "<p class='list02'>" + data.info[4][4] + "</p>" +
                    "</li>" +
                    "<li>" +
                    "<p class='list01'>" + "人均生产总值增长率(%)</p>" +
                    "<p class='list02'>" + data.info[0][5]+ "</p>" +
                    "<p class='list02'>" + data.info[1][5]+ "</p>" +
                    "<p class='list02'>" + data.info[2][5]+ "</p>" +
                    "<p class='list02'>" + data.info[3][5]+ "</p>" +
                    "<p class='list02'>" + data.info[4][5]+ "</p>" +
                    "</li>" +
                    "")
            }
        });
        //三次产业构成
        $.ajax({
            url: localStorage.serverurl + "/analysis/data?zb=9&reg=" + reg + "&sj=" + localStorage.yeardate,
            success: function (data) {
                var myChart_province4 = echarts.init(document.getElementById('provincial_right1_charts'));
                var option_province4 = {
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
                    grid: {
                        top: 20,
                        left:70
                    },
                    legend: {
                        bottom: '0px',
                        padding: 5,
                        icon: 'rect',
                        data: [
                            //{name:'国内生产总值(%)',textStyle:{color:'#FF7F50'}},
                            {name: '第一产业增加值', textStyle: {color: '#86CEF9'}},
                            {name: '第二产业增加值', textStyle: {color: '#DA70D5'}},
                            {name: '第三产业增加值', textStyle: {color: '#35CD33'}}]
                    },
                    xAxis: [
                        {
                            axisLabel: {
                                formatter: '{value}',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#4A84B7'
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            type: 'category',
                            data: ['2010年', '2011年', '2012年', '2013年', '2014年']
                        }
                    ],
                    yAxis: [
                        {
                            splitLine: {
                                show: false
                            },
                            type: 'value',
                            name: '',
                            min: 0,
                            max: 5000,
                            interval: 1000,
                            axisLabel: {
                                formatter: '{value}',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#4A84B7'
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
                            itemStyle: {normal: {color: '#86CEF9'}},
                            name: '第一产业增加值',
                            type: 'bar',
                            data: [data.info[4][2], data.info[3][2], data.info[2][2], data.info[1][2], data.info[0][2]]
                        },
                        {
                            itemStyle: {normal: {color: '#DA70D5'}},
                            name: '第二产业增加值',
                            type: 'bar',
                            data: [data.info[4][3], data.info[3][3], data.info[2][3], data.info[1][3], data.info[0][3]]
                        },
                        {
                            itemStyle: {normal: {color: '#35CD33'}},
                            name: '第三产业增加值',
                            type: 'bar',
                            data: [data.info[4][4], data.info[3][4], data.info[2][4], data.info[1][4], data.info[0][4]]
                        }
                    ]
                };
                myChart_province4.setOption(option_province4);
            }
        });
        //三次产业概况
        $.ajax({
            url: localStorage.serverurl + "/analysis/general?reg=" + provinceIndex,
            success: function (data) {
                if(!data.info.project){
                    $("#indus_1").html("--<br>第一产业");
                    $("#indus_2").html("--<br>第二产业");
                    $("#indus_3").html("--<br>第三产业");
                    $(".indus_main").html("--");
                }
                else {
                    $("#indus_1").html(data.info.indus_1 + "<br>第一产业");
                    $("#indus_2").html(data.info.indus_2 + "<br>第二产业");
                    $("#indus_3").html(data.info.indus_3 + "<br>第三产业");
                    $(".indus_main").html(data.info.population + "<br>" + data.info.employment + "<br>" + data.info.project); 
                }
            }
        });
        //三次产业贡献率
        $.ajax({
            url:localStorage.serverurl+'/analysis/data?zb=2&reg='+provinceIndex+'&sj=',
            success:function(data){
                for(var i=0;i<data.info.length;i++){
                    for(var j=2;j<5;j++){
                        if(data.info[i][j]==null){
                            data.info[i][j]="--"
                        }
                    }
                }
                var myChart_china3 = echarts.init(document.getElementById('provincial_left2_charts'));
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
                                '2009-01-01', '2010-01-01','2011-01-01','2012-01-01','2013-01-01',
                                {
                                    value: '2014-01-01',
                                    symbol: 'diamond',
                                    symbolSize: 18
                                }
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
                            top: 20

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
                $("#province_chanye").append("" +
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
     //})

})