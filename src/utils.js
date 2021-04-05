function ComponentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + ComponentToHex(r) + ComponentToHex(g) + ComponentToHex(b);
}

export default rgbToHex;
