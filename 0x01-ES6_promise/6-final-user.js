import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  return Promise.allSettled([signup, upload]).then((values) => {
    const arr = [];
    for (const x of values) {
      if (x.status === 'fulfilled') {
        arr.push({ status: x.status, value: x.value });
      } else {
        arr.push({ status: x.status, value: `${x.reason}` });
      }
    }
    return arr;
  });
}
