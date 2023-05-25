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

function iniciarMap(){
    var coord = {lat: -38.1521269,lng:-57.6683924 };
    var map = new google.maps.Map(document.getElementById('map1'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}

function iniciarMap2(){
    var coord = {lat: -35.4766929,lng:-61.783675 };
    var map = new google.maps.Map(document.getElementById('map2'),{
        zoom: 10,
        center: coord
    });

    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap3(){
    var coord = {lat: -34.5730161,lng:-59.7508621 };
    var map = new google.maps.Map(document.getElementById('map3'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap4(){
    var coord = {lat: -34.581675,lng:-58.4416715 };
    var map = new google.maps.Map(document.getElementById('map4'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap5(){
    var coord = {lat: -34.6181318,lng:-58.6313468 };
    var map = new google.maps.Map(document.getElementById('map5'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap6(){
    var coord = {lat: -34.4836853,lng:-58.6330827 };
    var map = new google.maps.Map(document.getElementById('map6'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap7(){
    var coord = {lat: -34.49844,lng:-58.7921333 };
    var map = new google.maps.Map(document.getElementById('map7'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap8(){
    var coord = {lat: -34.3830739,lng:-59.0564325 };
    var map = new google.maps.Map(document.getElementById('map8'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap9(){
    var coord = {lat: -34.3823413,lng:-59.0564354 };
    var map = new google.maps.Map(document.getElementById('map9'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap10(){
    var coord = {lat: -34.3814574,lng:-59.0564389 };
    var map = new google.maps.Map(document.getElementById('map10'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap11(){
    var coord = {lat: -34.3805734,lng:-59.0564424 };
    var map = new google.maps.Map(document.getElementById('map11'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap12(){
    var coord = {lat: -34.3796895,lng:-59.056446 };
    var map = new google.maps.Map(document.getElementById('map12'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap13(){
    var coord = {lat: -34.6352443,lng:-58.5591791 };
    var map = new google.maps.Map(document.getElementById('map13'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap14(){
    var coord = {lat: -34.595529,lng:-58.461566 };
    var map = new google.maps.Map(document.getElementById('map14'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap15(){
    var coord = {lat: -34.5955429,lng:-58.461566 };
    var map = new google.maps.Map(document.getElementById('map15'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
function iniciarMap16(){
    var coord = {lat: -34.5955567,lng:-58.4615659 };
    var map = new google.maps.Map(document.getElementById('map16'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}

//validacion

const nombre = document.getElementBy("name")
const ap = document.getElementBy("apellido")
const mail = document.getElementBy("mail")
const form = document.getElementBy("form")
const parrafo = document.getElementBy("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.nodeValue.lenght<3){
        warnings+= 'El nombre no es valido <br>'
        entrar=true
    }
    if(ap.nodeValue.lenght<3){
        warnings+= 'El apellido no es valido <br>'
        entrar=true
    }
    if(regexEmail.test(email.value)){
        warnings+= 'El mail no es valido <br>'
        entrar=true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})