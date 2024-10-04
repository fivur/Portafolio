const d = document;
const w = window;
const contactForm = d.getElementById("contactForm");



contactForm.addEventListener("submit", (e) => {
    
    e.preventDefault(); /* Evitar el envío del formulario */

    
    //Se obtienen los valores de los campos del formulario//
    const nombre = d.getElementById("nombre").value.trim();
    const asunto = d.getElementById("asunto").value.trim();
    const email = d.getElementById("email").value.trim();
    const mensaje = d.getElementById("mensaje").value.trim();

    //Se hace uso de una expresión regular para validar el email//
    const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    //Por medio de 'if' se hace una validación para verificar que todos los campos estén completos.//
    if(!nombre || !asunto || !email || !mensaje) {
    
        alert("Todos los campos son obligatorios");
        return;
    }

    //Validar el formato de email
    if(!regexEmail.test(email)) {

        alert("Por favor, introduce un email valido");
        return;
    }
    

    //Envío del formulario si todo está en orden//
    alert("Formulario enviado exitosamente.");
  
});
