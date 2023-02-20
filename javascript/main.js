"strict"; const popUpEl = document.getElementById("pop_up"); const containerEl = 
document.getElementById("container"); window.onload=setTimeout(function() { 
popUpEl.style.display="flex";containerEl.style.display="none";setTimeout(function() { 
popUpEl.style.display="none";containerEl.style.display="block";},10000);},-500)

