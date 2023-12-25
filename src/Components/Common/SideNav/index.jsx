import React, { useState } from 'react';
import { NavStyles } from './style';
import { menuItems} from './data';
import {  Menu } from '@mui/icons-material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import  StyledButton from '../Buttons/index';
import { Typography } from '@mui/material';
import PrimarySearchAppBar from '../AppHeader/index';
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleButtonClick = (index) => {
    setActiveButtonIndex((prevIndex) => (prevIndex === index ? null : index));
    const item = menuItems[index];
    window.location.href = item.path;
  };

  const navigate = useNavigate();

  const handleListItemClick = (path) => {
    console.log('>>>>>>', path);
    // Perform any additional logic if needed
    console.log("Navigating to:", path);
    navigate(path);
    setIsSidebarOpen(false); 
  };

  const windowLocation = useLocation();

  // Fix the constant name to be consistent with its usage
  const activeButtonIndexs = (path) => windowLocation.pathname === path;


  return (
    <div>
      <NavStyles isSidebarOpen={isSidebarOpen}>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="logo_details">
            <div className="logo_name">Trending Polls</div>
            {isSidebarOpen ? (
              <MenuOpenIcon
                className={`bx bx-menu`}
                style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                id="btn"
                onClick={toggleSidebar}
              />
            ) : (
              <div>
                <Menu
                  className={`bx bx-menu`}
                  style={{ color: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  id="btn"
                  onClick={toggleSidebar}
                />
              </div>
            )}
          </div>


          
          <ul className="nav-list" style={{marginTop:"15%"}}>
          {menuItems.map((item, index) => (
  <li key={index}>
    <StyledButton
      onClick={() => {
        handleButtonClick(index);
        handleListItemClick(item.path); // Call the navigation function
      }}
      className={activeButtonIndexs(item.path) ? 'active' : ''}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <div style={{ display: 'flex', margin: '7px 15px', color: 'white', fontSize: 12 }}>
          {item.icon}
        </div>
      </div>
      {isSidebarOpen && (
        <Typography className="title-datas" style={{ color: 'white', fontSize: 12 }}>
          {item.title}
        </Typography>
      )}
    </StyledButton>
    <span className="tooltip">{item.title}</span>
  </li>
))}
          </ul>
        </div>
        <section className={`home-section ${isSidebarOpen ? 'open' : ''}`}>
        <Box
          sx={{
            // flexGrow: 0,
            margin:"1px",
            p: 0,
          }}
        >
          <PrimarySearchAppBar/>
          <Outlet/>
        </Box>
        </section>
      </NavStyles>
    </div>
  );
};

export default Sidebar;