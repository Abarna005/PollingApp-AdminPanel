import { styled } from "@mui/material/styles";

export const LogInStyles = styled("div")(({ variant }) => ({
".container":{
//   filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
justifyContent:"center",
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
marginTop: 8,
},

".main-container":{
  filter: `drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28))`,
  backgroundColor:"white",
  // height:"calc(100vh - 200px)",
  height:"55vh",
  // width:"30vw",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  marginTop:"35px",
},
".FormContainer":{
  width: '75%',
  marginTop: 3,
  alignItems:"right",
  flexDirection:"column",
},
".form-main-container":{
  display: 'flex', flexDirection: 'column', alignItems: 'center'
},
".title":{
  textAlign:"center",fontWeight:"bold"
},
".remember-forgot":{
  width:"90%",display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:"3%"
},
".forgot-link":{
  marginLeft:"75px",textDecoration:"none",
},
".Button-Container":{
  display: 'flex', flexDirection: 'column',width:"80%",justifyContent:"center",alignItems:"center",marginTop:"3%"
},
".signup-link":{
  display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:"3%"
}
}));
