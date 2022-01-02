export const ANT_SPEED = 1000000 //number of resfreshes per second
export var POSITION = {x:100, y:100}
export var ORIENTATION = "north"

export function update(field, position, orientation){
    const coordinate = document.getElementById("".concat("x: ", position.x, " y: ", position.y))
    if(orientation == "north" && !coordinate.classList.contains('black')){                           //if its on white heading north
        POSITION.y = POSITION.y - 1
        ORIENTATION = "west" 
    }else if(orientation == "south" && !coordinate.classList.contains('black')){                    //if its on white heading south
        POSITION.y = POSITION.y + 1
        ORIENTATION = "east"
    }else if(orientation == "east" && !coordinate.classList.contains('black')){                     //if its on white heading east
        POSITION.x = POSITION.x -1 
        ORIENTATION = "north"
    }else if(orientation == "west" && !coordinate.classList.contains('black')){                     //if its on white heading west
        POSITION.x = POSITION.x + 1
        ORIENTATION = "south"
    }else if(orientation == "north" && coordinate.classList.contains('black')){                     //if its on black heading north
        POSITION.y = POSITION.y + 1
        ORIENTATION = "east"
    }else if(orientation == "south" && coordinate.classList.contains('black')){                     //if its on black heading south
        POSITION.y = POSITION.y - 1
        ORIENTATION = "west" 
    }else if(orientation == "east"&& coordinate.classList.contains('black')){                       //if its on black heading east
        POSITION.x = POSITION.x + 1
        ORIENTATION = "south"
    }else if(orientation == "west"&& coordinate.classList.contains('black')){                       //if its on black heading west
        POSITION.x = POSITION.x -1 
        ORIENTATION = "north"
    }
}

export function draw(field, position, iteration){
    const coordinate = document.getElementById("".concat("x: ", position.x, " y: ", position.y))
    if(coordinate.classList.contains('black')){
        coordinate.classList.remove('black') 
    }else{
        coordinate.classList.add('black')
    }
}