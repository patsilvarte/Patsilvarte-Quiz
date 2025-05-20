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

  const hasNames = !!userInfo.names && userInfo.names !== "";
  const hasDate = !!userInfo.date && userInfo.date !== "";
  const hasColors = !!userInfo.colors && userInfo.colors?.length !== 0;
  const hasUserInfo = !!userInfo && (hasColors || hasNames || hasDate);

  return (
    <>
      <div className="user-info">
        {hasUserInfo ? (
          <>
            <Typography variant="h6">
              Casamento
              {hasNames && " de "}
              {hasNames && <span className="highlight">{userInfo.names}</span>}
              {hasDate && " no dia "}
              {hasDate && <span className="highlight">{userInfo.date}</span>}
              {hasColors && " com as cores "}
            </Typography>
            {hasColors && (
              <MultiColorPicker
                colors={userInfo.colors ?? []}
                setColors={() => {}}
              />
            )}
            <button
              onClick={handleOpen}
              className="link"
              style={{ position: "absolute", right: 40 }}
            >
              <EditIcon />
            </button>
          </>
        ) : (
          <>
            <Typography variant="h6">
              Queremos saber mais sobre o vosso camsamento
            </Typography>
            <button
              onClick={handleOpen}
              className="link"
              style={{ position: "absolute", right: 40 }}
            >
              Adicionar informação
            </button>
          </>
        )}
      </div>
      <UserInfoModal open={open} onClose={handleClose} />
    </>
  );
};
