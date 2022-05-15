function mfunction(){
    var x=document.getElementById("section0")
    x.innerHTML=`
    <img id="imgg" onmouseover="grand()" onmouseout="petit()"  src="https://static.wixstatic.com/media/fb5049_5f8e26eb07394d5c8ba85b6ab2d7d674~mv2.png/v1/fill/w_1111,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Kia%20-%20Home%20NEW.png">
   
    `

}
function grand(){
   document.getElementById('imgg').style.width="87%"  
}
function petit(){
    document.getElementById("imgg").style.width="1111px"
}
/**    --------- */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
