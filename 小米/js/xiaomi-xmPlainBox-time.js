/**
 * Created by Administrator on 2018/10/15.
 */
function toDou(n) {
    if(n<10)
    {
        return '0'+n;
    }
    else
    {
        return ''+n;
    }
}
    var aImg=document.getElementsByClassName('time-img');
    function show() {
        var oDate=new Date();
        var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
        for(var i=0;i<aImg.length;i++)
        {
            aImg[i].src='img/'+str.charAt(i)+'.png';
        }
    }
    setInterval(show,1000);
    show();

var btnLeft=document.getElementById('btn-left');
var btnRight=document.getElementById('btn-right');
var listHotGoods=document.getElementsByClassName('list-hot-goods')[0];
btnRight.onclick=function(){
    listHotGoods.className='list-hot-goods active';
    btnRight.className='xm-controls-disabled icon-angle-right';
    btnLeft.className='icon-angle-left'
};
btnLeft.onclick=function(){
    listHotGoods.className='list-hot-goods';
    btnRight.className='icon-angle-right';
    btnLeft.className='xm-controls-disabled icon-angle-left'
};