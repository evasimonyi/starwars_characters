export const getImage = (index: number) => {
  let image = '/assets/mock-image-1.png';
  if (index % 2 == 0) {
    image = '/assets/mock-image.png';
  }
  return image;
}