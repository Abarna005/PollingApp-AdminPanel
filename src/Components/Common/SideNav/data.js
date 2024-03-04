// Menu items
import {
  Dashboard,
  Person,
  Chat,
  Analytics,
  Folder,
  ShoppingCart,
  Logout,
  Menu,
} from "@mui/icons-material";
import { PATH } from "../../Constants/RouterConstants";
export const menuItems = [
  {
    icon: <Dashboard />,
    title: "Dashboard",
    path: PATH.DASHBOARD,
  },
  {
    icon: <Chat />,
    title: "Categories",
    path: PATH.CATEGORIES,
  },
  {
    icon: <Person />,
    title: "Users",
    path: PATH.VIEWUSERS,
  },
  {
    icon: <Analytics />,
    title: "BlockPolls",
    path: PATH.BLOCKPOLLS,
  },
  {
    icon: <ShoppingCart />,
    title: "Expired Polls",
    path: PATH.EXPIREDPOLLS,
  },
  {
    icon: <ShoppingCart />,
    title: "Category Requests",
    path: PATH.CATEGORYREQUESTS,
  },
];

export const subItems = [
  {
    icon: <Logout />,
    title: "Logout",
  },
];
