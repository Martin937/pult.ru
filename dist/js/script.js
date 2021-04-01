"use strict";
window.addEventListener("DOMContentLoaded", function () {
  // slider
  const swiper1 = new Swiper(".swiper1", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  const swiper2 = new Swiper(".swiper2", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // tabs
  let tab = document.querySelectorAll(".menu__link"),
    info = document.querySelector(".tabs"),
    tabContent = document.querySelectorAll(".tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
      tab[i].style.color = "#1d9cd8";
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
      tab[b].style.color = "black";
    }
  }

  info.addEventListener("mouseover", function (event) {
    let target = event.target;
    if (target && target.classList.contains("tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
});
