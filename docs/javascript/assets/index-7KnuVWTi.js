import"./header-brsRexAR.js";import"./navbar-HjSlQtED.js";function m(e,t=500){let o=null;return function(...u){o&&(clearTimeout(o),o=null),o=setTimeout(e,t,...u)}}const p=5,i=document.getElementById("userInput"),l=document.querySelector(".suggestions"),g=document.getElementById("loader"),E=document.getElementById("info");let s="",n=null,r=null;const L=m(v);function h(e){var t;(t=l.querySelector(".highlight"))==null||t.classList.remove("highlight"),l.childNodes[e].classList.add("highlight"),i.value=l.childNodes[e].textContent}function f(){var e;(e=l.querySelector(".highlight"))==null||e.classList.remove("highlight"),i.value=s,n=null}function a(){l.innerHTML="",n=null,i.value=s}async function y(e){r=new AbortController;try{const t=await fetch(`https://api.github.com/search/users?per_page=${p}&q=${e}`,{signal:r.signal});r=null;const o=await t.json();return c(!1),{text:e,result:o.items}}catch(t){return t.name!=="AbortError"&&d(),c(!1),{text:e,result:[]}}}async function v(){if(l.innerHTML="",n=null,s=i.value,s.length>0){const{text:e,result:t}=await y(s);if(i.value===e){t.length===0&&d("No results found");for(let o=0;o<t.length;o++){const u=document.createElement("li");u.textContent=t[o].login??"",l.appendChild(u)}}}}function c(e=!0){e?g.classList.add("loader"):g.classList.remove("loader")}function d(e="API Error occured"){E.textContent=e}i.addEventListener("input",()=>{r&&(r.abort(),r=null),i.value===""?c(!1):c(),l.innerHTML="",n=null,d(""),L()});i.addEventListener("keydown",e=>{if(e.key==="Enter"&&n!=null){s=l.childNodes[n].textContent,a();return}if(e.key==="ArrowDown"){if(n=n??-1,n+1>=l.childElementCount){f();return}h(++n)}if(e.key==="ArrowUp"){if(e.preventDefault(),n=n??l.childElementCount,n-1<0){f();return}h(--n)}});i.addEventListener("blur",()=>{setTimeout(a,100)});l.addEventListener("click",e=>{const t=e.target;t.tagName.toLowerCase()==="li"&&(s=t.textContent,a())});
