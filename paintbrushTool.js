function PaintbrushTool() {
  this.icon = "assets/paintbrushTool.jpg";
  this.name = "paintbrushTool";
  this.size = 30;

  this.draw = (colour) => {
    // Set stroke and fill colour
    stroke(colour);
    fill(colour);
    
    // Set rectangle mode to centre
    rectMode(CENTER);
  
    // Adjust size based on how far down page the paintbrush is, gives the illusion
    // of a real paintbrush being moved around
    if (mouseIsPressed) {
      this.size += (mouseY - pmouseY) * 0.1; 
      this.size = constrain(this.size, 5, 100); // Ensure the size stays within a reasonable range
      
      // Draw rectangle at current mouse position
      rect(mouseX, mouseY, this.size / 2, this.size / 2);
    }
  };  
}





