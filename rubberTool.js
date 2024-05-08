function RubberTool() {
    this.icon = "assets/rubberTool.jpg";
    this.name = "rubberTool";
    this.colour = 'white';
    this.size = 30;
  
    this.draw = () => {
      // Set stroke and fill colour
      stroke(this.colour);
      fill(this.colour);
      
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
  