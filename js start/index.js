// When the user scrolls the page, execute myFunction
window.onscroll = myFunction;

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// dropdown

const drop = document.querySelector(".dropdown")
const news = document.querySelector(".news")

drop.classList.remove("show")

function myDrop() {
    drop.classList.toggle("show");
}

news.onclick = myDrop;

function removeDrop() {
    drop.classList.remove("show");
}


// color

const pane = document.querySelector(".left");

pane.classList.remove("favorite");

function chCol() {
    pane.classList.toggle("favorite");
}

pane.onclick = chCol;

const mid = document.querySelector(".middle");

mid.classList.remove("favorite");

function midCh() {
    mid.classList.toggle("favorite");
}

mid.onclick = midCh;

const righ = document.querySelector(".right");

righ.classList.remove("favorite");

function righCh() {
    righ.classList.toggle("favorite");
}

righ.onclick = righCh;


// function myDrop() {
//     document.getElementById("news").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
// //   window.onclick = function(event) {
// //     if (!event.target.matches('.news')) {
// //       var dropdowns = document.getElementsByClassName("dropdown");
// //       var i;
// //       for (i = 0; i < dropdowns.length; i++) {
// //         var openDropdown = dropdowns[i];
// //         if (openDropdown.classList.contains('show')) {
// //           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }