String.prototype.upper = function () {
  return this.toUpperCase();
};
String.prototype.lower = function () {
  return this.toLowerCase();
};

let Body = document.body,
  floor = (e) => Math.floor(e),
  round = (e) => Math.round(e),
  ceil = (e) => Math.ceil(e),
  trunc = (e) => Math.trunc(e),
  random = () => Math.random(),
  createElement = (e) => document.createElement(e),
  createTextNode = (e) => document.createTextNode(e),
  querySelector = (e) => document.querySelector(e),
  querySelectorAll = (e) => document.querySelectorAll(e);
//-----------------------

function toggleNavbar() {
  let collapse = querySelector(".header .nav-collapse");
  let navToggler = querySelector(".header .nav-toggler");

  navToggler.addEventListener("click", function () {
    if (!collapse.classList.contains("open")) {
      collapse.style.maxHeight = collapse.scrollHeight + "px";
      collapse.classList.add("open");
    } else {
      collapse.removeAttribute("style");
      collapse.classList.remove("open");
    }
  });
}

toggleNavbar();

window.addEventListener("scroll", function () {
  let header = querySelector(".home .header")
  if (this.scrollY > 20) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
   
  }
});
