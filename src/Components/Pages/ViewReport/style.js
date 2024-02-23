import styled from "@emotion/styled";

export const ViewReportStyles = styled("div")(({ theme }) => ({
  ".main-container": {
    width: "100%",
    padding: "1.5vw 7vw",
  },
  ".action-button": {
    backgroundColor: "red",
    color: "#fff",
    fontWeight: "bold",
    height: "5.5vh",
    textAlign: "center",
    fontSize: "12px",
    padding: "0 1.5vw",
    margin: "auto 0",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  ".card-div": {
    backgroundColor: "#d2d2d2",
    boxShadow:'2px 3px 6px #ddd',
    padding: ".5rem 1rem",
    maxHeight: "60vh",
    overflow: "auto",
    width: "60vw",
    borderRadius:'.5rem'
  },
  ".card-box": {
    width: "100%",
    display: "flex",
  },
  ".userbox": {
    display: "flex",
    gap: ".5vw",
  },
  ".usertypo": {
    fontWeight: "bold",
    margin:'auto .4vw'
  },
  ".categorytypo": {
    paddingLeft: ".2vw",
    paddingTop: "1vh",
    fontStyle: "italic",
    fontWeight: 500,
  },
  ".buttonbox": {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ".reporttypo": {
    fontWeight: 525,
    fontSize: ".9rem",
    margin:'1vh 0'
  },
  '.reportprofile':{
    borderRadius:'50%'
  },
  '.infotext':{
    display:'flex',
    justifyContent:'space-between',
    padding:'.5vh 1vw',
  }
}));
