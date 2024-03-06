function RubberTool(){
    this.icon = null
    this.name = "rubberTool"
    this.colour = 'white'

    this.size = 30

    this.draw = (colour) => {
        stroke(this.colour)
        fill(this.colour)
        rectMode(CENTER)
        if(mouseIsPressed){
            rect(mouseX, mouseY, this.size/2, this.size/2)
        }
        fill(colour)
        stroke(colour)
    }
}