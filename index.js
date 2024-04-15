const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click",flip));

var isFlip = false;
var firstCard;
var secoundCard;

function flip() {
  this.classList.add("flip");

  if (!isFlip) {
    isFlip = true;
    firstCard = this;
  }else{
    secoundCard = this;
    check();
  }
}

function check() {
  if(firstCard.dataset.image === secoundCard.dataset.image){
    success();
  }else{
    fail();
  }
}

function success() {
  firstCard.removeEventListener("click",flip);
  secoundCard.removeEventListener("click",flip);
  resete();
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secoundCard.classList.remove("flip");
    resete();
  }, 1000);

}

function resete() {
  isFlip = false;
  firstCard = null;
  secoundCard = null;
}

(function suffle() {
  cards.forEach((card) =>{
    var index = Math.floor(Math.random()*16);
    card.style.order = index;
  })
})();