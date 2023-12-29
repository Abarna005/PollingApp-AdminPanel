import styled from "@emotion/styled";
import{ ColorThemes }from '../../../Themes/colors';

export const ViewUserStyles = styled("div")(({ theme }) => ({
  padding:"1%",
  marginTop:"1%",
  ".Main-Container":{
    filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
    backgroundColor: ColorThemes.backgroundColor.whitePrimary,
    borderRadius: "8px",
    width:"auto",
    marginLeft: "1%",
    marginRight:"1%",
    padding:"1%",
    overflowY: "auto",
    position: "relative",
  },
  ".Container": {
    borderRadius:"10px",
    backgroundColor:ColorThemes.backgroundColor.whitePrimary,
    height:"auto",
  },
  ".title": {
    fontWeight:"bold",
    fontSize:"20px"
  },
  
  ".table-title":{
    position: "sticky", top: 0, backgroundColor: ColorThemes.backgroundColor.whitePrimary, zIndex: 1000
  },
  ".RowTitle":{
    fontWeight:"bold",
    color:ColorThemes.Font.MidnightBlue,
    padding:"1%",
  },
  ".access-cell":{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    fontWeight: "bold",
    padding:"3%",
    color: ColorThemes.Font.MidnightBlue,
  },
  ".IconStyle": {
    fontSize: "30px",
  },
  ".inline-access-cell":{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding:"1%",
  },
 ".tabledata-row":{
padding:"1%",
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
