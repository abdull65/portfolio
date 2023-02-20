
 const popUpEl = document.getElementById("pop_up"); const containerEl = document.getElementById("container"); window.onload=setTimeout(function() { 
popUpEl.style.display="flex";containerEl.style.display="none";setTimeout(function() { popUpEl.style.display="none";containerEl.style.display="block";},10000);},0)const bodyEl = 
document.querySelector("body"); const lightBgEl = document.querySelector(".feather-sun"); const darkBgEl = document.querySelector(".feather-moon"); const changeBgEl = 
document.querySelectorAll(".bg_dark"); const backToTopEl = document.querySelector(".back_to_top_btn"); const backToTopMsgEl = document.querySelector(".back_to_top_msg")
 
function darkBg() { bodyEl.style.backgroundColor="#2c3e50"; bodyEl.style.color="#eeeeee"; lightBgEl.style.fill="#eeeeee"; darkBgEl.style.fill="#2c3e50"; for(let i = 0; i < 
 changeBgEl.length; i++) { changeBgEl[i].style.boxShadow="none";
changeBgEl[i].style.backgroundColor="#314355"; changeBgEl[i].style.color="#eeeeee"
};
}
function lightBg() { bodyEl.style.backgroundColor="#eeeeee"; bodyEl.style.color="#2c3e50"; lightBgEl.style.fill="#eeeeee"; darkBgEl.style.fill="#2c3e50"; for(let i = 0; i < 
 changeBgEl.length; i++) {
changeBgEl[i].style.backgroundColor="#eeeeee"; changeBgEl[i].style.color="#2c3e50"; changeBgEl[i].style.boxShadow="1px 1px 5px rgba(0,0,0,.5)"
};
}
darkBgEl.addEventListener("click", darkBg); lightBgEl.addEventListener("click", lightBg);

function backToTop() {backToTopMsgEl.textContent = "Back to top!"}; function removeMsg() {backToTopMsgEl.style.display="none"}; backToTopEl.addEventListener("mouseover", backToTop); 
backToTopEl.addEventListener("click", removeMsg); backToTopEl.addEventListener("mouseleave", removeMsg);
