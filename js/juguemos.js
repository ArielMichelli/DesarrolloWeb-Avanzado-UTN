// JUEGO DE ARRASTRAR Y SOLTAR:

// let imagenes = document.querySelectorAll('img');
// imagenes.forEach(img => {
//   img.addEventListener('dragend', () => {
//     console.log(`Se solto la imagen: ${img.name}`)
//   })
// })
// imagenes.forEach(img => {
//   img.addEventListener('dragstart', () => {
//     console.log(`Inicio de arrastre de la ${img.name}`)
//   })
// })
let flag = false;
const contenedor1 = document.querySelectorAll('.contenedor')[0]
const img1 = document.querySelectorAll('img')[0]


const inicioDeArrastre = (event) => {
  let source = event.target.src
  console.dir(event)
  console.dir(event.target)
  event.dataTransfer.setData("Text", source)
}

// const prevenirDefault = (event) => {
//   event.preventDefault()
// }

const soltarElemento = (event) => {
  event.preventDefault
  let infoObtenida = event.dataTransfer.getData("Text")
  console.dir(infoObtenida)
  if (flag == false) {
    console.log(infoObtenida)
    contenedor1.innerHTML = `<img src='${infoObtenida}' />`
    // img1.classList.add("ocultar")
    
    
  }

}

const reiniciar = () => {
  window.location.reload()
} 