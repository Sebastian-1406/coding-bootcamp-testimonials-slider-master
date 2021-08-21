let nex = document.querySelector(".icon-next");
let prev = document.querySelector(".icon-prev");
let imagen = document.querySelector(".img");
const imagenes = {
    persona1 : "./images/image-tanya.jpg",
    persona2 : "./images/image-john.jpg",
}
const texto = {
    texto1 : '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about  starting up as a professional developer. ”',
    texto2 : "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    nombre : {
        nombre1 : 'John Tarkpor',
        nombre2 : 'Tanya Sinclair',
    },
    profesion : {
        profesion1 : 'Junior Front-end Developer',
        profesion2 : 'UX Engineer',
    }
}


nex.addEventListener("click", () => {
    imagen.src = `${imagenes.persona2}`;
    document.querySelector(".parrafo").textContent = `${texto.texto1}`;
    document.querySelector(".info-nombre").textContent = `${texto.nombre.nombre1}`;
    document.querySelector(".info-profesion").textContent = `${texto.profesion.profesion1}`;

});
prev.addEventListener("click", () => {
    imagen.src = `${imagenes.persona1}`;
    document.querySelector(".parrafo").textContent = `${texto.texto2}`;
    document.querySelector(".info-nombre").textContent = `${texto.nombre.nombre2}`;
    document.querySelector(".info-profesion").textContent = `${texto.profesion.profesion2}`;
});