import React from "react";
import { useParams } from "react-router-dom";
import { BlockPollsDatas } from "../PollsBlock/data";
import { Box, Button, Typography } from "@mui/material";
import ReportCard from "../../Common/ReportCard";
import { ViewReportStyles } from "./style";
import { Col, Container, Row } from "react-bootstrap";

export default function ViewReport() {
  const { key } = useParams();
  const id = Number(key);
  const userdetails = BlockPollsDatas.find((obj) => obj.id === id);
  console.log(userdetails);
  return (
    <ViewReportStyles>
      <Container fluid className="main-container">
        <Row className="my-3">
          <Col xs={9}>
            <Box className="userbox">
              {userdetails.profiles}
              <Typography className="usertypo">
                {userdetails.usernames}
              </Typography>
            </Box>
            <Typography className="categorytypo">
              Category : {userdetails.postnames}
            </Typography>
          </Col>
          <Col xs={3}>
            <Box className="buttonbox">
              <Button
                className="action-button"
                // onClick={() => action(id)}
              >
                Block
              </Button>
              <Button
                className="action-button"
                // onClick={() => action(id)}
                style={{
                  backgroundColor: "#ccc",
                  color:'#444'
                }}
              >
                Cancel
              </Button>
            </Box>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Typography className="reporttypo" variant="caption" >Report Messages</Typography>
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
