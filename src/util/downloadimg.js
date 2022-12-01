export const canvasConvert = (filter, imgUrl, color) => {
  var canvas = document.getElementById('canvasimage');
  var ctx = canvas.getContext('2d');
  let image = new Image();
  image.src = imgUrl;
  function drawImageActualSize() {
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0);
    ctx.filter = `brightness(${filter.brightness}%) 
                    blur(${filter.blur}px) 
                    contrast(${filter.contrast}%)
                    grayscale(${filter.grayscale}%)
                    invert(${filter.invert}%)
                    saturate(${filter.saturate}%)
                    sepia(${filter.sepia}%)
                    opacity(${filter.opacity}%)
                    hue-rotate(${filter.huerotate}deg)`;
    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(image, 0, 0, image.width, image.height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, image.width, image.height);
    console.log(ctx);
  }
  drawImageActualSize();
  let a = document.createElement('a');
  a.href = canvas.toDataURL('image/jpg');
  a.download = 'image.jpg';
  a.click();
};
