import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../Firebase";

export const StoreCategoryimage = async (category_image) => {
  try {
    const reference = ref(storage, `category/${category_image.name}`);
    const uploadimage = await uploadBytes(reference, category_image);
    const getURL = await getDownloadURL(reference);
    console.log(getURL);
    return getURL;
  } catch (error) {
    console.log("Error uploading category image", error);
  }
};
