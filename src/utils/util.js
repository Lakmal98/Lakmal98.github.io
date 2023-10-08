// function that gives random color that is visible on white background (Without pre-defined colors)
export default function randomColor(dark = true, lightness = 155) {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const rgb = hexToRgb(color);
  const brightness = Math.round(
    (parseInt(rgb.r) * 299 + parseInt(rgb.g) * 587 + parseInt(rgb.b) * 114) /
      1000,
  );
  if (dark) {
    return brightness < lightness ? color : randomColor();
  } else {
    return brightness > lightness ? color : randomColor();
  }
}

export function hexToRgb(hex) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}
