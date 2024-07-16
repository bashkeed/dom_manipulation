var btn = document.querySelector('.but');
var btn1 = document.querySelector('.but1');
var img = document.querySelector('img')


btn.addEventListener('click', switchIt);
btn1.addEventListener('click',switchIt1)

function switchIt(){

img.setAttribute("src",'on.png')

}

function switchIt1(){

img.setAttribute("src",'off.png')

}