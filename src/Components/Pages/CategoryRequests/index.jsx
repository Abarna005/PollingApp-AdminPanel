import React, { useState } from "react";
import { IconButton } from "@mui/material";
import CommonTable from "../../Common/Tables/index";
import { CatReqStyles } from "./style";
import { Typography } from "@mui/material";
import { RequestColumns, RequestDatas } from "./data";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function CategoryRequests() {
  const [showAll, setShowAll] = useState(false);
  const displayedUserData = showAll ? RequestDatas : RequestDatas.slice(0, 5);
  return (
    <CatReqStyles>
      <div className="main-container">
        <Typography className="title">Category Requests</Typography>
        <div className="tablewrapper">
          <CommonTable columns={RequestColumns} data={displayedUserData} />
          <div className="arrow-container">
            <IconButton
              onClick={() => setShowAll(!showAll)}
              disableTouchRipple={true}
            >
              {showAll ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </div>
        </div>
      </div>
    </CatReqStyles>
  );
}
