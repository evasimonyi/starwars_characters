export const getImage = (index: number) => {
  let image = '/assets/trmock-image-1.png';
  if (index % 2 == 0) {
    image = '/assets/trmock-image.png';
  }
  return image;
}