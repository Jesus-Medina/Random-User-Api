let servidorApi = "https://randomuser.me/api/"

//Al cargar la ventana generamos nuestro template con la API
window.addEventListener("load", () => {
    getRandomId(servidorApi)
});


//FUNCIONES
async function getRandomId(servidorApi){
    try {
        const res = await fetch(servidorApi)
        const data = await res.json()
        createId(data)
    } catch (e) {
        manejoDeErrores(e)
    }
}

function createId(data){

    const persona = {
        img: data.results[0]["picture"]["large"],
        nombre: data.results[0]["name"]["first"],
        apellido: data.results[0]["name"]["last"],
        email: data.results[0]["email"],
        telefono: data.results[0]["phone"],
        ciudad: data.results[0]["location"]["city"]
    }

    const section = document.createElement("section")
    section.classList.add("container-flex")
    
    const div = document.createElement("div")
    div.classList.add("card-container")
    
    const img = document.createElement("img")
    img.src = persona.img 
    div.appendChild(img)
    
    const nombre = document.createElement("p")
    nombre.textContent = `Nombre: ${persona.nombre} ${persona.apellido}`
    div.appendChild(nombre)
    
    const email = document.createElement("p")
    email.textContent = `Email: ${persona.email}`
    div.appendChild(email)
    
    const telefono = document.createElement("p")
    telefono.textContent = `Telefono: ${persona.telefono}`
    div.appendChild(telefono)
    
    const ciudad = document.createElement("p")
    ciudad.textContent = `Ciudad: ${persona.ciudad}`
    div.appendChild(ciudad)
    
    section.appendChild(div)

    document.body.appendChild(section)
}

function manejoDeErrores(e) {
    alert(e.message)

    const section = document.createElement("section")
    section.classList.add("main-section")
    
    const error = document.createElement("p")
    error.classList.add("error-message")
    error.textContent = `${e.message}.. 😿`
    section.appendChild(error)
    document.body.appendChild(section)
}