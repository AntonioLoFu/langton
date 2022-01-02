import {update as updateAnt, draw as drawAnt, ANT_SPEED, POSITION, ORIENTATION} from './ant.js'


let iteration = 0 
let lastRenderTime = 0 

const field = document.getElementById('field')

fillField()

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    //if (secondsSinceLastRender < 1/ANT_SPEED) return 
    
    lastRenderTime = currentTime

    draw() 

    update()

    iteration += 1 

    console.log (iteration)
}

window.requestAnimationFrame(main)

function update(){
    updateAnt(field, POSITION, ORIENTATION)
}

function draw(){
    drawAnt(field, POSITION, iteration)
}

function fillField(){
    for (let x = 0; x < 200; x++) {    
        for (let y = 0; y < 200; y++) {
            const tile = document.createElement('div')
            tile.id = "".concat("x: ", x, " y: ", y)
            tile.style.gridRowStart = x
            tile.style.gridColumnStart = y
            field.appendChild(tile)
        }
    }

}