// JUEGO DE ARRASTRAR Y SOLTAR:

let imagenes = document.querySelectorAll('.img');
let contenedores = document.querySelectorAll('.contenedor')

Eventos()

function Eventos() {
  imagenes.forEach(img => {
    img.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', e.target.id)
      console.log(e.target.id)

    })

  })
  contenedores.forEach(cont => {
    cont.addEventListener('dragover', e => {
      e.preventDefault()
    })
    cont.addEventListener('drop', e => {

      const elemento = e.dataTransfer.getData('text')
      let img = document.querySelectorAll('.img')[elemento]
      e.target.innerHTML = `<img src='${img.src}' />`
      img.classList.add("ocultar")
    })
  })
}

const reiniciar = () => {
  window.location.reload()
}