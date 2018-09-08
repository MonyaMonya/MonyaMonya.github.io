function setAnimatedCanvas(canvasName, image, frameWidth, frameHeight, frameCount, frameInterval, color) {
  var canvas = document.querySelector(canvasName);
  var context = canvas.getContext("2d");

  var myImage = new Image();
  myImage.addEventListener("load", loadImage, false);
  myImage.src = image;

  myImage.goalColor = color;
  myImage.fillStyle = color;

  function loadImage(e) {
    animate();
  }

  var shift = 0;
  var currentFrame = 0;

  function animate() {
  
    /// this composite mode clears the canvas as well
    ctx.globalCompositeOperation = 'copy';

    //draw each frame + place them in the middle
    context.drawImage(myImage, shift, 0, frameWidth, frameHeight,
                      0, 0, frameWidth, frameHeight);

    /// this mode fills in whatever, in the image
    ctx.globalCompositeOperation = 'source-in';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    shift += frameWidth + 1;

    if (currentFrame == totalFrames) {
      shift = 0;
      currentFrame = 0;
    }

    currentFrame++;

    requestAnimationFrame(animate);
  }
}
