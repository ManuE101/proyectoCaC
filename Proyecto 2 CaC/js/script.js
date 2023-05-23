window.onscroll = function(){
    var position = window.pageXOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_confetti");
    var elemento2 = document.getElementById("icon_bola");
     elemento1.style.bottom = position * 0.1 + "px";
     elemento2.style.top = position * 0.1 +"px";
}

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("mostrar_menu")
}

