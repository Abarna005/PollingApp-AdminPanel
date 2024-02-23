import React, { useEffect, useState } from "react";
import CommonTable from "../../Common/Tables/index";
import { IconButton, Typography } from "@mui/material";
import { ExpireTableStyles } from "./style";
import StyledButton from "../../Common/Buttons/index";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ExpireColumns, ExpirePollsDatas } from "../ExpirePolls/data";
import { FetchExpiredPolls } from "../../../Firebase/ExpiredPolls/FetchExpiredPoll";
import { AccountCircle } from "@mui/icons-material";

export default function ExpiredPolls({
  showArrowContainer,
  buttonTitle,
  showButton,
}) {
  const [showAll, setShowAll] = useState(false);
  const [expiredpoll, setExpiredpoll] = useState([]);
  const displayedUserData = showAll ? expiredpoll : expiredpoll.slice(0, 6);

  const fetchexpired = async () => {
    const expired = await FetchExpiredPolls();
    const eobj = expired.map((ep, index) => {
      const time = new Date(ep.expiryDate);
      return {
        id: index + 1,
        profiles: ep.profilePic ? ep.profilePic : <AccountCircle />,
        username: ep.name,
        postname: ep.categoryType,
        question: ep.question,
        date: time.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        }),
      };
    });
    eobj.sort((a, b) => {
      const dA = new Date(a.date);
      const dB = new Date(b.date);
      return dB - dA;
    });
    console.log(eobj);
    setExpiredpoll(eobj);
  };

  useEffect(() => {
    fetchexpired();
  }, []);

  return (
    <ExpireTableStyles>
      <div>
        <div className="contianer">
          <div style={{ marginBottom: "1%" }}>
            <Typography className="title">Expire Polls</Typography>
          </div>
          <CommonTable
            height={"auto"}
            data={displayedUserData}
            columns={ExpireColumns}
          />
          {showButton && (
            <div className="button-container">
              <StyledButton
                title={buttonTitle}
                textcolor={"white"}
                fontWeight={"bold"}
                fontSize={14}
                letterspacing={1}
                textTransform={"none"}
                className={"button-style"}
              />
            </div>
          )}
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
    </ExpireTableStyles>
  );
}
