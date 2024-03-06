function FloodFillTool() {
    this.icon = null;
    this.name = "FloodFill";

    this.oldColour = null
    this.clicked = false


    this.draw = () => {
        // Floodfill can only be used on click, not mouse drag. Also checks that mouse is on screen when clicked
        canvasContainer.mouseClicked(() => {
            this.clicked = true
            this.oldColour = this.getOldColour()
            this.fill(mouseX, mouseY, color('black'))

        })
        // Resets this.clicked when mouse button is released.
        if(!mouseIsPressed && this.clicked) {
            this.clicked = false
        }

    }

    this.getOldColour = () => {
        return color(get(mouseX, mouseY))
    }

    this.fill = (x, y, newColour) => {
        newColour = color(0)
        // Colour at mouseX and Y are converted to string to compare see if
        // they are the same
        if (color(get(x, y)).toString() == this.oldColour.toString()) {
            loadPixels()
            set(x, y, newColour)
            updatePixels()
            this.fill(x - 1, y, newColour)
            this.fill(x + 1, y, newColour)
            this.fill(x, y - 1, newColour)
            this.fill(x, y + 1, newColour)


        }
        else {
            return
        }
    }
}   