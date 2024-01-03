import styled from "@emotion/styled";
import {ColorThemes} from '../../../Themes/colors';

export const CatReqStyles = styled("div")(({ isClicked }) => ({
    marginTop: "1%",
    ".main-container": {
      filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
      backgroundColor: ColorThemes.backgroundColor.whitePrimary,
      borderRadius: "8px",
      width: "auto",
      marginLeft: "1%",
      marginRight:"1%",
      padding: "3%",
      overflowY: "auto",
      height: "calc(100vh - 100px)",
      position: "relative",
    },
    ".tablewrapper ":{
        overflowY: "auto",
      },
      ".title": {
        fontWeight:"bold",
        fontSize:"20px"
      },
      ".arrow-container": {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2%",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
        backgroundColor: ColorThemes.backgroundColor.whitePrimary,
        borderRadius: "100%",
        width: "2vw",
        height: "2vw",
        color: "#7C4DFF",
      },
  }));
  
