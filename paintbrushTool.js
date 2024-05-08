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
  
    // Adjust size based on mouse wheel movement
    if (mouseIsPressed) {
      this.size += (mouseY - pmouseY) * 0.1; // Adjust the factor to control the sensitivity of resizing
      this.size = constrain(this.size, 5, 100); // Ensure the size stays within a reasonable range
      
      // Draw rectangle at current mouse position
      rect(mouseX, mouseY, this.size / 2, this.size / 2);
    }
  };  
}





