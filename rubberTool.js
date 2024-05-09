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
    
      if (mouseIsPressed) {
        this.size += (mouseY - pmouseY) * 0.1;
        this.size = constrain(this.size, 5, 100); 
        
        // Draw rectangle at current mouse position
        rect(mouseX, mouseY, this.size / 2, this.size / 2);
      }
    };  
  }
  