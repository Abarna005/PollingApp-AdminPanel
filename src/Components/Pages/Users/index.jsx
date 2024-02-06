import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import StyledButton from "../../Common/Buttons/index";
import { ViewUserStyles } from "./style";
import {
  userDataArray,
  AccessButtons,
  getColorForIndex,
  getTextColorForIndex,
  getHoverColorForIndex,
  getBorderColorForIndex,
  getHoverBorderColorForIndex,
} from "./data";
import { Container } from "react-bootstrap";
import { FetchUsers } from "../../../Firebase/FetchUsers/FetchUser";

const ViewUsers = () => {
  const [showAll, setShowAll] = useState(false);
  const [userdatafromdb, setUserdatafromdb] = useState([]);

  const displayedUserData = showAll ? userDataArray : userDataArray.slice(0, 6);

  const fetchUsers = async () => {
    const users = await FetchUsers();
    console.log(users);
    setUserdatafromdb(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ViewUserStyles>
      <div Container className="Main-Container">
        <Container xs="12" sm="12" md="12" offset={4}>
          <Typography className="title">View Users</Typography>
          <TableContainer className="Container">
            <Table>
              <TableHead className="table-title">
                <TableRow>
                  <TableCell className="RowTitle">PROFILE</TableCell>
                  <TableCell className="RowTitle">USERNAMES</TableCell>
                  <TableCell className="RowTitle">POST NAMES</TableCell>
                  <TableCell className="RowTitle">DATE</TableCell>
                  <TableCell className="access-cell">ACCESS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {displayedUserData.map((userData, index) => ( */}
                {userdatafromdb.map((userData, index) => (
                  <TableRow key={index}>
                    <TableCell className="tabledata-row">
                      {/* <AccountCircleIcon className="IconStyle" /> */}
                      <img
                        src={userData.picture}
                        alt=""
                        height={40}
                        width={40}
                        style={{ borderRadius: "50%" }}
                      />
                    </TableCell>
                    <TableCell className="tabledata-row">
                      {userData.name}
                    </TableCell>
                    <TableCell className="tabledata-row">
                      {/* {userData.postName} */}
                      sports
                    </TableCell>
                    <TableCell className="tabledata-row">
                      {/* {userData.date} */}
                      15,June
                    </TableCell>
                    <TableCell className="tabledata-row">
                      <div className="inline-access-cell">
                        {AccessButtons.map((userAccess, buttonIndex) => (
                          <StyledButton
                            key={buttonIndex}
                            variant="outlined"
                            title={userAccess.word}
                            textcolor={getTextColorForIndex(buttonIndex)}
                            fontSize={12}
                            letterspacing={1}
                            // disableTouchRipple={true}
                            sx={{
                              backgroundColor: getColorForIndex(buttonIndex),
                              border: `1px solid ${getBorderColorForIndex(
                                buttonIndex
                              )}`,
                              height: "5vh",
                              width: "7vw",
                              "&:hover": {
                                backgroundColor:
                                  getHoverColorForIndex(buttonIndex),
                                color: "new-text-color-for-hover",
                                border: `1px solid ${getHoverBorderColorForIndex(
                                  buttonIndex
                                )}`,
                              },
                            }}
                          />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {userdatafromdb.length > 5 && (
              <div className="arrow-container">
                {userdatafromdb.length > 6 && (
                  <StyledButton
                    onClick={() => setShowAll(!showAll)}
                    disableTouchRipple={true}
                  >
                    {showAll ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </StyledButton>
                )}
              </div>
            )}
          </TableContainer>
        </Container>
      </div>
    </ViewUserStyles>
  );
};
export default ViewUsers;
