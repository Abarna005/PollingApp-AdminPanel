// Menu items
import {
  Dashboard,
  Person,
  Logout,
  WorkspacePremium,
  Category,
  Block,
  History,
} from "@mui/icons-material";
import { PATH } from "../../Constants/RouterConstants";
export const menuItems = [
  {
    icon: <Dashboard />,
    title: "Dashboard",
    path: PATH.DASHBOARD,
  },
  {
    icon: <Category />,
    title: "Categories",
    path: PATH.CATEGORIES,
  },
  {
    icon: <Person />,
    title: "Users",
    path: PATH.VIEWUSERS,
  },
  {
    icon: <WorkspacePremium />,
    title: "SuperUser",
    path: PATH.SUPERUSERS,
  },
  {
    icon: <Block />,
    title: "BlockPolls",
    path: PATH.BLOCKPOLLS,
  },
  {
    icon: <History />,
    title: "Expired Polls",
    path: PATH.EXPIREDPOLLS,
  },
];

export const subItems = [
  {
    icon: <Logout />,
    title: "Logout",
  },
];
