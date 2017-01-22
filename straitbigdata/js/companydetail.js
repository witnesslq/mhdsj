/**
 * Created by try on 2016.7.20.
 */
/**
 * Created by try on 2016.6.12.
 */
$(function(){
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
    $.ajax({
        url:localStorage.serverurl3+'/company/getCompanyInfo?',
        type:"POST",
        data:{"name":localStorage.companyname},
        success:function(data){
            var temp=data.data.companyInfo;
            if(temp&&temp.company_type_name){
                $("#companyname").append(localStorage.companyname+'<mark>'+temp.company_type_name+'</mark>');
                $("#company_type").append(temp.company_type_name);
            }
            else {
                $("#companyname").append(localStorage.companyname);
                $("#company_type").append("暂无数据");

            }
            if(temp&&temp.affiliated){
                $("#company_affiliated").append(temp.affiliated);
            }
            else {
                $("#company_affiliated").append("暂无数据");

            }
            if(temp&&temp.address){
                $("#company_address").append(temp.address);
            }
            else {
                $("#company_address").append("暂无数据");
            }
            if(temp&&temp.introduction){
                $("#company_introduction").append(temp.introduction);
            }
            else {
                $("#company_introduction").append("暂无数据");
            }
            if(temp&&temp.manage_field){
                $("#company_manage_field").append(temp.manage_field);
            }
            else {
               $("#company_manage_field").append("暂无数据");
            }
        }

    })
})