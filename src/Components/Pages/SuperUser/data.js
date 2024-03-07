import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from '@mui/material';

const handleAccept = (id) => {
    // Implement the logic for accepting the request
    console.log(`Request with ID ${id} accepted.`);
  };
  
  const handleReject = (id) => {
    // Implement the logic for rejecting the request
    console.log(`Request with ID ${id} rejected.`);
  };

  const createActionButton = (id, action) => (
    <div style={{ display: 'flex', alignItems: 'center',justifyContent:"center"}}>
      <Button
        onClick={() => action(id)}
        style={{ backgroundColor: action === handleAccept ? 'green' : 'red', color: '#fff', fontWeight: 'bold', padding: '3%', width: '8vw', textAlign: 'center',fontSize:"12px" }}
      >
        {action === handleAccept ? 'Accept' : 'Reject'}
      </Button>
    </div>
  );
  

export const RequestColumns = [
    { id: 'profiles', label: 'Profiles' },
    { id: 'usernames', label: 'User names' },
    // { id: 'postnames', label: 'Post names' },
    { id: 'grant', label: 'Grant' },
    { id: 'reject', label: 'Reject' },
    ];

    export const RequestDatas = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  profiles: <AccountCircleIcon />,
  usernames: ["Abarna", "Arthi", "Sharmi", "Rajashree", "Monica", "Rachel", "Hema", "Swathi", "Divya", "Nandhini", "Maha", "Priya"][index],
  postnames: "Food",
  accept: createActionButton(index + 1, handleAccept),
  reject: createActionButton(index + 1, handleReject),
}));
