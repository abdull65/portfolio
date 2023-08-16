const popUpEl = document.getElementById("pop_up");
const containerEl = document.getElementById("container");
const bodyEl = document.querySelector("body");
const btnEl = document.querySelectorAll(".btn");
const lightBgEl = document.querySelector(".feather-sun");
const darkBgEl = document.querySelector(".feather-moon");
const changeBgEl = document.querySelectorAll(".bg_dark");
const changeBorderEl = document.querySelector(".experience_section_content");
const backToTopEl = document.querySelector(".back_to_top_btn");
const backToTopMsgEl = document.querySelector(".back_to_top_msg");
const textAnimationEl = document.querySelector(".animation_text");

// console.log(btnEl);
window.onload = setTimeout(function () {
  popUpEl.style.display = "flex";
  containerEl.style.display = "none";
  setTimeout(function () {
    popUpEl.style.display = "none";
    containerEl.style.display = "block";
  }, 5000);
}, 0);
const careers = [
  "FRONTEND DEVELOPER",
  "WEBSITE DESIGNER",
  "WEBSITE DEVELOPER",
  "FREELANCER",
];
let careerIndex = 0;
let characterIndex = 0;
let updateText = function () {
  characterIndex++;
  textAnimationEl.innerHTML = `${careers[careerIndex].slice(
    0,
    characterIndex
  )}`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
};
updateText();
function darkBg() {
  // bodyEl.style.backgroundColor = "#2c3e50";
  bodyEl.classList.toggle("change_bgColor");
  containerEl.style.backgroundColor = "#2c3e50";
  bodyEl.style.color = "#eeeeee";
  lightBgEl.style.fill = "#eeeeee";
  darkBgEl.style.fill = "#2c3e50";
  changeBorderEl.classList.add("darkBg");
  changeBorderEl.style.borderColor = "#eeeeee";
  changeBorderEl.classList.remove("lightBg");
  for (let i = 0; i < changeBgEl.length; i++) {
    changeBgEl[i].style.boxShadow = "none";
    changeBgEl[i].style.backgroundColor = "#314355";
    changeBgEl[i].style.color = "#eeeeee";
    changeBgEl[i].style.boxShadow = "1px 1px 5px rgba(0,0,0,.5)";
  }
  for (let i = 0; i < btnEl.length; i++) {
    btnEl[i].style.backgroundColor = "#314355";
    btnEl[i].classList.add("btn");
  }
}

function lightBg() {
  bodyEl.style.backgroundColor = "#eeeeee";
  containerEl.style.backgroundColor = "#eeeeee";
  bodyEl.style.color = "#2c3e50";
  lightBgEl.style.fill = "#eeeeee";
  darkBgEl.style.fill = "#2c3e50";
  changeBorderEl.style.borderColor = "#2c3e50";
  changeBorderEl.classList.add("lightBg");
  changeBorderEl.classList.remove("darkBg");
  for (let i = 0; i < changeBgEl.length; i++) {
    changeBgEl[i].style.backgroundColor = "#eeeeee";
    changeBgEl[i].style.color = "#2c3e50";
    changeBgEl[i].style.boxShadow = "1px 1px 5px rgba(0,0,0,.5)";
  }
}

darkBgEl.addEventListener("click", darkBg);
lightBgEl.addEventListener("click", lightBg);

function backToTop() {
  backToTopMsgEl.innerHTML = "Back to top!";
  backToTopMsgEl.style.display = "block";
}

function removeMsg() {
  backToTopMsgEl.style.display = "none";
}
window.addEventListener("scroll", () => {
  backToTopEl.addEventListener("mouseover", backToTop);
  backToTopEl.addEventListener("click", removeMsg);
  backToTopEl.addEventListener("mouseleave", removeMsg);
  backToTopEl.style.display = "flex";
});
// update copyright year
const currentYearEl = document.querySelector(".copyRight_year");
function updateCopyRightYear() {
  const dateEl = new Date();
  const currentYear = dateEl.getFullYear();
  currentYearEl.innerHTML = currentYear;
}
updateCopyRightYear();
