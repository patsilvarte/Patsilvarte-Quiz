import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { CutomModal } from "../reusable/CutomModal";
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
    <CutomModal
      title="De certeza que querem voltar ao início?"
      highlightText="Não"
      onHighlightClick={onClose}
      nohighlightText="Sim"
      onNoHighlightClick={clear}
      open={open}
      onClose={onClose}
    >
      <Typography variant="h6" sx={{ mt: 1 }}>
        Todas as respostas serão apagadas.
      </Typography>
    </CutomModal>
  );
};
