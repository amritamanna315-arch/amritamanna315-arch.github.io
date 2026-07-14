// =========================
// Portfolio Script
// Amrita Manna
// =========================

// Highlight Active Navigation

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

if(link.href === window.location.href){

link.style.color="#ffffff";
link.style.fontWeight="600";

}

});

// Smooth Fade Animation

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// Feedback Form

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for your feedback!");

form.reset();

});

}// Hamburger Menu

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if(menuToggle && menu){

menuToggle.addEventListener("click",()=>{

menu.classList.toggle("active");

});

}
