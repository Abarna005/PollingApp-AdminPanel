import styled from "@emotion/styled";
import {ColorThemes} from '../../../Themes/colors';

export const ExpireTableStyles = styled("div")(({ theme }) => ({
padding:"2%",
  marginTop:"2%",
  ".contianer": {
    filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
    borderRadius:"10px",
    backgroundColor:"white",
    padding:"2%",
    //  marginTop:"1%",
    width:"100%",
    overflowY:"auto",
    height:"100%",
  },
  ".title":{
    fontWeight:"bold",
//   marginTop:"1%",
  fontSize:"15px",
  },
  ".button-container":{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  ".button-style":{
// padding:"1%",
height:"5vh",
  width:"8vw",
   marginTop:"2%",
  borderRadius:"25px",
    backgroundColor:ColorThemes.backgroundColor.MidnightBlue,
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
