import React from "react";
import { ReportCardStyles } from "./style";
import { Box, Card, Typography } from "@mui/material";

export default function ReportCard({ msg }) {
  return (
    <ReportCardStyles>
      <Card msg={msg} className="card">
        <Box>
          {typeof msg.profile === "string" ? (
            <img src={msg.profile} alt="" height={40} width={40} className="userimages" />
          ) : (
            msg.profile
          )}
          <Typography className="uname" variant="caption">
            {msg.name}
          </Typography>
        </Box>
        <Typography className="messsagetypo">{msg.report}</Typography>
        {msg.reportText && (
          <Typography variant="caption" className="reportText">
            {msg.reportText}
          </Typography>
        )}
      </Card>
    </ReportCardStyles>
  );
}
