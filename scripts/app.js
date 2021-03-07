const content = document.querySelector('#content')
var sizeTable = 480
var sizeSpace = 60
var colRow = sizeTable/sizeSpace
var firstColor = 'black'
var secondColor = 'white'
var press = false
var posIx = 210
var posIy = 210

function setup(){

     var canvas = createCanvas(sizeTable, sizeTable)
     canvas.parent('content')
       
}

function draw(){
    
    tablero()
    hourse(posIx, posIy)

}

function tablero(x, y){

    for(let a = 0; a < colRow; a++){
        if (a%2 == 0){
            firstColor = 'white'
            secondColor = 'black'
        }else{
            firstColor = 'black'
            secondColor = 'white'
        }

        for(let b = 0; b < colRow; b++){

            if (b%2 == 0){
                fill(firstColor)
            }else{
                fill(secondColor)
            }

            let x = a * sizeSpace
            let y = b * sizeSpace

            rect( x, y, sizeSpace, sizeSpace)
        }
    }
}

function hourse( x, y){
    
    console.log()

    fill(255, 255, 0)
    if (mouseX >= (x - sizeSpace * 2 - 10) && mouseX <= (x - sizeSpace * 2 + 10) && mouseY >= (y - sizeSpace - 10) && mouseY <= (y - sizeSpace + 10)){
        if(press){
            posIx = x - sizeSpace * 2
            posIy = y - sizeSpace
        }
    }    
    circle(x - sizeSpace * 2, y - sizeSpace, 20)

    if (mouseX >= (x - sizeSpace * 2 - 10) && mouseX <= (x - sizeSpace * 2 + 10) && mouseY >= (y + sizeSpace - 10) && mouseY <= (y + sizeSpace + 10)){
        if(press){
            posIx = x - sizeSpace * 2
            posIy = y + sizeSpace
        }
    }
    circle(x - sizeSpace * 2, y + sizeSpace, 20)

    if (mouseX >= (x - sizeSpace - 10) && mouseX <= (x - sizeSpace + 10) && mouseY >= (y - sizeSpace * 2 - 10) && mouseY <= (y - sizeSpace * 2 + 10)){
        if(press){
            posIx = x - sizeSpace 
            posIy = y - sizeSpace * 2
        }
    }
    circle(x - sizeSpace, y - sizeSpace * 2 , 20)

    if (mouseX >= (x - sizeSpace - 10) && mouseX <= (x - sizeSpace + 10) && mouseY >= (y + sizeSpace * 2 - 10) && mouseY <= (y + sizeSpace * 2 + 10)){
        if(press){
            posIx = x - sizeSpace 
            posIy = y + sizeSpace * 2
        }
    }
    circle(x - sizeSpace, y + sizeSpace * 2 , 20)

    fill(255)
    circle(x,y, 20)

    fill(255, 255, 0)

    if (mouseX >= (x + sizeSpace * 2 - 10) && mouseX <= (x + sizeSpace * 2 + 10) && mouseY >= (y - sizeSpace - 10) && mouseY <= (y - sizeSpace + 10)){
        if(press){
            posIx = x + sizeSpace * 2 
            posIy = y - sizeSpace
        }
    }
    circle(x + sizeSpace * 2, y - sizeSpace, 20)

    if (mouseX >= (x + sizeSpace * 2 - 10) && mouseX <= (x + sizeSpace * 2 + 10) && mouseY >= (y + sizeSpace - 10) && mouseY <= (y + sizeSpace + 10)){
        if(press){
            posIx = x + sizeSpace * 2
            posIy = y + sizeSpace
        }
    }
    circle(x + sizeSpace * 2, y + sizeSpace, 20)

    if (mouseX >= (x + sizeSpace - 10) && mouseX <= (x + sizeSpace + 10) && mouseY >= (y - sizeSpace * 2 - 10) && mouseY <= (y - sizeSpace * 2 + 10)){
        if(press){
            posIx = x + sizeSpace 
            posIy = y - sizeSpace * 2
        }
    }
    circle(x + sizeSpace, y - sizeSpace * 2 , 20)

    if (mouseX >= (x + sizeSpace - 10) && mouseX <= (x + sizeSpace + 10) && mouseY >= (y + sizeSpace * 2 - 10) && mouseY <= (y + sizeSpace * 2 + 10)){
        if(press){
            posIx = x + sizeSpace 
            posIy = y + sizeSpace * 2
        }
    }
    circle(x + sizeSpace, y + sizeSpace * 2 , 20)
}

function mousePressed() {
    press = true
  }

function mouseReleased(){
    press = false
}




