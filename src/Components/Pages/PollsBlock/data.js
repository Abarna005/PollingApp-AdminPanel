// export const BlockPollColumns = [
//     {id:'id',label:'Id'},
//     {id:'usernames',label:'User names'},
//     {id:'polltypes',label:'Poll types'},
//     {id:'questions',label:'Questions'},
//     {id:'dates',label:'Dates'},
//     {id:"accessbuttons",label:"Access buttons"}
//   ];

//   export const BlockPollsDatas = [
//     { id: 1,  usernames: 'Arbas',   polltypes: 'Food',questions:"What is the capital city of Australia?",dates:"11 Mar"},
//     { id: 2,  usernames: 'Krishna', polltypes: 'Sports',questions:"Who wrote the play 'Romeo and Juliet'?",dates:"20 Nov"},
//     { id: 3,  usernames: 'Anaz',    polltypes: 'Food',questions:"What is the currency of Japan?",dates:"11 Mar" },
//     { id: 4,  usernames: 'Nawas',   polltypes: 'Sports',questions:"Who is known as the 'Father of Modern Physics'?",dates:"20 Nov"},
//     { id: 5,  usernames: 'Vignesh', polltypes: 'Food',questions:"What is the largest planet in our solar system?",dates:"11 Mar" },
//     { id: 6,  usernames: 'Paartha', polltypes: 'Sports',questions:"How many seconds are there in a year?",dates:"20 Nov"},
//     { id: 7,  usernames: 'Yahya',   polltypes: 'Sports',questions:"Why don't scientists trust atoms?",dates:"20 Nov"},
//     { id: 8,  usernames: 'Vicky',   polltypes: 'Sports',questions:"If you were a DJ, what would your DJ name be?",dates:"20 Nov"},
//     { id: 9,  usernames: 'Sandy',   polltypes: 'Sports',questions:"What's your most unusual talent?",dates:"20 Nov"},
//     { id: 10, usernames: 'Yuvi',    polltypes: 'Sports',questions:"What's the weirdest dream you've ever had?",dates:"20 Nov"},

//   ];
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// const handleAccept = (id) => {
//     // Implement the logic for accepting the request
//     console.log(`Request with ID ${id} accepted.`);
//   };

const handleReject = (id) => {
  // Implement the logic for rejecting the request
  console.log(`Request with ID ${id} rejected.`);
};

const createActionButton = (id, action) => (
  <div
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <Link to={`/viewreport/${id}`} style={{textDecoration:'none'}}>
      <Button
        onClick={() => action(id)}
        style={{
          backgroundColor: "#0963c0eb",
          color: "#fff",
          fontWeight: "bold",
          padding: "3%",
          width: "40%",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        {action === handleReject ? "View" : "nsdf"}
      </Button>
    </Link>
  </div>
);

export const BlockPollColumns = [
  { id: "id", label: "ID" },
  { id: "profiles", label: "Profiles" },
  { id: "usernames", label: "User names" },
  { id: "postnames", label: "Post names" },
  // { id: 'accept', label: 'Accept' },
  { id: "block", label: "Access" },
];

export const BlockPollsDatas = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  usernames: [
    "Abarna",
    "Arthi",
    "Sharmi",
    "Rajashree",
    "Monica",
    "Rachel",
    "Hema",
    "Swathi",
    "Divya",
    "Nandhini",
    "Maha",
    "Priya",
  ][index],
  profiles: <AccountCircleIcon />,
  postnames: "Food",
  // accept: createActionButton(index + 1, handleAccept),
  block: createActionButton(index + 1, handleReject),
  msgs:[
    [{uname:'dummy1',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
    [{uname:'dummy2',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
    [{uname:'dummy3',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
    [{uname:'dummy4',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
    [{uname:'dummy5',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
    [{uname:'dummy6',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
    [{uname:'dummy7',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
    [{uname:'dummy8',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
    [{uname:'dummy9',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
    [{uname:'dummy10',profilePic:<AccountCircleIcon/>,msg:"i don't like this"},{uname:'dummydummy',profilePic:<AccountCircleIcon/>,msg:"it's not good"},{uname:'galaxymessenger',profilePic:<AccountCircleIcon/>,msg:"harmful"},{uname:'user1010',profilePic:<AccountCircleIcon/>,msg:"the post has violent images"}],
  ][index]
}));
