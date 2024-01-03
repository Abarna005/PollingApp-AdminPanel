import styled from "@emotion/styled";

export const TableStyles = styled("div")(({ theme }) => ({
  // padding:"3%",
  marginTop:"1%",

    ".contianer": {
    filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
    borderRadius:"10px",
    backgroundColor:"white",
    padding:"3%",
    marginTop:"10%",
    // marginLeft:"2%",
    width:"37vw", 
    overflowY:"auto",
    height:"auto",
    // padding:"1%",
  },
  ".title":{
fontWeight:"bold",
display:"flex",
marginTop:"1%",
justifyContent:"space-between",
  },
 ".filter-icon":{
  filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
  borderRadius:"20px",
  width:"30px", 
  padding:"3%",
  cursor:"pointer",
  color:"#004f83",
    height:"auto",
  backgroundColor:"white",
 },
 ".expire-container":{
height:"200px",
width:"auto",
 },
}));


export const ExpireTableStyles = styled("div")(({ theme }) => ({
  padding:"3%",
  marginTop:"1%",
    ".table-container": {
    filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
    borderRadius:"10px",
    backgroundColor:"white",
    padding:"3%",
    marginTop:"1%",
    width:"40vw", 
    overflowY:"auto",
    height:"auto",
  },
  ".title":{
fontWeight:"bold",
display:"flex",
marginTop:"1%",
justifyContent:"space-between",
  },
 ".filter-icon":{
  filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
  borderRadius:"20px",
  width:"30px", 
  padding:"3%",
  cursor:"pointer",
  color:"#004f83",
    height:"auto",
  backgroundColor:"white",
 },
 ".expire-container":{
height:"200px",
width:"auto",
 },
}));