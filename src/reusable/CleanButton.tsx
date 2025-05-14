import { Box, Modal, Typography } from "@mui/material";
import { CSSProperties, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { clearQuestions } from "../store/quizSlice";

interface CleanButtonProps {
  style?: CSSProperties;
}

export const CleanButton = ({ style }: CleanButtonProps) => {
  const progress = useSelector((state: RootState) => state.quiz.progress);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearQuestions());
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleOpen} className="link" style={style}>
        Voltar ao início
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal">
          <Typography
            id="modal-modal-title"
            variant="h5"
            style={{ fontWeight: 700 }}
          >
            De certeza que querem voltar ao início?
          </Typography>
          <Typography variant="h6" id="modal-modal-description" sx={{ mt: 1 }}>
            Todas as respostas serão apagadas.
          </Typography>
          <div className="modal-actions">
            <button onClick={handleClose} className="link">
              Não
            </button>
            <button onClick={clear} className="link">
              Sim
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
