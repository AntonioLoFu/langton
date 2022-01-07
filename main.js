import {update as updateAnt, draw as drawAnt, Ant} from './antClass.js'

const field = document.getElementById('field')
let iteration = 0 
let PAUSE = false
let DRAWCELLS = false
let DELAY = 100
document.getElementById("buttonPause").addEventListener("click", pauseAnt, false)
document.getElementById("buttonFillCells").addEventListener("click", changeBehaviourClick, false)
document.getElementById("buttonMoreSpeed").addEventListener("click", addSpeed, false)
document.getElementById("buttonLessSpeed").addEventListener("click", subSpeed, false)
fillField(200)
let antArray = []

window.onclick = e => {
    if(!DRAWCELLS){
        addAnt(e)
    }else{
        changeCellColor(e)
    }
} 

function addSpeed(){
    if(DELAY <= 4) return
    DELAY = DELAY - 100
}

function subSpeed(){
    DELAY = DELAY + 100
}

function changeCellColor(e){
    const x = parseInt(e.target.id.split(" ")[1])
    const y = parseInt(e.target.id.split(" ")[3])
    if(isNaN(x)||isNaN(y)){
        return
    }
    let coordinate = document.getElementById("".concat("x: ", x.toString(), " y: ",y.toString()))
    if(coordinate.classList.contains('black')){
        coordinate.classList.remove('black')
    }else{
        coordinate.classList.add('black')
    }

}
function addAnt(e){
    const antx = parseInt(e.target.id.split(" ")[1])
    const anty = parseInt(e.target.id.split(" ")[3])
    if(isNaN(antx)||isNaN(anty)){
        return
    }
    const ant = new Ant({x: antx , y: anty }, "north")
    let coordinate = document.getElementById("".concat("x: ", ant.position.x.toString(), " y: ", ant.position.y.toString()))
    coordinate.classList.add('red')
    antArray.push(ant)
}



function main(){
        if(!PAUSE){
            draw() 
            update()
        }
        console.log(DELAY)
        let timer = setTimeout(main, DELAY)
    
}    

main()


    //console.log (iteration)  

function update(){
    antArray.forEach(ant => updateAnt(field, ant));
}

function pauseAnt(){
    PAUSE = !PAUSE
    let boton = document.getElementById("buttonPause")
    if(PAUSE){
        
        boton.firstChild.data = "Reanudar"
    }else{
        boton.firstChild.data = "Pausar"

    }
}

function changeBehaviourClick(){
    DRAWCELLS = !DRAWCELLS
    let boton = document.getElementById("buttonFillCells")
    if(!DRAWCELLS){
        boton.firstChild.data = "Pintar Celdas"
    }else{
        boton.firstChild.data = "Añadir hormigas"
    }
}
    

function draw(){
    antArray.forEach(ant => drawAnt(field, ant));
}



function fillField(size){
    
    for (let x = 0; x <= size; x++) {    
        for (let y = 0; y <= size; y++) {
            const tile = document.createElement('div')
            tile.id = "".concat("x: ", x, " y: ", y)
            tile.className = "dontDisplayGrid"
            tile.style.gridRowStart = x 
            tile.style.gridColumnStart = y 
            field.appendChild(tile)
        }
    }
}



