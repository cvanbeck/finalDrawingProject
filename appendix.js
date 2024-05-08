/**
 * Here is some functions that didn't get used in the end but are saved
 * here for posterity. Probably aren't going to work without other data
 */

// Recursive fill, unused because browser stack limit gets reached
// too quickly on larger spaces.
const fill = (x, y, newColour) => {
    let pixelX = floor(x * 4)
    let pixelY = floor(y * width * 4)
    let pixelLocation = pixelX + pixelY
    let clickedColour = color(pixels[pixelLocation],
        pixels[pixelLocation + 1],
        pixels[pixelLocation + 2])

    if (clickedColour.toString() != oldColour.toString()) {
        return
    }
    else {
        // Colour at mouseX and Y are converted to string to compare 
        // see if they are the same
        for (let i = 0; i < 4; i++) {
            pixels[pixelLocation + i] = newColour.levels[i]
        }
        this.fill(x - 1, y, newColour)
        this.fill(x + 1, y, newColour)
        this.fill(x, y - 1, newColour)
        this.fill(x, y + 1, newColour)

    }
}