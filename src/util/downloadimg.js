export const canvasConvert=(filter,imgUrl)=>{
  var canvas = document.getElementById("canvasimage");
  var ctx = canvas.getContext("2d");
  let image=new Image();
  image.src=imgUrl
  image.style.filter="grayscale(100%)"
  console.log(image);
  function drawImageActualSize() {
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0);
    ctx.filter =   `brightness(${filter.brightness}%) 
                    blur(${filter.blur}px) 
                    contrast(${filter.contrast}%)
                    grayscale(${filter.grayscale}%)
                    invert(${filter.invert}%)
                    opacity(${filter.opacity}%)`
    ctx.drawImage(image, 0, 0, image.width, image.height);
  }
  drawImageActualSize()
  let a=document.createElement('a');
  a.href=canvas.toDataURL('image/jpg')
  a.download='myimg.jpg'
  a.click()
}