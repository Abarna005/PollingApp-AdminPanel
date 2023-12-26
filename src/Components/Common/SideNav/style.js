import styled from "@emotion/styled";
import {ColorThemes }from '../../../Themes/colors';

export const NavStyles = styled("div")`

  * {
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  .sidebar {
    min-height: 100vh;
    width: 78px;
    padding: 15px 25px;
    z-index: 99;
    background-color: ${ColorThemes.backgroundColor.MidnightBlue};
    transition: all 0.5s ease;
    position: fixed;
    top: 0;
    left: 40;
  }

  .sidebar.open {
    width: 250px;
  }

  .sidebar .logo_details {
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .sidebar .logo_details .logo_name {
    color:  ${ColorThemes.backgroundColor.whitePrimary};
    font-size: 22px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
  }

  .sidebar.open .logo_details .icon,
  .sidebar.open .logo_details .logo_name {
    opacity: 1;
  }

  .sidebar .logo_details #btn {
    position: absolute;
    top: 60%;
    right: 0;
    transform: translateY(-50%);
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .sidebar.open .logo_details #btn {
    text-align: right;
  }

  .sidebar .nav-list {
    flex-direction: column;
    height: 100%;
    margin-left: -18px;
    width: 200px; 
    line-height:60px;
    justify-content: flex-start; 
    align-items: center;
  }

  .sidebar li {
    // display: flex;
    position: relative;
    list-style: none;
  }

  .sidebar li .tooltip {
    position: absolute;
    top: -20px;
    left: 80px;
    z-index: 3;
    background-color: ${ColorThemes.backgroundColor.whitePrimary};
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 14px;
    font-size: 15px;
    font-weight: 400;
    border-radius: 5px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
  }

  .sidebar li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
  }

  .sidebar.open li .tooltip {
    display: none;
  }

  .sidebar .nav-list .active {
    background-color: #ffb07c;
    transition: width 0.1s;
  }

  .active {
    transition: width 0.1s;
    ${props => props.isSidebarOpen && `
      width: 200px;
    `}
  }

  .active {
    backgroundColor:  ${ColorThemes.backgroundColor.whitePrimary};
    color: #7C4DFF;
  }

  .inactive {
    backgroundColor:  ${ColorThemes.backgroundColor.MidnightBlue};
  }

  .home-section {
    position: relative;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
  }

  // .home-section .text {
  //   display: inline-block;
  //   color: #004f83;
  //   font-size: 25px;
  //   font-weight: 500;
  //   margin: 18px;
  // }

  .sidebar.open ~ .home-section {
    left: 250px;
    width: calc(100% - 250px);
  }
  .logout-icon {
    position: fixed;
    height: 60px;
    width: 78px;
    left: 0;
    bottom: 3px;
    padding: 15px 25px;
    overflow: hidden;
    transition: all 0.5s ease;
  }
 
`;
