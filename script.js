// console.log("it's working bhavesh");
//variables

let img=document.querySelector('.images');
let btn1=document.querySelector('.prev-btn');
let btn2=document.querySelector('.next-btn');
let a=0;
let title=document.querySelector('.page-heading');

const images=[{
    src:"/image1.jpg",
} ,{
 src:"/image2.jpg",

},{
    src:"/image3.jpg",
},{
    src:"/image4.jpg",
} ]



btn1.addEventListener('click',function(){

prevImg();

})


btn2.addEventListener('click',function(){
    
 nextImg();

})


function nextImg(){
   a++;
    if(a>images.length-1){
    a=0;
    img.src=images[0].src;
    }else{
        img.src=images[a].src;
    }

    b=a+1;

    title.innerText="This is image " + b;

}


function prevImg(){

a--;
if(a<0){
a=images.length-1;
img.src=images[images.length-1].src;
}else{
    img.src=images[a].src;
}

b=a+1;

title.innerText="This is image " + b;

}

function prevAnimation(){

    btn1.classList.add("active");


setTimeout(function(){

    btn1.classList.remove("active");

  
    },250);

}


function nextAnimation(){

    btn2.classList.add("active");

setTimeout(function(){
   
      btn2.classList.remove("active");

    },250);

}



document.addEventListener("keydown",function(event){

    console.log(event.key);

    if(event.key=='ArrowLeft' || event.key=='a'){
        prevImg();
        prevAnimation();
    }else if(event.key=='ArrowRight' || event.key=='d'){
        nextImg();
        nextAnimation();
    }
})


 



    


