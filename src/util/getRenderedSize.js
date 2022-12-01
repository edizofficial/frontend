export function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
  var oRatio = width / height,
    cRatio = cWidth / cHeight;
  return function () {
    if (contains ? oRatio > cRatio : oRatio < cRatio) {
      this.width = cWidth;
      this.height = cWidth / oRatio;
    } else {
      this.width = cHeight * oRatio;
      this.height = cHeight;
    }
    this.left = (cWidth - this.width) * (pos / 100);
    this.right = this.width + this.left;
    return this;
  }.call({});
}
