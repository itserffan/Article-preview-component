"use strict";

const shareBtn = document.querySelectorAll(".share-btn-icon");
const bubble = document.querySelector(".bubble");
const author = document.querySelector(".author");
const width = window.innerWidth;
const shareMobileSize = document.querySelector(".share-mobile-width");

for (let i = 0; i < shareBtn.length; i++) {
  shareBtn[i].addEventListener("click", function () {
    if (width > 670) {
      bubble.classList.toggle("hidden");
    } else {
      author.classList.toggle("display-none");
      shareMobileSize.classList.toggle("display-none");
    }
  });
}
