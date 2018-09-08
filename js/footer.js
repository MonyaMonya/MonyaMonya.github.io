document.write('\
<canvas id="footerCanvas"></canvas>\
\
');

var img = new Image,
    canvas = document.getElementById('footerCanvas'),
    ctx = canvas.getContext('2d');

/// change to this color
ctx.fillStyle = '#00F';

/// load image, when ready render it with new color
img.onload = render;
img.src = 'content/stepladder.gif';

function render() {
    /// this composite mode clears the canvas as well
    ctx.globalCompositeOperation = 'copy';
    ctx.drawImage(img, 0, 0);

    /// this mode fills in whatever, in the image
    ctx.globalCompositeOperation = 'source-in';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
