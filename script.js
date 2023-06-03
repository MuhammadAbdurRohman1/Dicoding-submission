var nav = document.getElementById("nav");
var hamb = document.getElementById("hamburger") ;

// hamb.addEventListener("click", expand);
function expand() {
  nav.classList.toggle("open");
}
document.body.addEventListener("click", function (e) {
  if (nav.classList.contains("open")){
    if(e.target != nav && e.target != hamb){
        expand()
    }
  }
} , true
);
