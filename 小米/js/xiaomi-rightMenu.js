/**
 * Created by Administrator on 2018/10/14.
 */
var itemFour=document.getElementById('item-a-four');

var getScrollTop=function (){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
};
var changeone=function () {
    document.onscroll = function(){
        if (getScrollTop()>400){
            itemFour.style.display='block'
        }else{
            itemFour.style.display='none'
        }
    };
};
changeone();