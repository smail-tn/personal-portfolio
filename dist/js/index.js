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

  querySelectorAll(".nav-link").forEach(
    (el) =>
      (el.onclick = () => {
        collapse.removeAttribute("style");
        collapse.classList.remove("open");
      })
  );
  document.addEventListener("click", function (e) {
    if (
      e.target !== collapse &&
      e.target !== navToggler &&
      !navToggler.contains(e.target) &&
      !collapse.contains(e.target)
    ) {
      collapse.removeAttribute("style");
      collapse.classList.remove("open");
    }
  });
}
//

toggleNavbar();

window.addEventListener("scroll", function () {
  let header = querySelector(".home .header");
  if (this.scrollY > 20) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

function ActiveLinks() {
  let secs = querySelectorAll(".section");

  window.addEventListener("scroll", function (e) {
    secs.forEach((sec) => {
      let id = sec.id;
      let top = sec.offsetTop - 100;
      let scroll = window.scrollY;
      if (scroll > top && scroll < top + sec.clientHeight) {
        querySelectorAll(".header .nav-link").forEach((link) =>
          link.classList.remove("active")
        );
        querySelector(`.nav-link[href="#${id}"]`).classList.add("active");
      }
    });
  });
}

ActiveLinks();

function gallery() {
  let titles = querySelectorAll(".gallery .gallery-header li[data-type]");
  let boxs = querySelectorAll(".gallery .images .box");
  titles[0].previousElementSibling.onclick = function () {
    boxs.forEach((box) => (box.style.display = "block"));
    titles.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  };
  titles.forEach((title) => {
    title.addEventListener("click", function () {
      // remove add active class
      titles.forEach((title) => {
        title.classList.remove("active");
        titles[0].previousElementSibling.classList.remove("active");
      });
      this.classList.add("active");
      // show hide box

      let type = this.dataset.type;

      boxs.forEach((box, i) => {
        if (box.dataset.type !== type) {
          box.style.display = "none";
        } else {
          box.style.display = "block";
        }
      });
    });
  });
  //
  let prev = document.querySelector(".gallery .prev"),
    pageOverlay = document.querySelector(".page-overlay"),
    next = document.querySelector(".gallery .next"),
    preview = document.querySelector(".gallery-preview"),
    showAlt = preview.querySelector(".alt"),
    showNumber = preview.querySelector(".number"),
    showImage = preview.querySelector(".space img"),
    close = preview.querySelector(".close"),
    count = boxs.length,
    index = 0;

  showImage.onclick = () => next.click();

  boxs.forEach((box, i) => {
    close.onclick = () => {
      preview.classList.remove("show");
      pageOverlay.classList.remove("show");
    };
    box.addEventListener("click", function () {
      pageOverlay.classList.add("show");
      preview.classList.add("show");

      //
      change(i);
      index = i;
      prev.onclick = function () {
        if (index == 0) index = count - 1;
        else index--;
        change(index);
      };
      next.onclick = function () {
        if (index == count - 1) index = 0;
        else index++;
        change(index);
      };
    });
  });

  function change(index) {
    let src = boxs[index].querySelector("img").getAttribute("src");
    let alt = boxs[index].querySelector("img").getAttribute("alt");
    showImage.src = src;
    showAlt.textContent = alt;
    showNumber.textContent = `${index + 1}/${count}`;
  }
  preview.addEventListener("click", function (e) {
    if (e.target == preview) {
      close.click();
    }
  });
}

gallery();

