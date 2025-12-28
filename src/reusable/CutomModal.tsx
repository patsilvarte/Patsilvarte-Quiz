import { Box, Modal, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface CustomModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  title: string;
  nohighlightText: string;
  onNoHighlightClick: () => void;
  highlightText: string;
  onHighlightClick: () => void;
}

export const CutomModal = ({
  open,
  onClose,
  title,
  children,
  onHighlightClick,
  highlightText,
  onNoHighlightClick,
  nohighlightText,
}: CustomModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal">
        <Typography variant="h5" style={{ fontWeight: 700 }} sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
        <div className="modal-actions">
          <button onClick={onNoHighlightClick} className="modal-button">
            {nohighlightText}
          </button>
          <button onClick={onHighlightClick} className="highlight modal-button">
            {highlightText}
          </button>
        </div>
      </Box>
    </Modal>
  );
};
