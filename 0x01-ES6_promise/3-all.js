import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const img = uploadPhoto();
  const usr = createUser();

  return Promise.all([img, usr])
    .then((value) => {
      console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
