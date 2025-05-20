import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";
import { useState } from "react";
import { UserInfoModal } from "../modals/UserInfoModal";
import MultiColorPicker from "./MultiColorPicker";

export const UserInfo = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="extra-info">
        <Typography variant="h6" sx={{ mt: 1 }}>
          Nome dos noivos: {}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Data do casamento: {}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Cores:
        </Typography>
        <MultiColorPicker />
        <button onClick={handleOpen} className="link">
          <EditIcon />
        </button>
      </div>
      <UserInfoModal open={open} onClose={handleClose} />
    </>
  );
};
