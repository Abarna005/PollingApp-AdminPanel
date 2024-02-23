import styled from "@emotion/styled";
import { ColorThemes } from "../../../Themes/colors";

export const ExpireTableStyles = styled("div")(({ open }) => ({
  padding: "1%",
  marginLeft: "2px",
  // backgroundColor:"green",
  ".contianer": {
    filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "1%",
    marginTop: "1%",
    // marginLeft:"1px",
    width: " auto",
    overflowY: "auto",
    height: "auto",
  },
  ".title": {
    fontWeight: "bold",
    display: "flex",
    marginTop: "1%",
    justifyContent: "space-between",
  },
  ".button-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    padding: "1%",
  },
  ".button-styles": {
    backgroundColor: ColorThemes.backgroundColor.MidnightBlue,
    // borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
