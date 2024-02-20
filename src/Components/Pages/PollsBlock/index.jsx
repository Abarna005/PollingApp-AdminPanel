import React, { useContext, useEffect, useState } from "react";
import CommonTable from "../../Common/Tables/index";
import { Button, IconButton, Typography } from "@mui/material";
import { BlockTableStyles } from "./style";
import StyledButton from "../../Common/Buttons/index";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { BlockPollColumns, BlockPollsDatas } from "./data";
import { FetchReportedPoll } from "../../../Firebase/FetchReportedPolls/FetchReportedPoll";
import { Link } from "react-router-dom";
import { NavContext } from "../../Context";
import { AccountCircle } from "@mui/icons-material";

export default function BlockPolls({ showButton }) {
  const [showAll, setShowAll] = useState(false);
  // const [reportedPolls, setReportedPolls] = useState([]);
  const {reportedPolls,setReportedPolls}=useContext(NavContext);

  const displayedUserData = showAll ? reportedPolls : reportedPolls.slice(0, 6);
  // const displayedUserData = showAll ? BlockPollsDatas : BlockPollsDatas.slice(0, 6);

  const handleReject = (id) => {
    // Implement the logic for rejecting the request
    console.log(`Request with ID ${id} rejected.`);
  };

  const createActionButton = (id, action) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to={`/viewreport/${id}`} style={{ textDecoration: "none" }}>
        <Button
          onClick={() => action(id)}
          style={{
            backgroundColor: "#0963c0eb",
            color: "#fff",
            fontWeight: "bold",
            padding: "3%",
            width: "40%",
            textAlign: "center",
            fontSize: "12px",
          }}
        >
          {action === handleReject ? "View" : "nsdf"}
        </Button>
      </Link>
    </div>
  );

  const getReportedPolls = async () => {
    const reportedpolls = await FetchReportedPoll();
    console.log(reportedpolls);
    const reportobj = reportedpolls.map((rp, index) => ({
      id: rp[0],
      profiles: rp[1].profile?rp[1].profile:<AccountCircle/>,
      usernames: rp[1].name,
      postnames: rp[1].category,
      block: createActionButton(rp[0], handleReject),
      msgs: Object.values(rp[1].ReportedUser),
    }));
    console.log(reportobj);
    setReportedPolls(reportobj);
  };

  useEffect(() => {
    getReportedPolls();
  }, []);

  return (
    <BlockTableStyles>
      <div>
        <div className="contianer">
          <div style={{ marginBottom: "1%" }}>
            <Typography className="title">Block Polls</Typography>
          </div>
          <CommonTable
            height={"auto"}
            data={displayedUserData}
            columns={BlockPollColumns}
          />
          <div className="arrow-container">
            <IconButton onClick={() => setShowAll(!showAll)} disableTouchRipple={true}>
              {showAll ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </div>
          {/* {displayedUserData.length > 6 && (
            <div className="arrow-container">
              <IconButton
                onClick={() => setShowAll(!showAll)}
                disableTouchRipple={true}
              >
                {showAll ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </IconButton>
            </div>
          )} */}
        </div>
      </div>
    </BlockTableStyles>
  );
}
