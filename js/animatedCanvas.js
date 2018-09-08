function setAnimatedCanvas(canvasName, image, frameWidth, frameHeight, frameCount, frameInterval, color) {
  
  var canvas = document.getElementById(canvasName);
  var context = canvas.getContext("2d");

  var shift = 0;
  var currentFrame = 0;
  
  var myImage = new Image();

  function animate() {
  
    /// this composite mode clears the canvas as well
    context.globalCompositeOperation = 'copy';

    //draw each frame + place them in the middle
    context.drawImage(myImage, shift, 0, frameWidth, frameHeight,
                      0, 0, frameWidth, frameHeight);

    /// this mode fills in whatever, in the image
    context.globalCompositeOperation = 'source-in';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    shift += frameWidth + 1;

    if (currentFrame == frameCount) {
      shift = 0;
      currentFrame = 0;
    }

    currentFrame++;

    requestAnimationFrame(animate);
  }
  
  function loadImage(e) {
    animate();
  }

  myImage.addEventListener("load", loadImage, false);
  myImage.src = image;
  
  myImage.fillStyle = color;
  myImage.goalColor = color;
}
