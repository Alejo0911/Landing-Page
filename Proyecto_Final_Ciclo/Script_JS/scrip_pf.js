// Smooth scroll para navegación

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de aparición al hacer scroll

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
        }
    });
});

//Activación del menú desplegable en hover

$(document).ready(function () {
$('.dropdown').hover(
function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
},
function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
}
);
});

//Funcion para establecer una cookie

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

//Funcion para obtener una cookie

function getCookie(name) {
    const nameEQ = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return "";
}

//Guardar datos del formulario en cookies al enviar

document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Guardar en cookies por 7 días
    setCookie('nombre', nombre, 7);
    setCookie('email', email, 7);
    setCookie('mensaje', mensaje, 7);

    alert('Mensaje enviado y datos guardados en cookies!');
});

//Cargar los datos de cookies al cargar la pagina

window.onload = function() {
    const nombre = getCookie('nombre');
    const email = getCookie('email');
    const mensaje = getCookie('mensaje');

    if (nombre) {
        document.getElementById('nombre').value = nombre;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
    if (mensaje) {
        document.getElementById('mensaje').value = mensaje;
    }
};
