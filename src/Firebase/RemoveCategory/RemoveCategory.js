import { ref, remove } from "firebase/database";
import { deleteObject, ref as storage_ref } from "firebase/storage";
import { db, storage } from "../../Firebase";

export const RemoveCategoryindb=async(category,image)=>{
    try {
        // getting filename
        const iName=image.split("%2F")[1].split("?")[0];

        // creating reference
        const reference=ref(db,`category/${category}`);
        const storagereference=storage_ref(storage,`category/${iName}`);

        // deleting category in both storage and database
        const removecat=await remove(reference);
        const delfile=await deleteObject(storagereference);
        console.log("Category deleted successfully");
    } catch (error) {
        console.log("Error deleting category",error);
    }
}