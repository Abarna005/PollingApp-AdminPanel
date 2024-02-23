import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CategoriesStyles } from "./style";
import StyledButton from "../../../Common/Buttons/index";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { TextField, Typography } from "@mui/material";
import { ColorThemes } from "../../../../Themes/colors";
import { InsertCategory } from "../../../../Firebase/AddCategory/AddCategory";

export default function AddCat({ onClose, fetchCategories }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadButtonClick = (e) => {
    e.stopPropagation();
    document.getElementById("fileInput").click();
  };

  const handleAddButtonClick = async () => {
    if (!categoryName && !selectedFile) {
      setError("Please enter a category name and upload an image.");
    } else if (!categoryName) {
      setError("Please enter a category name.");
    } else if (!selectedFile) {
      setError("Please upload an image.");
    } else {
      setError("");
      const addcategory = await InsertCategory({
        image: selectedFile,
        name: categoryName,
      }).then(() => {
        fetchCategories();
      });
      onClose();
    }
  };
  
  const handleCancelButtonClick = () => {
    onClose();
  };

  return (
    <>
      <CategoriesStyles>
        <Container>
          <Row>
            <div className="Add-Category-Container">
              <Col xs={12} md={6} lg={4}>
                <div
                  style={{
                    position: "absolute",
                    top: 15,
                    left: "80%",
                  }}
                >
                  <StyledButton
                    endIcon={
                      <HighlightOffOutlinedIcon
                        sx={{ color: ColorThemes.Font.MidnightBlue }}
                      />
                    }
                    disableTouchRipple={true}
                    onClick={handleCancelButtonClick}
                  />
                </div>
                <div>
                  <Typography className="title">Add Category</Typography>
                </div>
                <label
                  htmlFor="fileInput"
                  style={{ margin: 0, padding: 0, display: "block" }}
                >
                  <div
                    className="image-container"
                    style={{
                      backgroundImage: imagePreview
                        ? `url(${imagePreview})`
                        : "none",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "12vw",
                      height: "100px",
                    }}
                  >
                    <div className="icon-container">
                      {!imagePreview && (
                        <StyledButton
                          startIcon={
                            <AddAPhotoOutlinedIcon
                              sx={{ color: ColorThemes.Font.MidnightBlue }}
                            />
                          }
                          title={"Upload Images"}
                          textcolor={"gray"}
                          fontSize={10}
                          fontWeight={"bold"}
                          onClick={handleUploadButtonClick}
                        />
                      )}
                    </div>
                  </div>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    id="fileInput"
                    accept="image/*"
                  />
                </label>
                <div style={{ width: "100%", textAlign: "right" }}>
                  <TextField
                    className="text-input"
                    placeholder="Enter Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    error={Boolean(error)}
                    helperText={error}
                  />
                </div>
                <StyledButton
                  className="button"
                  title={"Add"}
                  backgroundColor={"red"}
                  fontWeight={"bold"}
                  textcolor={"white"}
                  onClick={handleAddButtonClick}
                />
              </Col>
            </div>
          </Row>
        </Container>
      </CategoriesStyles>
    </>
  );
}
