/**
 * Created by Administrator on 2018/10/13.
 */
var searchText=document.getElementsByClassName('search-text')[0];
var searchHotWords=document.getElementsByClassName('search-hot-words');
var searchMenu=document.getElementsByClassName('search-menu')[0];
var headerNavMenu=document.getElementsByClassName('header-nav-menu')[0];
var navList=document.getElementsByClassName('nav-list');

searchText.onfocus=function(){
    searchHotWords[0].style.display='none';
    searchHotWords[1].style.display='none';
    searchMenu.style.display='block';
};
searchText.onblur=function(){
    searchHotWords[0].style.display='inline-block';
    searchHotWords[1].style.display='inline-block';
    searchMenu.style.display='none';
};

for(var i=0;i<navList.length-2;i++){
    headerNavMenu.onmouseover=navList[i].onmouseover=function(){
        headerNavMenu.style.display='block';
    };
    headerNavMenu.onmouseout=navList[i].onmouseout=function(){
        headerNavMenu.style.display='none';
    }
}