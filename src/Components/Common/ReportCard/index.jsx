import React from "react";
import { ReportCardStyles } from "./style";
import { Box, Card, Typography } from "@mui/material";

export default function ReportCard({ msg }) {
  return (
    <ReportCardStyles>
      <Card msg={msg} className="card">
        <Box>
          {msg.profilePic}
          <Typography
            className="uname"
            variant="caption"
          >
            {msg.uname}
          </Typography>
        </Box>
        <Typography className="messsagetypo">{msg.msg}</Typography>
      </Card>
    </ReportCardStyles>
  );
}
