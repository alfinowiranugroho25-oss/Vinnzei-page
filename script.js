const modal = document.getElementById("projectModal");

const open = document.getElementById("openProject");

const close = document.querySelector(".close");

open.onclick = () => {

    modal.style.display = "flex";

}

close.onclick = () => {

    modal.style.display = "none";

}

window.onclick = (e)=>{

    if(e.target == modal){

        modal.style.display = "none";

    }

}

const detailBtn = document.querySelector(".detail-btn");

const modal = document.getElementById("detailModal");

const close = document.querySelector(".close");

detailBtn.onclick = function(){

    modal.style.display="flex";

}

close.onclick=function(){

    modal.style.display="none";

}

window.onclick=function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

}