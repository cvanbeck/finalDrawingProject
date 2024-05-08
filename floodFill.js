function FloodFillTool(){
    this.icon = 'assets/floodFill.jpg';
    this.name = "FloodFill";

    let alreadyClicked = false; 

    this.draw = (colour) => {
        // Ensures tool is only runs once when clicked.
        if (mouseIsPressed && !alreadyClicked && withinCanvas(mouseX, mouseY)) {
            cursor(WAIT);
            alreadyClicked = true; 
            const colours = {
                replacement : color(colour), 
                target : getColour(mouseX, mouseY)
            };
            loadPixels();
            // setTimeout because p5.cursor doesn't update until draw
            // loop completes
            setTimeout(() => {
                stackFill(mouseX, mouseY, colours);
                updatePixels();
                cursor(ARROW);
            }, 50);
        }
        // Stops tool activating more than once on click
        else if (!mouseIsPressed && alreadyClicked) {
            alreadyClicked = false;
        }
    };

    
        // stackFill runs iteratively by changing the colour of pixels
        // surrounding a seed if they meet the criteria then adding these 
        // pixels to the stack so their surroundings can also be checked.
    const stackFill = (x, y, colours) => {
        // Returns early if replacement colour is same as colour at xy
        if (equalColours(getColour(x, y), colours.replacement)) {
            return;
        }
        // Initialises the stack. First position is used as a seed and
        // doesn't get coloured on the first pass
        const stack = [{ x, y }];

        while (stack.length > 0) {
            // Stack based approach means each loop grabs last element
            const current = stack.pop();
            // Resets the loop early if pixel is outside canvas
            if (!withinCanvas(current.x, current.y)) {
                continue;
            }

            // Generate entries for 4 surrounding pixels
            for (let i = 0; i < 4; i++) {
                const neighbour = generateNeighbour(current, i);
                // If the neighbours' colour is the same colour as the 
                // one we are trying to replace, it gets replaced.
                if (equalColours(neighbour.colour, colours.target)) {
                    setColour(neighbour.location, colours.replacement);
                    // Neighbour pixel is added to stack to repeat process
                    stack.push(neighbour);
                }
            }
        }
    };
    
    const withinCanvas = (x, y) => {   
        return x >= 0 && x <= width && y >= 0 && y <= height;
    };
 
    const getColour = (x, y) => {
        return color(get(x, y));
    };
 
   const generateNeighbour = (current, position) => {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        const x = current.x + directions[position][0];
        const y = current.y + directions[position][1];
        const location = translateCoords(x, y);
        const colour = findPixelColour(location);

        const neighbour = {
            x: x,
            y: y,
            location : location,
            colour: colour
        };
        return neighbour;
    };

    /**
     * Translates 2d coordinates to be used in 1d array
     */
    const translateCoords = (x, y) => {
        return floor(x * 4) + floor(y * width * 4);
    };

    const findPixelColour = (pixelLocation) => {
        return color(pixels[pixelLocation],
                    pixels[pixelLocation + 1],
                    pixels[pixelLocation + 2]);
    };

    const setColour = (pixelLocation, colour) => {
        for (let i = 0; i < 4; i++){
            pixels[pixelLocation + i] = colour.levels[i];
        }
    };
    
    const equalColours = (colour1, colour2) => {
        // Objects are converted to string to check if they are equal
        return colour1.toString() == colour2.toString();
    };
}   
