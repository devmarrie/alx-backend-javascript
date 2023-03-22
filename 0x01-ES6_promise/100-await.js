import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photos = await uploadPhoto();
    const usr = await createUser();
    return {
      photo: { status: photos.status, body: photos.body },
      user: { firstName: usr.firstName, lastName: usr.lastName },
    };
  } catch (error) {
    return { photo: null, user: null };
  }
}
