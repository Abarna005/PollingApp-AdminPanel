import { ref, set } from "firebase/database";
import { StoreCategoryimage } from "./StoreCategoryImage";
import { db } from "../../Firebase";

export const InsertCategory = async (insert_category) => {
  console.log(insert_category);
  if (insert_category.image) {
    try {
      const imagelink = await StoreCategoryimage(insert_category.image);
      console.log("imagelink", imagelink);
      insert_category.image = imagelink;
      console.log(insert_category);

      const insertcategory = await set(
        ref(db, `category/${insert_category.name}`),
        insert_category
      );
      console.log("Category added successfully");
    } catch (error) {
      console.log("Error adding category", error);
    }
  } else {
    console.log("Image data is missing");
  }
};
