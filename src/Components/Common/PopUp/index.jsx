import React, { useState } from "react";
import { Toast } from "primereact/toast";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const StyledPopUpBox = styled("div")`
  .popup-container {
    background-color: white;
    padding: 20px;
    width: 300px;

    text-align: center;
    position: relative;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.28));
    border-radius: 8px;
  }

  .custom-summary {
    color: black;
    position: relative;
    font-weight: bold;
  }

  .custom-detail {
    color: red;
    font-weight: bold;
  }
  .confirm-Toast-container {
    // background: linear-gradient(
    //   45deg,
    //   rgba(124, 77, 255, 0.5),
    //   rgba(255, 255, 255, 0.2)
    // );
    // backdrop-filter: blur(10px); 
    background-color:white;
    border: 1px solid rgba(255, 255, 255, 0.2); 
    padding: 20px;
    width: 300px;
    text-align: center;
    position: relative;
    border-radius: 8px;
    margin: 20px;
  }

  .custom-toast-warn {
    background-color: #ff9800; /* Orange */
    color: white;
  }
  .horizontal-line {
    color: white;
  }
  .Removable-icon {
    // margin-left: 100px;
  }
`;

export default function BasicDemo({RemoveCategory,catName,catIcon}) {
  const toast = React.useRef(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
     if (RemoveCategory) {
       RemoveCategory(catName,catIcon);
     }

    toast.current.show({
      //   severity: "warn",
      summary: (
        <div className="custom-summary">
          <WarningAmberIcon
            style={{ color: "green", marginRight: "5%", marginTop: "2%" }}
          />
          Cancelled
          <hr className="horizontal-line" />
        </div>
      ),
      detail: <div className="custom-detail"> Category Removed</div>,
      life: 3000,
      className: "confirm-Toast-container", // Apply custom style class
    });

    setOpen(false);
  };

  const handleReject = () => {
    // toast.current.show({
    //   //   severity: "warn",
    //   summary: (
    //     <div className="custom-summary">
    //       <WarningAmberIcon
    //         style={{ color: "green", marginRight: "5%", marginTop: "2%" }}
    //       />
    //       Cancelled
    //       <hr className="horizontal-line" />
    //     </div>
    //   ),
    //   detail: <div className="custom-detail">Cancel the Category</div>,
    //   life: 3000,
    //   className: "confirm-Toast-container", // Apply custom style class
    // });

    setOpen(false);
  };

  const handleConfirmClick = () => {
    //  console.log("Confirm button clicked for category ID:", catId);
    setOpen(true);
  };

  return (
    <StyledPopUpBox>
      <Toast ref={toast} />
      <div>
        <div
          onClick={handleConfirmClick}
          variant="contained"
          color="primary"
          className="Removable-icon"
          style={{
            position: "relative",
            backgroundColor: "transparent",
            color: "black",
          }}
        >
          <RemoveCircleOutlineIcon
            style={{ position: "absolute", bottom: "3", left: "100%", color:"#004f83" }}
            fontSize="100px"
          />
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ fontSize: 15, fontWeight: "bold" }}>
          Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontSize: 13, fontWeight: "bold" }}>
            Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleReject}
            style={{ color: "#7C4DFF", fontWeight: "bold", fontSize: 12 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            style={{ color: "red", fontWeight: "bold", fontSize: 12 }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </StyledPopUpBox>
  );
}
