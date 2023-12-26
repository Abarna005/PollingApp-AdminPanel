// Menu items
import { Dashboard, Person, Chat, Analytics, Folder, ShoppingCart,Logout, Menu } from '@mui/icons-material';
import {PATH} from '../../Constants/RouterConstants';
export const menuItems = [
  {
    icon: <Dashboard />,
    title: "Dashboard",
    path: PATH.DASHBOARD,
  },
  {
    icon: <Chat/>,
    title: "Categories",
    path: PATH.CATEGORIES,
  },
  {
    icon: <Person/>,
    title: "Users",
    path: PATH.VIEWUSERS,
  },
  {
    icon: <Analytics />,
    title: "Polls",
    path: PATH.VIEWPOLL,
  },
  {
    icon: <Folder />,
    title: "Skipped Polls",
    path: "#",
  },
  {
    icon: <ShoppingCart />,
    title: "Expired Polls",
    path: "#",
  },
 
];


// export const bottommenuItems = [
//   {
//     icon: <Logout />,
//     title: "Logout",
//     path: "#",
//   },
// ];