export function Ant(position, orientation){
    this.position = position
    this.orientation = orientation
}


export function update(field, ant){
    const coordinate = document.getElementById("".concat("x: ", ant.position.x, " y: ", ant.position.y))
    if(ant.orientation == "north" && !coordinate.classList.contains('black')){                           //if its on white heading north
        ant.position.y = ant.position.y - 1
        ant.orientation = "west" 
    }else if(ant.orientation == "south" && !coordinate.classList.contains('black')){                     //if its on white heading south
        ant.position.y = ant.position.y + 1
        ant.orientation = "east"
    }else if(ant.orientation == "east" && !coordinate.classList.contains('black')){                      //if its on white heading east
        ant.position.x = ant.position.x -1 
        ant.orientation = "north"
    }else if(ant.orientation == "west" && !coordinate.classList.contains('black')){                      //if its on white heading west
        ant.position.x = ant.position.x + 1
        ant.orientation = "south"
    }else if(ant.orientation == "north" && coordinate.classList.contains('black')){                      //if its on black heading north
        ant.position.y = ant.position.y + 1
        ant.orientation = "east"
    }else if(ant.orientation == "south" && coordinate.classList.contains('black')){                      //if its on black heading south
        ant.position.y = ant.position.y - 1
        ant.orientation = "west" 
    }else if(ant.orientation == "east"&& coordinate.classList.contains('black')){                        //if its on black heading east
        ant.position.x = ant.position.x + 1
        ant.orientation = "south"
    }else if(ant.orientation == "west"&& coordinate.classList.contains('black')){                       //if its on black heading west
        ant.position.x = ant.position.x -1 
        ant.orientation = "north"
    }
}


export function draw(field, ant){
        let coordinate = document.getElementById("".concat("x: ", ant.position.x.toString(), " y: ", ant.position.y.toString()))
        if(coordinate.classList.contains('black')){
            coordinate.classList.remove('black') 
        }else{
            coordinate.classList.add('black')
        }
    }
