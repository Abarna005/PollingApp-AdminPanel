import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { EditCatStyles } from "./style";
import StyledButton from "../../../Common/Buttons/index";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function EditCat({
  onClose,
  selectedCategory,
  onCategoryUpdate,
}) {
  const [image, setImage] = useState(null);
  const [imgfile, setImgfile] = useState(null);
  const [isimgchanged, setIsimgchanged] = useState(false);
  const [isnamechanged, setIsnamechanged] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [prevcategory, setPrevcategory] = useState("");
  const [isValidationError, setIsValidationError] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      setImage(selectedCategory.iconName);
      setCategoryName(selectedCategory.word);
      setPrevcategory(selectedCategory.word);
    }
  }, [selectedCategory]);

  const handleCloseButtonClick = () => {
    // console.log("Close button clicked");
    onClose();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    setImgfile(file);
    setIsimgchanged(true);
    console.log(image);
  };

  const handleAddButtonClick = () => {
    if (categoryName.trim() === "") {
      setIsValidationError(true);
    } else if (
      categoryName.trim() === selectedCategory.word &&
      isimgchanged === false
    ) {
      setIsValidationError(true);
    } else {
      setIsValidationError(false);
      if (categoryName.trim() !== selectedCategory.word) {
        setIsnamechanged(true);
      }
      onCategoryUpdate({
        ...selectedCategory,
        word: categoryName,
        prevcat: prevcategory,
        iconName: isimgchanged ? imgfile : image,
        imgchanged: isimgchanged,
        namechanged: isnamechanged,
      });
      onClose();
    }
  };

  return (
    <EditCatStyles>
      <Container fluid>
        <Row>
          <div className="Edit-Category-Container">
            <Col xs={12} md={6} lg={4}>
              <div style={{ position: "absolute", top: 15, left: "80%" }}>
                <StyledButton
                  endIcon={
                    <HighlightOffOutlinedIcon sx={{ color: "#004f83" }} />
                  }
                  disableTouchRipple={true}
                  onClick={handleCloseButtonClick}
                />
              </div>
              <div>
                <Typography className="title">Edit Category</Typography>
              </div>
              <label
                htmlFor="edit-input"
                style={{ margin: 0, padding: 0, display: "block" }}
              >
                <div className="icon-container">
                  {image && (
                    <img
                      src={image}
                      alt={"Category Image"}
                      style={{
                        width: "60px",
                        height: "60px",
                        marginTop: "2px",
                        marginLeft: "10px",
                      }}
                    />
                  )}
                  <input
                    type="file"
                    name=""
                    id="edit-input"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </div>
              </label>
              <div>
                <TextField
                  className="text-input"
                  value={categoryName}
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                    setIsnamechanged(true);
                    setIsValidationError(false);
                  }}
                  error={isValidationError}
                  helperText={
                    isValidationError
                      ? "Category name & image cannot be empty and should not be the same"
                      : ""
                  }
                />
              </div>
              <StyledButton
                className="button"
                title={"Update"}
                fontWeight={"bold"}
                textcolor={"white"}
                onClick={handleAddButtonClick}
              />
            </Col>
          </div>
        </Row>
      </Container>
    </EditCatStyles>
  );
}
