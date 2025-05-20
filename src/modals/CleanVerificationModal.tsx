import { Box, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearQuestions } from "../store/quizSlice";

interface CleanVerificationModalProps {
  onClose: () => void;
  open: boolean;
}

export const CleanVerificationModal = ({
  open,
  onClose,
}: CleanVerificationModalProps) => {
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearQuestions());
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal">
        <Typography variant="h5" style={{ fontWeight: 700 }}>
          De certeza que querem voltar ao início?
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Todas as respostas serão apagadas.
        </Typography>
        <div className="modal-actions">
          <button onClick={onClose} className="link">
            Não
          </button>
          <button onClick={clear} className="link">
            Sim
          </button>
        </div>
      </Box>
    </Modal>
  );
};
