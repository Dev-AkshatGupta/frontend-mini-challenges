import"./header-brsRexAR.js";import"./navbar-HjSlQtED.js";function u(e,t){const n=document.createElement(e);for(let s in t)n.setAttribute(s,t[s]);return n}function L(e,t,n=0){const s=document.createDocumentFragment();for(let l=n;l<e+n;l++)s.appendChild(t(l));return s}const f=5,c=["😢","😞","😐","😀","😎"];let r=0,d=0,m=0;const a=document.getElementById("starContainer"),y=document.getElementById("smileyContainer");a.appendChild(L(f,e=>u("button",{class:"star star-empty","data-index":e}),1));const i=a.querySelectorAll(".star");a.addEventListener("mouseover",v);a.addEventListener("mouseleave",C);a.addEventListener("click",g);function o(e){for(let t=d;t<e;t++)i[t].classList.add("star-filled"),i[t].classList.remove("star-empty");for(let t=e;t<m;t++)i[t].classList.remove("star-filled"),i[t].classList.add("star-empty");d=e,m=e}function g(e){const t=e.target;t.classList.contains("star")&&(r=+t.dataset.index,o(r),E(r))}function v(e){const t=e.target;if(t.classList.contains("star")){const n=t.dataset.index;o(+n)}}function C(){o(+r)}function E(e){const t=Math.ceil(c.length*e/f)-1;y.textContent=c[t]}
