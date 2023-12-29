import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { EditCatStyles } from "./style";
import StyledButton from '../../../Common/Buttons/index';
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function EditCat({ onClose, selectedCategory, onCategoryUpdate }) {
  const [image, setImage] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [isValidationError, setIsValidationError] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      setImage(selectedCategory.iconName);
      setCategoryName(selectedCategory.word);
    }
  }, [selectedCategory]);

  const handleCloseButtonClick = () => {
    // console.log("Close button clicked");
    onClose();
  };

  const handleAddButtonClick = () => {
    if (categoryName.trim() === "") {
      setIsValidationError(true);
    } else {
      setIsValidationError(false);
      onCategoryUpdate({
        ...selectedCategory,
        word: categoryName,
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
                  endIcon={<HighlightOffOutlinedIcon />}
                  disableTouchRipple={true}
                  onClick={handleCloseButtonClick}
                />
              </div>
              <div>
                <Typography className="title">Edit Category</Typography>
              </div>
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
              </div>
              <div>
                <TextField
                  className="text-input"
                  value={categoryName}
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                    setIsValidationError(false);
                  }}
                  error={isValidationError}
                  helperText={isValidationError ? "Category name cannot be empty" : ""}
                />
              </div>
              <StyledButton
                className="button"
                title={"Add"}
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
