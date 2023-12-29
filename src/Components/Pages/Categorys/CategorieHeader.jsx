import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import StyledButton from '../../Common/Buttons/index';
import { ButtonStyles } from "./style";
import { HeaderData } from "./data";

export default function CategoriesHeader({
  handleToggleAddCategories,
  setIsUpdateClicked,
  setIsRemoveClicked,
  handleToggleRemoveCategories,
}) {
  const [activeButton, setActiveButton] = useState(null);

 const handleClick = (data) => {
   // If the clicked button is already active, reset the activeButton state
   if (activeButton === data.word) {
     setActiveButton(null);
     setIsUpdateClicked(false); // Reset the "Update" button state
     setIsRemoveClicked(false); // Reset the "Remove" button state
   } else {
     if (data.word === "Add") {
       handleToggleAddCategories();
       setIsUpdateClicked(false);
       setIsRemoveClicked(false);
     } else if (data.word === "Update") {
       setIsUpdateClicked((prevValue) =>
         activeButton === data.word ? false : !prevValue
       );
       setIsRemoveClicked(false);
     } else if (data.word === "Remove") {
       setIsRemoveClicked((prevValue) =>
         activeButton === data.word ? false : !prevValue
       );
     } else {
       setIsRemoveClicked(false);
       handleToggleRemoveCategories(false);
       setIsUpdateClicked(false);
       // Handle other click actions if needed
     }

     // Set the active button
     setActiveButton(data.word);
   }
 };

 useEffect(() => {
   // Cleanup when the component is unmounted
   return () => setActiveButton(null);
 }, []);



  useEffect(() => {
    // Cleanup when the component is unmounted
    return () => setActiveButton(null);
  }, []);

  return (
    <ButtonStyles>
      <div className="Header-Container">
        <Typography
          style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
        >
          Categories
        </Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {HeaderData.map((data) => (
            <StyledButton
              className={`header-button ${
                activeButton === data.word ? "active" : ""
              }`}
              key={data.word}
              title={data.word}
              endIcon={
                data.iconName && <data.iconName style={{ fontSize: 20 }} />
              }
              fontSize={15}
              fontWeight={"bold"}
              textTransform={"none"}
              disableTouchRipple={true}
              onClick={() => handleClick(data)}
            />
          ))}
        </div>
      </div>
    </ButtonStyles>
  );
}
