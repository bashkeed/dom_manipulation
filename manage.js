let btn = document.querySelector('#switchLight')
let img = document.querySelector('img')



btn.addEventListener('click', switchImg);

function switchImg(){
    if(img.getAttribute('src')==='off.png'){
        img.setAttribute('src','on.png')
    }else{
        img.setAttribute('src','off.png')
    }

}