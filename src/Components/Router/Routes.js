import { PATH } from "../Constants/RouterConstants";
//pages
import LogIn from "../Pages/LogIn/index";
import Dashboard from "../Pages/Dashboard/index";
import Categories from "../Pages/Categorys/index";
import ViewUsers from "../Pages/Users/index";
import BlockPolls from "../Pages/PollsBlock/index";
import ExpiredPolls from "../Pages/ExpirePolls/index";
import SkippedPolls from "../Pages/SkippsPolls/index";
import ViewReport from "../Pages/ViewReport";
import SuperUser from "../Pages/SuperUser";


export const RouteData = [
  {
    title: "login",
    Component: LogIn,
    route: PATH.LOGIN,
    isPublic: true,
  },
  {
    title: "dashboard",
    Component: Dashboard,
    route: PATH.DASHBOARD,
    isPublic: false,
  },
  {
    title: "categories",
    Component: Categories,
    route: PATH.CATEGORIES,
    isPublic: false,
  },
  {
    title: "blockpolls",
    Component: BlockPolls,
    route: PATH.BLOCKPOLLS,
    isPublic: false,
  },
  {
    title: "viewusers",
    Component: ViewUsers,
    route: PATH.VIEWUSERS,
    isPublic: false,
  },
  {
    title: "viewsuperuser",
    Component: SuperUser,
    route: PATH.SUPERUSERS,
    isPublic: false,
  },
  {
    title: "expirepolls",
    Component: ExpiredPolls,
    route: PATH.EXPIREDPOLLS,
    isPublic: false,
  },
  {
    title: "viewreport",
    Component: ViewReport,
    route: PATH.VIEWREPORT,
    isPublic: false,
  },
];
