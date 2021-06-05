// apiwheaterscript.js
$(document).ready(function() {
        $('.boton').on('click',function(){
            $('form').empty();
            let id = $("#ciudad").val();
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=`+id+`&&appid=1ab28ffbb63e87e55441ffb36551223e`,function(value){
            $('form').append(`<br><tr><br>`);
            $('form').append(`<table border="1"><tr><td> Ciudad : `+id+` </td><td> 
            Descripción : ${value.weather[0].description}</td></tr></table>`);
            $('form').append(`<table border="1"><tr><td> País: ${value.sys.country}</td></tr></table>`);
            $('form').append(`<table border="1"><tr><td> Temperatura en Grados Farenheit: ${value.main.temp}</td></tr></table>`);
            $('form').append(`<table border="1"><tr><td> Coordenadas : Longitud: ${value.coord.lon}, Latitud: ${value.coord.lat}</td></tr></table>`);
        },"json")
        return false;
    });
});




