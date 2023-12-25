import { PATH } from '../Constants/RouterConstants';
//pages
import LogIn from '../Pages/LogIn/index';
import Dashboard from  '../Pages/Dashboard/index';
import ViewPoll from '../Pages/Polls/index';
import Categories from  '../Pages/Categorys/index';
import ViewUsers from '../Pages/Users/index';


export const RouteData = [
  {
    title: "login",
    Component: LogIn,
    route: PATH.LOGIN,
    isPublic:true,
  },
  {
    title: "dashboard",
    Component: Dashboard,
    route: PATH.DASHBOARD,
    isPublic:false,
  },
  {
    title: "categories",
    Component: Categories,
    route: PATH.CATEGORIES,
    isPublic:false,
  },
  {
    title: "viewpoll",
    Component: ViewPoll,
    route: PATH.VIEWPOLL,
    isPublic:false,
  },
  {
    title: "viewusers",
    Component:ViewUsers,
    route: PATH.VIEWUSERS,
    isPublic:false,
  },
];
