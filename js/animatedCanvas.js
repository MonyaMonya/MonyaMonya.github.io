function setAnimatedCanvas(canvasName, image, frameWidth, frameHeight, frameCount, frameInterval, color) {
  
  var canvas = document.getElementById(canvasName);
  var context = canvas.getContext("2d");
  
  context.fillStyle = '#00c';
  //context.goalColor = color;

  var shift = 0;
  var currentFrame = 0;
  
  var stop = false;
  var startTime, now, then, elapsed;
  
  var myImage = new Image();

  function animate() {
    
    // request another frame
    requestAnimationFrame(animate);

    // calc elapsed time since last loop
    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame
    if (elapsed > frameInterval) {
      // Get ready for next frame by setting then=now, but also adjust for your
      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
      then = now - (elapsed % frameInterval);

      // Put your drawing code here
      /// this composite mode clears the canvas as well
      context.globalCompositeOperation = 'copy';

      //draw each frame + place them in the middle
      context.drawImage(myImage, shift, 0, frameWidth, frameHeight,
                        0, 0, frameWidth, frameHeight);

      /// this mode fills in whatever, in the image
      context.globalCompositeOperation = 'source-in';
      context.fillRect(0, 0, frameWidth, frameHeight);

      shift += frameWidth + 1;

      if (currentFrame == frameCount) {
        shift = 0;
        currentFrame = 0;
      }

      currentFrame++;
    }
  }
  
  function startAnimate() {
    then = Date.now();
    startTime = then;
    animate();
  }
  
  function loadImage(e) {
    startAnimate();
  }

  myImage.addEventListener("load", loadImage, false);
  myImage.src = image;
}
