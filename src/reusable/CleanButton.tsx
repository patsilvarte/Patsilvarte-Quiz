import { CSSProperties, useState } from "react";
import { CleanVerificationModal } from "../modals/CleanVerificationModal";

interface CleanButtonProps {
  style?: CSSProperties;
}

export const CleanButton = ({ style }: CleanButtonProps) => {
  const [open, setOpen] = useState(false);

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
      <CleanVerificationModal open={open} onClose={handleClose} />
    </>
  );
};
