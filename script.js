let title=document.getElementById("title");
let content=document.getElementById("content");
let btn=document.getElementById("btn");
let list=document.getElementById("list");
btn.addEventListener("click",new);
function new(){
  list.innerHTNL=list.innerHTML + `
  <div class="new">
  <h2>${title.value}</h2>
  <p>${conten.value}</p><hr>
  </div>
  `;
}