window.addEventListener('scroll', function(){
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle("active" , window.scrollY > 500)
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var SelectValue = document.getElementById("SelectValue");

SelectValue.innerHTML = slider.value;

slider.oninput = function(){
    SelectValue.innerHTML = this.value;
  selector.style.left = this.value + "%";
}