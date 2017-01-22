/**
 * Created by try on 2016.6.7.
 */
//localStorage.serverurl="http://192.168.2.117:81";
localStorage.imgurl="http://192.168.2.134:8081";
localStorage.serverurl="http://192.168.2.134:8080/base";
localStorage.serverurl2="http://192.168.2.221:8086";
localStorage.serverurl3="http://192.168.2.134:8080/base";
localStorage.yeardate=2014;
var showindexbtn=function(e){
    //console.log($(e))
    $(e).removeClass("backindexhide");
    $(e).addClass("backindexshow")
}
var hideindexbtn=function(e){
    //console.log($(e));
    $(e).removeClass("backindexshow");
    $(e).addClass("backindexhide")
}