var oHd=document.getElementById('hd');
var oBox=document.getElementById('box');
var oDiv=oHd.getElementsByTagName('div');
var i= 0,time;
oBox.onclick=function(){
    clearInterval(time);
    oBox.style.opacity = 0;
    time=setInterval(function(){
        i++;
        for (var j=0;j<oDiv.length;j++) {
            oDiv[j].style.backgroundColor = 'yellow';
        }
        f=parseInt(Math.random() * j);
        oDiv[f].style.backgroundColor = 'red';
        if (i == 50) {
            clearInterval(time);
            i = 0;
            oBox.style.left=oDiv[f].offsetLeft+'px';
            oBox.style.top=oDiv[f].offsetTop+'px';
            oBox.style.opacity = 0;
            time=setInterval(function(){
                alert('恭喜'+oDiv[f].innerHTML);
                clearInterval(time);
            },500)
        }
    },100)
}