import"./header-brsRexAR.js";import"./navbar-HjSlQtED.js";const l=document.getElementById("dark-mode-toggle"),r=document.getElementById("add-button"),d=document.getElementById("workouts"),s=document.getElementById("workout"),c=document.getElementById("duration"),a=document.getElementById("error-message");l.addEventListener("click",m);r.addEventListener("click",u);function m(){const t=document.body,o=document.querySelector(".container"),e=document.querySelector("h1");t.classList.contains("dark-mode")?(t.classList.remove("dark-mode"),o.classList.remove("dark-mode"),e.classList.remove("dark-mode")):(t.classList.add("dark-mode"),o.classList.add("dark-mode"),e.classList.add("dark-mode"))}function u(){const t=s.value,o=c.value;if(t&&o){a.textContent="";const e=document.createElement("li");e.textContent=`${t} - ${o} minutes`;const n=document.createElement("button");n.textContent="Delete",n.className="delete-button",n.addEventListener("click",function(){d.removeChild(e)}),e.appendChild(n),d.appendChild(e),s.value="",c.value=""}else a.textContent="Please fill in both fields."}
