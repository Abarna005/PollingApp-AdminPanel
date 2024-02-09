import styled from "@emotion/styled";

export const ReportCardStyles = styled("div")(({ theme }) => ({
  ".card": {
    margin: "1.5rem 1rem",
    padding:'1vw',
    borderRadius:'.5rem',
    boxShadow:'none',
    backgroundColor:'#fffffffe'
  },
  ".uname": {
    fontWeight: "600",
    fontSize: "1.2rem",
    paddingLeft:'.5vw'
  },
  ".messsagetypo":{
    padding:'.8vw 0 .5vw 1vw',
    fontWeight:500,
    fontStyle:'italic'
  },
  ".userimages":{
    borderRadius:'50%'
  },
  '.reportText':{
    fontSize:'.8rem',
    paddingLeft:'2vw'
  }
}));
