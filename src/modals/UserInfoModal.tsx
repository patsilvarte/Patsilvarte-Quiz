import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import MultiColorPicker from "../reusable/MultiColorPicker";

interface UserInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export const UserInfoModal = ({ open, onClose }: UserInfoModalProps) => {
  const [names, setNames] = useState("");
  const [date, setDate] = useState("");
  const [colors, setColors] = useState<string[]>([]);

  const onContinue = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal">
        <Typography variant="h4" style={{ fontWeight: 700 }} sx={{ mb: 1 }}>
          Dados dos Noivos
        </Typography>
        <div className="user-info">
          <div className="user-info-section">
            <label htmlFor="nomes">Nomes: </label>
            <input
              aria-label="nomes"
              type="text"
              onChange={(e) => setNames(e.target.value)}
            />
          </div>
          <div className="user-info-section">
            <label htmlFor="data">Data do casamento: </label>
            <input
              aria-label="data"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="color-picker user-info-section">
            <label>Cores: </label>
            <MultiColorPicker allowEdit saveColors={setColors} />
          </div>
        </div>
        <div className="modal-actions">
          <button onClick={onClose} className="link">
            Cancel
          </button>
          <button onClick={onContinue} className="link">
            Save
          </button>
        </div>
      </Box>
    </Modal>
  );
};
