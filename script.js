
// ------------On scroll

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});





















function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.remove("mystyle");
  element.classList.add("mystyle2");
  
    
  make_it_invisible("myDIV2"); 
  make_it_invisible("myDIV3"); 
  make_it_invisible("myDIV4"); 
  make_it_invisible("myDIV5"); 

  
};


function myFunction2() {
  var element = document.getElementById("myDIV2");
  element.classList.remove("mystyle");
  element.classList.add("mystyle2");
  var element = document.getElementById("myDIV");
  element.classList.remove("active");
  
  make_it_invisible("myDIV"); 
  make_it_invisible("myDIV3"); 
  make_it_invisible("myDIV4"); 
  make_it_invisible("myDIV5"); 
  
};



function myFunction3() {
  var element = document.getElementById("myDIV3");
  element.classList.remove("mystyle");
  element.classList.add("mystyle2");
  var element = document.getElementById("myDIV");
  element.classList.remove("active");
  
  
  make_it_invisible("myDIV"); 
  make_it_invisible("myDIV2"); 
  make_it_invisible("myDIV4"); 
  make_it_invisible("myDIV5"); 
  
}


function myFunction4() {
  var element = document.getElementById("myDIV4");
  element.classList.remove("mystyle");
  element.classList.add("mystyle2");
  var element = document.getElementById("myDIV");
  element.classList.remove("active");
  
  
  make_it_invisible("myDIV"); 
  make_it_invisible("myDIV2"); 
  make_it_invisible("myDIV3"); 
  make_it_invisible("myDIV5"); 
  
}


function myFunction5() {
  var element = document.getElementById("myDIV5");
  element.classList.remove("mystyle");
  element.classList.add("mystyle2");
  var element = document.getElementById("myDIV");
  element.classList.remove("active");
 
  
  make_it_invisible("myDIV"); 
  make_it_invisible("myDIV2"); 
  make_it_invisible("myDIV3"); 
  make_it_invisible("myDIV4"); 
  
}


function make_it_invisible(someDiv){
  var el = document.getElementById(someDiv);
  el.classList.remove("mystyle2");
  el.classList.add("mystyle");
  
  
};




// ------------------Show pictures------------------

// var btn = document.getElementsByClassName("btn");
// var gallery = document.getElementById("gallery");
// var images = new Array(
  
//   "../images/solar.png",
//   "../images/calendar.png",
//   "../images/harmony.png",
//   "../images/world.png",
  

// );

// for(let i=0; i<btn.length; i++) {
//   btn[i].onclick = function() {
//     gallery.src = images[i];
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active", "");
//     this.className += " active";
//   };
// };





// for (var i = 0; i < 100; i++) {
//   var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
//   $('body').append(star);
// };





const scrollElements2 = document.querySelectorAll(".js-scroll2");

const elementInView2 = (el, dividend = 1) => {
  const elementTop2 = el.getBoundingClientRect().top;

  return (
    elementTop2 <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView2 = (el) => {
  const elementTop2 = el.getBoundingClientRect().top;

  return (
    elementTop2 > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement2 = (element) => {
  element.classList.add("scrolled2");
};

const hideScrollElement2 = (element) => {
  element.classList.remove("scrolled2");
};

const handleScrollAnimation2 = () => {
  scrollElements2.forEach((el) => {
    if (elementInView2(el, 1.25)) {
      displayScrollElement2(el);
    } else if (elementOutofView2(el)) {
      hideScrollElement2(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation2();
}); 




