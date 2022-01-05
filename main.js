import {update as updateAnt, draw as drawAnt, Ant} from './antClass.js'

const ANT_SPEED = 100000
const field = document.getElementById('field')
let iteration = 0 
let lastRenderTime = 0 

fillField(200)
let antArray = []

window.onclick = e => {
    const antx = parseInt(e.target.id.split(" ")[1])
    const anty = parseInt(e.target.id.split(" ")[3])
    if(isNaN(antx)||isNaN(anty)){
        return
    }
    const ant = new Ant({x: antx , y: anty }, "north")
    antArray.push(ant)    
} 

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1/ANT_SPEED) return 
    
    lastRenderTime = currentTime

    draw() 

    update()

    ++iteration

    //console.log (iteration)  
}

function update(){
    antArray.forEach(ant => updateAnt(field, ant));
}
    

function draw(){
    antArray.forEach(ant => drawAnt(field, ant));
}

function fillField(size){
    for (let x = 0; x <= size; x++) {    
        for (let y = 0; y <= size; y++) {
            const tile = document.createElement('div')
            tile.id = "".concat("x: ", x, " y: ", y)
            tile.style.gridRowStart = x 
            tile.style.gridColumnStart = y 
            field.appendChild(tile)
        }
    }
}


window.requestAnimationFrame(main)
