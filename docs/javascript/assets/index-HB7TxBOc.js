var y=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var u=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)};var o=(s,e,t)=>(y(s,e,"access private method"),t);import"./modulepreload-polyfill-9p4a8sJU.js";import"./header-6i0Tlnxs.js";import"./ng-challenges-eXXXhy9i.js";import"./navbar-bVotuP4o.js";const h=document.querySelector(".time"),v=document.querySelectorAll(".duration-button"),b=document.querySelector("#breaklen"),q=document.querySelector("#sesslen"),S=document.querySelector("#minute"),k=document.querySelector("#second"),T=document.querySelector("#play"),E=document.querySelector("#reset"),g=document.querySelector(".timer-header"),I=document.querySelector("#beep"),m=document.querySelector("#playicon");var i,a;class x{constructor(){u(this,i);this.state="session",this.session={time:25,interval:[5,60]},this.break={time:5,interval:[2,20]},this.timeLeft=[25,0],this.isRunning=!1,this.startInterval=null}start(){this.isRunning=!0,this.startInterval=setInterval(()=>this.run(),1e3),m.classList.remove("fa-play"),m.classList.add("fa-pause")}pause(){clearInterval(this.startInterval),this.isRunning=!1,m.classList.remove("fa-pause"),m.classList.add("fa-play")}reset(){this.pause(),this.timeLeft=[25,0],this.break.time=5,this.session.time=25,this.state="session",this.render()}setTime(e){if(this.isRunning)return;const{currentTarget:{dataset:{target:t,direction:r}}}=e,c=r==="up"?1:-1,{time:d,interval:f}=this[t],l=d+c,[p,L]=f;l>L||l<p||(this[t].time=l,this.state==t&&(this.timeLeft[0]=l),this.render())}run(){const[e,t]=this.timeLeft;t===0?(this.timeLeft[1]=59,e===0?this.state==="session"?(this.state="break",this.timeLeft[0]=this.break.time-1):(this.state="session",this.timeLeft[0]=this.session.time-1):this.timeLeft[0]=e-1):this.timeLeft[1]=t-1,this.render()}render(){const[e,...t]=this.state;g.innerText=`${e.toUpperCase()}${t.join("")}`;const[r,c]=this.timeLeft;b.innerText=o(this,i,a).call(this,this.break.time),q.innerText=o(this,i,a).call(this,this.session.time),S.innerText=o(this,i,a).call(this,r),k.innerText=o(this,i,a).call(this,c),r===0?h.classList.add("last-minute"):h.classList.remove("last-minute"),r===0&&c===59&&I.play()}}i=new WeakSet,a=function(e){return e>9?e:`0${e}`};const n=new x;n.render();v.forEach(s=>{s.addEventListener("click",e=>n.setTime(e))});T.addEventListener("click",()=>{n.isRunning?n.pause():n.start()});E.addEventListener("click",()=>n.reset());