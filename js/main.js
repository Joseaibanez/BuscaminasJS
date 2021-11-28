"use strict"
class Tablero {
  minasEnTablero
  listaCasillas = []
  constructor(size, minasTotales) {
    this.size = size
    this.minasTotales = minasTotales
  }
  get getSize() {
    return this.size
  }
  get getListaCasillas() {
    return this.listaCasillas
  }
  addToList(casilla) {
    this.listaCasillas.push(casilla)
  }
  colocarMinas() {
    this.minasEnTablero = 0
    while(this.minasEnTablero < this.minasTotales) {
      let rand = Math.floor(Math.random() * this.listaCasillas.length)
      if (!this.listaCasillas[rand].hasBomb()) {
        this.listaCasillas[rand].bomb = true
        this.minasEnTablero++
      }
    }
  }
}
class Casilla {
  element;
  id;
  bomb;
  div;
  constructor(element, div) {
    this.element = element
    this.bomb = false
    element.setAttribute('id','casilla')
    //element.addEventListener("click",function () {clickCasilla(element, bomb)})
    element.appendChild(div)
  }
  get getElement() {
    return this.element
  }
  hasBomb() {
    return this.bomb
  }
}
function clickCasilla(element, mine) {
  if(mine) {
    element.style.backgroundColor = "red";
    element.innerText = "💣"
  }else {
    element.style.backgroundColor = "green";
  }
}
function generarCasillas() {
  //
  let size = document.getElementById("inputSize")
  let mines = document.getElementById("nminas")
  let numSize = size.value
  let numMinas = mines.value
  //
  if(numSize === null) {
    window.alert("Por favor, introduzca un tamaño")
  }else {
    const juego = new Tablero(numSize,numMinas)
    let tablero = document.getElementById("tablero")// El div tablero
    for(let i=0;i<juego.getSize;i++) {
      for(let j=0;j<juego.getSize;j++) {
        let div = document.createElement("div")
        div.setAttribute("id","divCasilla")
        let casilla = new Casilla(document.createElement("div"), div)
        casilla.getElement.addEventListener("click",function () {clickCasilla(casilla.getElement, casilla.hasBomb())})
        juego.addToList(casilla)
        tablero.appendChild(casilla.getElement)
      }
    }
  juego.colocarMinas()
  }
}
