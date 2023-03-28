document.getElementById('boton').addEventListener('click', function() {
    console.log("Captura del evento click");
    document.body.style.backgroundColor = 'black';    
});

document.getElementById('boton_reset').addEventListener('click', function() {
    console.log("Captura del evento click");
    document.body.style.backgroundColor = '#0a192f';
});