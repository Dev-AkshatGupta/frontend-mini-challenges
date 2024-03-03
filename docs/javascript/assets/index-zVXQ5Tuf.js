import"./header-brsRexAR.js";import"./navbar-HjSlQtED.js";const l=document.getElementById("grid");class a{constructor(e,t=3){this.gridSize=t,this.root=e,this.grid=[],this.currentPlayer="X",this.winner=null,this.cellFilled=0,this.populateGrid(),this.addEventListeners()}populateGrid(){this.root.appendChild(this.createGrid());const e=this.root.children;for(let t=0;t<this.gridSize;t++)this.grid[t]=Array.from(e).slice(t*this.gridSize,t*this.gridSize+this.gridSize)}createGrid(){const e=document.createDocumentFragment();for(let t=0;t<this.gridSize;t++)for(let i=0;i<this.gridSize;i++){const n=document.createElement("button");n.classList.add("cell"),n.dataset.x=t,n.dataset.y=i,e.appendChild(n)}return e}addEventListeners(){this.root.addEventListener("click",e=>{e.target.classList.contains("cell")&&this.winner===null&&this.play(e.target)})}play(e){var t,i;if(e.textContent===""){if(this.set(e.dataset.x,e.dataset.y,this.currentPlayer),this.cellFilled+=1,this.checkWinner()){this.winner=this.currentPlayer,(t=this.winnerCallback)==null||t.call(this,this.winner);return}else if(this.cellFilled===this.gridSize*this.gridSize){this.winner="Draw",(i=this.winnerCallback)==null||i.call(this,this.winner);return}this.changePlayer()}}changePlayer(){this.currentPlayer=this.currentPlayer==="X"?"O":"X"}set(e,t,i){this.grid[e][t].textContent=i}checkWinner(){return this.isRowHasWinner(0)||this.isRowHasWinner(1)||this.isRowHasWinner(2)||this.isColHasWinner(0)||this.isColHasWinner(1)||this.isColHasWinner(2)||this.checkDiagonal()||this.checkDiagonalReverse()}isRowHasWinner(e){const t=this.grid[e][0].textContent;return this.grid[e].every(i=>i.textContent===t)?t:!1}isColHasWinner(e){const t=this.grid[0][e].textContent;return this.grid.map(i=>i[e]).every(i=>i.textContent===t)?t:!1}checkDiagonal(){const e=this.grid[0][0].textContent;for(let t=0;t<this.grid.length;t++)if(this.grid[t][t].textContent!==e)return!1;return e}checkDiagonalReverse(){const e=this.grid[0][2].textContent;for(let t=0;t<this.grid.length;t++)if(this.grid[t][this.grid.length-1-t].textContent!==e)return!1;return e}reset(){this.grid.forEach(e=>{e.forEach(t=>{t.textContent=""})}),this.currentPlayer="X",this.winner=null,this.cellFilled=0}}const s=new a(l);s.winnerCallback=r=>{switch(r){case"X":document.getElementById("winner").textContent="Player X won!";break;case"O":document.getElementById("winner").textContent="Player O won!";break;default:document.getElementById("winner").textContent="Draw!"}};document.getElementById("reset").addEventListener("click",()=>{s.reset(),document.getElementById("winner").textContent=""});
