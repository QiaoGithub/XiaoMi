/**
 * Created by Administrator on 2018/10/14.
 */
var leftList=document.getElementsByClassName('left-list');
var siteItem=document.getElementsByClassName('site-item');



for(var i=0;i<siteItem.length;i++){
    siteItem[i].index=i;
    siteItem[i].onmouseover=function(){
        var now=this.index;
        for(var i=0;i<leftList.length;i++){
            leftList[i].className='left-list';
        }
        leftList[now].className='left-list active'
    }
    siteItem[i].onmouseout=function(){
        var now=this.index;
        leftList[now].className='left-list'
    }
}
 var item=$('.item');
        var point=$('.point');
        var index=0;
        var goIndex=function(){
            item.removeClass('active');
            item.eq(index).addClass('active');

            point.removeClass('active');
            point.eq(index).addClass('active');
        };
        $('#goNext').on('click',function(){
            if(index==item.length-1){
                index=0;
            }else{
                index++;
            }
            goIndex();
        });
        $('#goPre').on('click',function(){
            if(index==0){
                index=item.length-1;
            }else{
                index--;
            }
            goIndex();
        });

        point.on('click',function(){
            var i=$(this).attr('data-index');
            index=i;
            goIndex();
        });
        var next=function(){
            if(index==4){
                index=0
            }else{
                index++;
            }
            goIndex();
        };
        timer=setInterval(next,3000);
        point.on('mouseenter',function(){
            clearInterval(timer);
            var i=$(this).attr('data-index');
            index=i;
            goIndex();
        });
        point.on('mouseleave',function(){
            var i=$(this).attr('data-index');
            index=i;
            timer=setInterval(next,3000)
        });
        item.on('mouseenter',function(){
            clearInterval(timer);
            goIndex();
        });
        item.on('mouseleave',function(){
            timer=setInterval(next,3000)
        });