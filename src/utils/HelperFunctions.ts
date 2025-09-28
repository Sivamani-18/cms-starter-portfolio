export function scrollPage(top = 0, left = 0) {
  window.scrollTo({
    top,
    left,
    behavior: 'smooth',
  });
}

export const sayGreeting = () => {
  let greeting = '';
  let day = new Date();
  let hr = day.getHours();

  if (hr >= 0 && hr < 12) {
    greeting = 'Good morning';
  } else if (hr === 12) {
    greeting = 'Good noon';
  } else if (hr > 12 && hr < 18) {
    greeting = 'Good afternoon';
  } else if (hr >= 18 && hr < 22) {
    greeting = 'Good evening';
  } else {
    greeting = 'Hello';
  }

  return greeting;
};

export const getFileType = (mime: string) => {
  const imageMime = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];
  const videoMime = ['video/mp4', 'video/mpeg', 'video/webm'];
  const audioMime = ['audio/aac', 'audio/mpeg', 'audio/wav'];
  const documentMime = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];
  if (documentMime.includes(mime)) {
    return 'document';
  } else if (audioMime.includes(mime)) {
    return 'audio';
  } else if (videoMime.includes(mime)) {
    return 'video';
  } else if (imageMime.includes(mime)) {
    return 'image';
  } else {
    return false;
  }
};

export function getRandomText(len: number) {
  return Math.random().toString(36).substr(2, len);
}
