import React, { useState } from "react";
import { NavStyles } from "./style";
import { menuItems, subItems } from "./data";
import { Menu } from "@mui/icons-material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import StyledButton from "../Buttons/index";
import { Button, Modal, Typography } from "@mui/material";
import PrimarySearchAppBar from "../AppHeader/index";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [openModal, setOpenModal] = useState("");
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("mailId");
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleButtonClick = (index) => {
    setActiveButtonIndex((prevIndex) => (prevIndex === index ? null : index));
    const item = menuItems[index];
    window.location.href = item.path;
  };

  const handleListItemClick = (path) => {
    console.log(">>>>>>", path);
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
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="logo_details">
            <div className="logo_name">Trending Polls</div>
            {isSidebarOpen ? (
              <MenuOpenIcon
                className={`bx bx-menu`}
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                id="btn"
                onClick={toggleSidebar}
              />
            ) : (
              <div>
                <Menu
                  className={`bx bx-menu`}
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  id="btn"
                  onClick={toggleSidebar}
                />
              </div>
            )}
          </div>

          <ul className="nav-list" style={{ marginTop: "15%" }}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <StyledButton
                  onClick={() => {
                    handleButtonClick(index);
                    handleListItemClick(item.path); // Call the navigation function
                  }}
                  className={activeButtonIndexs(item.path) ? "active" : ""}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        margin: "7px 15px",
                        color: "white",
                        fontSize: 12,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  {isSidebarOpen && (
                    <Typography
                      className="title-datas"
                      style={{ color: "white", fontSize: 12 }}
                    >
                      {item.title}
                    </Typography>
                  )}
                </StyledButton>
                <span className="tooltip">{item.title}</span>
              </li>
            ))}
            {subItems.map((item, index) => (
              <li key={index} style={{ position: "absolute", bottom: "10px" }}>
                <StyledButton
                  onClick={() => {
                    handleOpenModal();
                  }}
                  className={activeButtonIndexs(item.path) ? "active" : ""}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        margin: "7px 15px",
                        color: "white",
                        fontSize: 12,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  {isSidebarOpen && (
                    <Typography
                      className="title-datas"
                      style={{ color: "white", fontSize: 12 }}
                    >
                      {item.title}
                    </Typography>
                  )}
                </StyledButton>
                <span className="tooltip">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <section className={`home-section ${isSidebarOpen ? "open" : ""}`}>
          <Box
            sx={{
              // flexGrow: 0,
              p: 0,
            }}
          >
            <PrimarySearchAppBar />
            <Outlet />
          </Box>
        </section>

        {/* logout */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "55%",
              transform: "translate(-50%, -50%)",
              width: 250,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              textAlign: "center",
              borderRadius: 5,
            }}
          >
            <Typography
              id="modal-modal-title"
              component="h2"
              sx={{ fontSize: 16, color: "GrayText", fontWeight: 600 }}
            >
              Are you sure you want to log out?
            </Typography>
            <Button
              onClick={handleLogout}
              sx={{ mt: 2, mr: 2, color: "#004f83" }}
              textTransform="none"
            >
              Log out
            </Button>
            <Button onClick={handleCloseModal} sx={{ mt: 2, color: "grey" }}>
              Cancel
            </Button>
          </Box>
        </Modal>
      </NavStyles>
    </div>
  );
};

export default Sidebar;
