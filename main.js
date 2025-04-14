// Header
let header = document.querySelector("header");
window.onscroll = () => {
  if (window.scrollY >= 48) {
    header.classList.add("fixed");
  } else if (window.scrollY == 0) {
    header.classList.remove("fixed");
  }
}
// BtnHover
let link = document.querySelectorAll(".schedule");
link.forEach(btn => {
  btn.onmouseleave = function () {
    let icon = btn.firstElementChild;
    icon.style.cssText = "color : var(--mainColor) !important";
    setTimeout(() => {
      icon.style.cssText = "color : var(--whiteColor) !important";
    }, 100);
  };
})


// IconMenu
let IconsMenu = document.querySelector(".iconMenu");
let hideBar = document.querySelector(".hideBar");
let topBar = document.querySelector(".topHide");
let botBar = document.querySelector(".hideBar + span");
let hLst = document.querySelector("header ul");
let main = document.querySelector("header + .blur");
let section = document.querySelectorAll("section");
let flag = false;
console.log(hLst)
function beX() {
  if (flag == false) {
      hideBar.className = "hide";
      topBar.classList.add("topBar");
      botBar.classList.add("bottomBar");
      hLst.id = "ul-sm";
      // main.style.filter = "blur(1px)";
      section.forEach((sec) => {
        sec.style.filter = "blur(1px)";
      });
      flag = true;
      } else {
        // main.style.filter = "blur(0px)"
        section.forEach((sec) => {
        sec.style.filter = "blur(0px)"
        });
        hideBar.className = "d-block";
        topBar.classList.replace("topBar", "topHide");
        botBar.classList.replace("bottomBar", "botHide");
        hLst.id = "";
        flag = false;
  }
}
IconsMenu.addEventListener("click", beX);
console.log(document.location.pathname)
if (document.location.pathname === "/index.html") {
  // Home Image Slider
  let leftBtn = document.querySelector(".home #left");
  let rightBtn = document.querySelector(".home #right");
  let images = document.querySelectorAll(".home img");

  let counter = 0;
  function rightMove(e) {
    e.preventDefault();
    counter = (counter + 1) % images.length;
    images.forEach((img) => {
      if (images[counter] == img) {
        img.className = "actived-right";
        // counter = 2 => counter = -1 to make image before it
        //  go to left to go right when i click btn
        if ((counter + 1) == 3) { 
          counter = -1;
          images[counter + 1].className = "right";
        } else {
          images[counter + 1].className = "right";
        }
      } else {
        if (img != images[counter + 1]) {
          img.className = "left";
        }
      }
    })
  }
  rightBtn.addEventListener("click", rightMove);
  // Left
  function leftMove(e) {
    e.preventDefault();
    counter = (counter - 1 + images.length) % images.length;
    console.log(counter);
    images.forEach((img) => {
      if (images[counter] == img) {
        img.className = "actived-left";
        // counter = 0 => counter = 2 to make image before it
        //  go to right to go left when i click btn
        if ((counter - 1) == -1) {
          counter = 3;
          images[counter - 1].className = "left";
        } else {
          images[counter - 1].className = "left";
        }
      } else {
        if (img != images[counter - 1]) {
          img.className = "right";
        }
      }
    })
  }
  leftBtn.addEventListener("click", leftMove);
  // Feature
  let fLink = document.querySelectorAll(".txt-box button");
  let nonBrdr = document.querySelector(".non-brdr");
  nonBrdr.style.borderBottom = "none";
  let p = document.querySelectorAll("#false");
  function visible(e) {
  p.forEach(par => {
    if (e.target.nextElementSibling !== par) {
      par.id = "false";
    }
  });
  fLink.forEach(btn => {
    if (e.target !== btn) {
      btn.style.color = "#000";
    }
    if (e.target === nonBrdr) {
      nonBrdr.style.borderBottom = "1px solid #eaeaea";
    } else {
      nonBrdr.style.borderBottom = "none";
    }
  });
  let par = e.target.nextElementSibling;
  if (par.id === "false") {
    par.id = "true";
    e.target.style.color = "var(--mainColor)";
  } else if(par.id === "true") {
    par.id = "false";
    e.target.style.color = "#000";
  }
}
fLink.forEach(e => {
  e.addEventListener("click", visible);
});

// Deal
let deals = document.querySelectorAll(".deal .row > .row");
let btns = document.querySelectorAll(".deal .buttons a");
function dealActive(e) {
  e.preventDefault();
  e.target.classList.add("active");
  btns.forEach((btn) => {
    if (e.target != btn) {
      btn.classList.remove("active");
    }
  })
  console.log(deals);
  deals.forEach((deal) => {
    deal.classList.remove("deal-show");
    if (e.target.id == deal.id) {
      setTimeout(() => {
        deal.classList.add("deal-show");
      }, 500)
    }
  });
}
btns.forEach((btn) => {
  btn.addEventListener("click", dealActive);
});
}

// PropertiesPage
if (document.location.pathname === "/properties.html") {
  let btns = document.querySelectorAll(".properties .buttons a");
  let property = document.querySelectorAll(".properties .col-lg-4");
  function dealActive(e) {
    e.preventDefault();
    e.target.classList.add("active");
    btns.forEach((btn) => {
      if (e.target != btn) {
        btn.classList.remove("active");
      }
    })

    property.forEach((pro) => {

      pro.style.position = "relative";
      if (e.target.id === "show" || e.target.id == pro.dataset.type) {
        pro.classList.remove("disapper");
        pro.classList.add("apper");
      } else {
        pro.classList.remove("apper");
        pro.classList.add("disapper");
        setTimeout(() => {
          pro.style.position = "absolute";
        }, 250)
      }
    })

  }

  btns.forEach((btn) => {
    btn.addEventListener("click", dealActive);
  });
}