import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlockPollsDatas } from "../PollsBlock/data";
import { Box, Button, Typography } from "@mui/material";
import ReportCard from "../../Common/ReportCard";
import { ViewReportStyles } from "./style";
import { Col, Container, Row } from "react-bootstrap";
import { NavContext } from "../../Context";
import { UpdateReport } from "../../../Firebase/FetchReportedPolls/FetchReportedPoll";

export default function ViewReport() {
  const { poll_id } = useParams();
  const id = poll_id;
  const { reportedPolls, setReportedPolls } = useContext(NavContext);
  const userdetails = reportedPolls.find((obj) => obj.id === id);
  console.log(userdetails);

  const BlockPoll=async()=>{
    const block=await UpdateReport(userdetails.postnames,userdetails.id);
    console.log(block);
  }

  return (
    <ViewReportStyles>
      <Container fluid className="main-container">
        <Row className="my-3">
          <Col xs={9}>
            <Box className="userbox">
              {typeof userdetails.profiles === "string" ? (
                <img
                  src={userdetails.profiles}
                  alt=""
                  height={45}
                  width={45}
                  className="reportprofile"
                />
              ) : (
                userdetails.profiles
              )}
              <Typography className="usertypo">
                {userdetails.usernames}
              </Typography>
            </Box>
            <Typography className="categorytypo">
              <b>Category</b> : {userdetails.postnames}
            </Typography>
          </Col>
          <Col xs={3}>
            <Box className="buttonbox">
              <Button
                className="action-button"
                onClick={()=>{BlockPoll()}}
              >
                Block
              </Button>
              <Button
                className="action-button"
                // onClick={() => action(id)}
                style={{
                  backgroundColor: "#ccc",
                  color: "#444",
                }}
              >
                Cancel
              </Button>
            </Box>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Box className="infotext">
              <Typography className="reporttypo" variant="caption">
                Reported Messages
              </Typography>
              <Typography className="reporttypo" variant="caption">
                <b> {userdetails.msgs.length} </b> Reports
              </Typography>
            </Box>
            <Box className="card-box">
              <div className="card-div">
                {userdetails.msgs.map((msg) => (
                  <ReportCard msg={msg} />
                ))}
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </ViewReportStyles>
  );
}
