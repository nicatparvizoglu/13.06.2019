let slider=document.getElementById("slider")
let next=document.getElementById("nextBtn")
let prev=document.getElementById("prevBtn")
let pos=0;

next.addEventListener("click",nextSlide)

function nextSlide(){
pos++;
let leftPos=-(1140*pos)+"px"
if(slider.querySelectorAll("#mainslide li").length>pos){
    slider.querySelector("#mainslide").style.left=leftPos;
}
else{
    pos=0;
    slider.querySelector("#mainslide").style.left=0;
}
}

prev.addEventListener("click",prevSlide)

function prevSlide(){
    pos--;
 if(pos==-1){
     pos=slider.querySelectorAll("#mainslide li").length-1;
     console.log(pos);
 }
   
     slider.querySelector("#mainslide").style.left=-(1140*pos)+"px"

}
