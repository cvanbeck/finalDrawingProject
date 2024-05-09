function PaintbrushTool() {
  this.icon = "assets/paintbrushTool.jpg";
  this.name = "paintbrushTool";
  this.size = 30;

  let self = this
  

  this.draw = (colour) => {
    // Set stroke and fill colour
    stroke(colour);
    fill(colour);
  
    // Set rectangle mode to centre
    rectMode(CENTER);
  
    // Adjust size based on how far down page the paintbrush is, gives the illusion
    // of a real paintbrush being moved around
    if (mouseIsPressed) {
      rect(mouseX, mouseY, this.size / 2, this.size / 2);
    }
  };
  
  this.populateOptions = function() {
		select(".options").html(
			"<button id='directionButton'>Medium</button>");
		//click handler
		select("#directionButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			if (self.size == 30) {
        console.log(self.size)
				self.size = 50;
				button.html('Large');
			} else if (self.size == 50) {
        console.log(this.size)
				self.size = 20;
				button.html('Small');
			}
      else {
        self.size = 30
        button.html('Medium')
      }
		});
	};
}





