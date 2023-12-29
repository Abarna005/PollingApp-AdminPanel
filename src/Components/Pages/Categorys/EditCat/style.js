import styled from "@emotion/styled";
import { ColorThemes } from "../../../../Themes/colors";

export const EditCatStyles = styled("div")(({ isClicked }) => ({
  position: "fixed",
  top: 20,
  left: "60%",
  padding: "4%",

  ".Edit-Category-Container": {
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
    color:ColorThemes.Font.MidnightBlue,
    marginTop: "1px 0px",
    whiteSpace: "nowrap",
  },
  ".icon-container": {
    margin: "15px 0",
    color:ColorThemes.Font.MidnightBlue,
    width: "12vw",
    whiteSpace: "nowrap",
    left: "-20px", // Use quotes for the value enclosed in backticks
    position: "relative",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    padding: "35%",
    filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))",
    backgroundColor: ColorThemes.backgroundColor.whitePrimary,
    borderRadius: "8px",
    cursor: "pointer",
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
