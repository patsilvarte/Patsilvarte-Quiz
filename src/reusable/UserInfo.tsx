import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserInfoModal } from "../modals/UserInfoModal";
import { RootState } from "../store";
import MultiColorPicker from "./MultiColorPicker";

export const UserInfo = () => {
  const userInfo = useSelector((state: RootState) => state.quiz.userInfo);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="user-info">
        <Typography variant="h6">
          Casamento de <span className="highlight">{userInfo.names}</span> no
          dia <span className="highlight">{userInfo.date}</span> com as cores
        </Typography>
        <MultiColorPicker colors={userInfo.colors ?? []} setColors={() => {}} />
        <button
          onClick={handleOpen}
          className="link"
          style={{ position: "absolute", right: 40 }}
        >
          <EditIcon />
        </button>
      </div>
      <UserInfoModal open={open} onClose={handleClose} />
    </>
  );
};
