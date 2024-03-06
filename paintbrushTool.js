function PaintbrushTool(){
    this.icon = null
    this.name = "paintbrushTool"
    
    this.size = 30
    this.draw = (colour) => {
        stroke(colour)
        fill(colour)
        rectMode(CENTER)
        if(mouseIsPressed){
            rect(mouseX, mouseY, this.size/2, this.size/2)
            
        }
    }
}