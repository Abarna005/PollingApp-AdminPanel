import { ref, remove, set, update } from "firebase/database";
import {
  getDownloadURL,
  ref as storage_ref,
  uploadBytes,
} from "firebase/storage";
import { db, storage } from "../../Firebase";

export const EditCategory = async (category_data) => {
  try {
    // if both name & image changed
    if (category_data.imgchanged && category_data.namechanged) {
      // storing image in bucket
      const file = category_data.iconName;
      const imgref = storage_ref(storage, `category/${file.name}`);
      const storeimg = await uploadBytes(imgref, file);
      const URL = await getDownloadURL(imgref);
      console.log(URL);

      // updating the data in db
      const delref = ref(db, `category/${category_data.prevcat}`);
      const newref = ref(db, `category/${category_data.word}`);

      const newdata = {
        image: URL,
        name: category_data.word,
      };
      const delold = await remove(delref);
      const addnew = await set(newref, newdata);
      console.log("Category and image updated successfully");
    }
    // if image only changed
    else if (category_data.imgchanged) {
      // upload image code
      const file = category_data.iconName;
      const imgref = storage_ref(storage, `category/${file.name}`);
      const storeimg = await uploadBytes(imgref, file);
      const URL = await getDownloadURL(imgref);

      const updatedb = update(ref(db, `category/${category_data.word}`), {
        image: URL,
        name: category_data.word,
      });
      console.log("Category Image updated successfully");
    }
    // if name only changed
    else {
      const delrefernce = ref(db, `category/${category_data.prevcat}`);
      const newreference = ref(db, `category/${category_data.word}`);

      const newdata = {
        image: category_data.iconName,
        name: category_data.word,
      };
      console.log(newdata);
      const delold = await remove(delrefernce);
      const addnew = await set(newreference, newdata);
      console.log("Category updated successfully!!");
    }
  } catch (error) {
    console.log("Error updating category", error);
  }
};
