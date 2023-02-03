const typed = new Typed(".animated-word", {
  strings: ["Latif Güngör", " a Web Developer", "from Turkey"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (x of tablinks) {
    x.classList.remove("active-link");
  }
  for (a of tabcontents) {
    a.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
