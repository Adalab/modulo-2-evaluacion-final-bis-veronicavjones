'use strict';

const save = document.querySelector("js-btnSaveData" );
const recover = document.querySelector(".js-btnRecoverData");
const list = document.querySelector(".js-listData");

let listData = [];

fetch("https://randomuser.me/api/?results=10")

   .then (response => response.json())
   .then (data => {
      console.log(data.results);
      listData = data.results;
       //renderList(listData[0]); 
   })


function renderList(results){
  //list.innerHTML = ''
  for( data of listData) {
    let html = `<li>
        <li class="nombre ${listData}"></li>
        <li class="ciudad ${listData}" ></li>
        <li class="foto ${listData}"></li>
        <li class="nombre de usuario ${listData}"></li>
    </li>`
    
  }
   results.innerHTML = html;
} 




