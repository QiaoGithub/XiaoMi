/**
 * Created by Administrator on 2018/10/15.
 */
var contentPointItemOne=document.getElementsByClassName('content-point-item-one');
var listItem=document.getElementsByClassName('list-item');

for(var i=0;i<contentPointItemOne.length;i++){
    contentPointItemOne[i].index=i;
    contentPointItemOne[i].onclick=function(){
        var now=this.index;
        if(now==0){
            listItem[0].style.marginLeft=0;
            listItem[1].style.marginLeft=0;
            listItem[2].style.marginLeft=0;
        }else if(now==1){
            listItem[0].style.marginLeft=-290+'px';
            listItem[1].style.marginLeft=0;
            listItem[2].style.marginLeft=0;
        }else if(now==2){
            listItem[0].style.marginLeft=-380+'px';
            listItem[1].style.marginLeft=-290+'px';
            listItem[2].style.marginLeft=0;
        }
        for(var i=0;i<contentPointItemOne.length;i++){
            contentPointItemOne[i].className='content-point-item-one'
        }
        contentPointItemOne[now].className='content-point-item-one active'
    };
}