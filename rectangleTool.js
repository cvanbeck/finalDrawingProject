function RectangleTool(){
    this.icon = null;
    this.name = "rectangleTool";

    this.startX = -1;
    this.startY = -1;
    this.drawing = false;

    this.draw = () => {
        rectMode(CORNER);
        if(mouseIsPressed){
            if(this.startX === -1){
                this.startX = mouseX;
                this.startY = mouseY;
                this.drawing = true;
                loadPixels();
            }
            else{
                noFill();
                updatePixels();
                rect(this.startX, this.startY, mouseX - this.startX, mouseY - this.startY);
            }
        }
        else if(this.drawing){
            this.drawing = false;
            this.startX = -1;
            this.startY = -1;
        }
    };
}