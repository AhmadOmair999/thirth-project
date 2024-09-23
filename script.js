let counter=0;
let img=document.querySelector('#image');
let imgSrc=['img/waterfalls10.jpg','img/waterfalls5.jpg','img/trees wallpapers (30) - Copy.jpg','img/trees wallpapers (22) - Copy - Copy.jpg','img/waterfalls2.jpg','img/waterfalls1.jpg','img/waterfalls6.jpg','img/waterfalls8.jpg'];

function next(){
    counter++;
    img.src=imgSrc[counter];
    if(counter>=imgSrc.length-1){
        counter=0;
    }
}
function prev(){
    if(counter<=0){
        counter=imgSrc.length-1;
    }
    img.src=imgSrc[counter];
    counter--;
}   