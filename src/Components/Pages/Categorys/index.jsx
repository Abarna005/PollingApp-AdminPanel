import React, { useEffect, useState } from "react";
import CategoriesHeader from "./CategorieHeader";
import { ButtonStyles } from "./style";
import { CategorieData } from "./data";
import AddCat from "./AddCat/index";
import EditCat from "./EditCat";
import BasicDemo from "../../Common/PopUp/index";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Container } from "react-bootstrap";
import { ColorThemes } from "../../../Themes/colors";
import { FetchCategory } from "../../../Firebase/FetchCategory/FetchCategory";
import {
  AddAPhotoOutlined,
  CreateOutlined,
  RemoveCircleOutline,
} from "@mui/icons-material";

export default function Categories() {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [isRemoveClicked, setIsRemoveClicked] = useState(false);
  const [showAddCat, setShowAddCat] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const categories = await FetchCategory();
    console.log(categories);
    const catobj = categories.map((c, index) => ({
      id: `Category${index + 1}`,
      word: c.name,
      EditIcon: CreateOutlined,
      AddImageIcon: AddAPhotoOutlined,
      RemoveIcon: RemoveCircleOutline,
      iconName: c.image,
    }));
    console.log(catobj);
    setCategories(catobj)
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleToggleAddCategories = () => {
    setShowAddCat(!showAddCat);
  };

  const handleToggleEditCategories = (categoryId) => {
    setSelectedCategoryId(categoryId);
    const category = categories.find((cat) => cat.id === categoryId);
    setSelectedCategory(category);
  };

  const handleToggleRemoveCategories = () => {
    setIsRemoveClicked(!isRemoveClicked);
  };

  const handleCategoryUpdate = (updatedCategory) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    );
  };

  const handleAddCategory = (newCategory) => {
    // Create a new category with a unique ID
    const newCategoryWithId = {
      ...newCategory,
      id: new Date().getTime(),
    };

    // Update the state with the new category added to the beginning of the array
    setCategories((prevCategories) => [newCategoryWithId, ...prevCategories]);
  };

  const RemoveCategory = (catId) => {
    console.log("Removing category with ID:", catId);
    const updatedCategories = categories.filter(
      (category) => category.id !== catId
    );
    setCategories(updatedCategories);
    console.log("Updated categories:", updatedCategories);
  };

  return (
    <div>
      <ButtonStyles>
        <div className="main-container">
          <Container xs="12" sm="12" md="12" offset={4}>
            <CategoriesHeader
              handleToggleAddCategories={handleToggleAddCategories}
              handleToggleRemoveCategories={handleToggleRemoveCategories}
              setIsUpdateClicked={setIsUpdateClicked}
              setIsRemoveClicked={setIsRemoveClicked}
            />

            <div className="button-container">
              {categories
                .slice(0, showMore ? categories.length : 6)
                .map((category, index) => (
                  <div
                    key={category.id}
                    className={`category-buttons ${
                      selectedCategoryId === category.id
                        ? "selected-category"
                        : ""
                    }`}
                  >
                    {isRemoveClicked && (
                      <div>
                        <BasicDemo
                          onClose={() => setIsRemoveClicked(false)}
                          index={index}
                          catId={category.id}
                          RemoveCategory={RemoveCategory}
                          categories={categories} // Pass the categories state
                        />
                      </div>
                    )}
                    <div className="image-container">
                      <img
                        src={category.iconName}
                        alt={category.word}
                        style={{
                          height: "60px",
                          width: "60px",
                          // backgroundColor: "pink",
                        }}
                      />
                      <div className="button-title">
                        {category.word}
                        {isUpdateClicked && category.EditIcon && (
                          <category.EditIcon
                            style={{
                              fontSize: 15,
                              cursor: "pointer",
                              marginLeft: 5,
                            }}
                            onClick={() =>
                              handleToggleEditCategories(category.id)
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {showAddCat && (
              <div className="overlay" onClick={(e) => e.stopPropagation()}>
                <AddCat
                  onClose={handleToggleAddCategories}
                  onAddCategory={handleAddCategory}
                />
              </div>
            )}
            {selectedCategoryId !== null && (
              <div onClick={(e) => e.stopPropagation()}>
                <EditCat
                  onClose={() => setSelectedCategoryId(null)}
                  selectedCategory={categories.find(
                    (category) => category.id === selectedCategoryId
                  )}
                  onCategoryUpdate={handleCategoryUpdate}
                />
              </div>
            )}

            <div
              className="arrow-container"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? (
                <ArrowDropUpIcon
                  sx={{ color: ColorThemes.Font.MidnightBlue }}
                />
              ) : (
                <ArrowDropDownIcon
                  sx={{ color: ColorThemes.Font.MidnightBlue }}
                />
              )}
            </div>
          </Container>
        </div>
      </ButtonStyles>
    </div>
  );
}
