function LineToTool(){
	// Initialises data needed for line tool
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
		// First if statement is used when mouse is first clicked, loads current
		// pixels into pixels array, it also saves you're start X and Y as this 
		// is where your line will be drawn from
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
		// Draws line on screen, also updates pixels so that when mouse is held
		// you only see the line you are drawing. Once mouse is released you're
		// left with a line from your startX and Y to mouseX and Y

			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			// After mouse is released, resets everything to original state
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
