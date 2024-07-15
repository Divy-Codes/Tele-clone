export function getInitials(name = '') {
  let initials = '';
  const nameArray = name.split(' ');
  initials +=
    nameArray[0][0].toUpperCase() +
    nameArray[nameArray.length - 1][0].toUpperCase(); //Better in case of middle names
  // nameArray.forEach((word) => {
  //   initials += word[0].toUpperCase();
  // });
  return initials;
}

//Avoid too dark or too light colors. Text won't be visible in too light colors. Too dark won't look good.
export function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 15) + 35; // 15% - 50%
  const lightness = Math.floor(Math.random() * 30) + 40; // 35% -  65%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export function timeString(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
}
