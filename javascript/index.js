var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var SelectValue = document.getElementById("SelectValue");
var ProgressBar = document.getElementById("ProgressBar");

SelectValue.innerHTML = slider.value;

slider.oninput = function(){
    SelectValue.innerHTML = this.value;
  selector.style.left = this.value + "%";
  ProgressBar.style.width = this.value + "%";
}

var mybutton = document.getElementById("scroll-btn");

window.onscroll = function(){
  scrollFunction()
};
function scrollFunction(){
  if(document.body.scroll > 100 || document.documentElement.scrollTop > 100 ){
    mybutton.style.display= "block";
  }
  else{
    mybutton.style.display= "none"; 
  }
}