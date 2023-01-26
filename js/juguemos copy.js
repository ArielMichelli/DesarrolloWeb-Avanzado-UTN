// JUEGO DE ARRASTRAR Y SOLTAR:

let imagenes = document.querySelectorAll('img');
let contenedores = document.querySelectorAll('.contenedor')

imagenes.forEach(img => {
  img.addEventListener('dragstart', inicioDeArrastre)
  img.addEventListener('dragenter',entrar)
})
contenedores.forEach(cont => {
  cont.addEventListener('dragover',dragOver)
  cont.addEventListener('drop',drop)
})
// imagenes.forEach(img => {
//   img.addEventListener('dragstart', () => {
//     console.log(`Inicio de arrastre de la ${img.name}`)
//   })
// })
let flag = false;
const contenedor1 = document.querySelectorAll('.contenedor')[0]
const img1 = document.querySelectorAll('img')[0]


contenedores.forEach(cont => {
  cont.addEventListener('dragover', () => {
    console.log('Me solto una piedra')
     
  })
  cont.addEventListener('drop',soltarElemento)
})


const inicioDeArrastre = (event) => {
  // let source = event.target.src
  // console.dir(event)
  // console.dir(event.target)
  // event.dataTransfer.setData("Text", source)
  console.log(event.target.getAttribute("id"))

  let img = document.getElementById(event.target.getAttribute("id"))
  console.log(img.src)
  event.dataTransfer.setData("Text", img.id)
  console.log(event.dataTransfer.getData("Text"))
}

const prevenirDefault = (event) => {
  event.preventDefault()
}

const soltarElemento = (event) => {

  // let infoObtenida = event.dataTransfer.getData("Text")
  // console.dir(infoObtenida)
  // if (flag == false) {
  //   console.log(infoObtenida)
  //   contenedor1.innerHTML = `<img src='${infoObtenida}' />`
  //   img1.classList.add("ocultar"  
  // console.log(event)
  let id = event.dataTransfer.getData('Text')
  let img = document.getElementById(id)
  let src = img.src
  console.log(id)
  console.log(src)
  img.classList.add("ocultar")
  // event.target.innerHTML = `<img src"${src}" />`

}



const reiniciar = () => {
  window.location.reload()
} 