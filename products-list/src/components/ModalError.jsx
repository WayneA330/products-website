import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";

const ModalError = () => {
  const rootRef = React.useRef(null);

  return (
    <>
      <div>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          sx={{
            display: "flex",
            p: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          container={() => rootRef.current}
        >
          <Box
            sx={{
              position: "relative",
              width: 400,
              backgroundColor: "white",
              border: "1px solid #000",
              borderRadius: "10px",
              p: 4,
            }}
          >
            <Typography
              id="server-modal-description"
              sx={{ textAlign: "center" }}
            >
              An error occured while searching for the necessary data. Please
              try agin later.
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ModalError;
