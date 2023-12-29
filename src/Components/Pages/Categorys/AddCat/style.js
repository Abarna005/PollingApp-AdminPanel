import styled from "@emotion/styled";
import {ColorThemes} from '../../../../Themes/colors';

export const CategoriesStyles = styled("div")(({ isClicked }) => ({
  position: "fixed",
  top: 20,
  left: "60%",
  padding: "4%",
  height: "auto",

  ".Add-Category-Container": {
    minHeight: "calc(100vh - 180px)",
    width: "25vw",
    backgroundColor: ColorThemes.backgroundColor.whitePrimary,
    borderRadius: "8px",
    filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  ".title": {
    fontSize: 20,
    fontWeight: "bold",
    color: ColorThemes.Font.MidnightBlue,
    marginTop: "5px 0px",
    whiteSpace: "nowrap",
  },

  ".image-container": {
    margin: "15px 0",
    width: "12vw",
    whiteSpace: "nowrap",
    left: "-25px", // Use quotes for the value enclosed in backticks
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: "35%",
    filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))",
    backgroundColor: ColorThemes.backgroundColor.whitePrimary,
    borderRadius: "8px",
    cursor: "pointer",
  },

  ".icon-container": {
    fontSize: 20,
    color: ColorThemes.Font.grey,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  ".text-input": {
    filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))",
    borderRadius: "8px",
    margin: "20px 0 0 0",
    cursor: "pointer",
    padding: "5%",
    width: "20vw",
    marginLeft: "-70px",
  },

  ".button": {
    backgroundColor: ColorThemes.backgroundColor.MidnightBlue,
    width: "20vw",
    height:"5vh",
    margin: "20px 0 0 0",
    cursor: "pointer",
    marginLeft: "-70px",
  },
}));
