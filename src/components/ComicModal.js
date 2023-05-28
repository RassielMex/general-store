import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import ComicForm from "./ComicForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const ComicModal = ({ open, handleClose, comic }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ComicForm closeModal={handleClose} comic={comic} />
      </Box>
    </Modal>
  );
};

export default ComicModal;
