import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import CommonTable from "../../Common/Tables/index";
import { CatReqStyles } from "./style";
import { Typography } from "@mui/material";
import { RequestColumns, RequestDatas } from "./data";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { FetchSuperUser } from "../../../Firebase/FetchSuperUser/FetchSuperUser";
import { AccountCircle } from "@mui/icons-material";
import {
  GrantSuperUser,
  RejectSuperUser,
} from "../../../Firebase/FetchSuperUser/UserAccess";

export default function SuperUser() {
  const [showAll, setShowAll] = useState(false);
  const [superuser, setSuperuser] = useState([]);

  const displayedUserData = showAll ? superuser : superuser.slice(0, 5);

  const getSuperUsers = async () => {
    const susers = await FetchSuperUser();
    console.log(susers);
    const sobj = susers.map((val, index) => ({
      id: index + 1,
      profiles: val.picture ? val.picture : <AccountCircle />,
      usernames: val.name,
      grant: createActionButton(val.uid, handleAccept),
      reject: createActionButton(val.uid, handleReject),
    }));
    console.log(sobj);
    setSuperuser(sobj);
  };

  const handleAccept = async (uid) => {
    // Implement the logic for accepting the request
    const grant = await GrantSuperUser(uid);
    getSuperUsers();
  };

  const handleReject = async (uid) => {
    // Implement the logic for rejecting the request
    const reject = await RejectSuperUser(uid);
    getSuperUsers();
  };

  const createActionButton = (uid, action) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={() => action(uid)}
        variant={action === handleAccept ? "contained" : "outlined"}
        style={{
          backgroundColor: action === handleAccept ? "green" : "white",
          color: action === handleAccept ? "#fff" : "red",
          borderColor: action === handleAccept ? "none" : "red",
          fontWeight: "bold",
          padding: "3%",
          width: "8vw",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        {action === handleAccept ? "Grant" : "Reject"}
      </Button>
    </div>
  );

  useEffect(() => {
    getSuperUsers();
  }, []);

  return (
    <CatReqStyles>
      <div className="main-container">
        <Typography className="title">SuperUser Requests</Typography>
        <div className="tablewrapper">
          <CommonTable
            className="imgsize"
            columns={RequestColumns}
            data={displayedUserData}
          />
          <div className="arrow-container">
            <IconButton
              onClick={() => setShowAll(!showAll)}
              disableTouchRipple={true}
            >
              {showAll ? (
                <ArrowDropUpIcon sx={{ color: "#004f83" }} />
              ) : (
                <ArrowDropDownIcon sx={{ color: "#004f83" }} />
              )}
            </IconButton>
          </div>
        </div>
      </div>
    </CatReqStyles>
  );
}
