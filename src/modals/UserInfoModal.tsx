import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CutomModal } from "../reusable/CutomModal";
import MultiColorPicker from "../reusable/MultiColorPicker";
import { RootState } from "../store";
import { saveUserInfo } from "../store/quizSlice";
import { UserInfo } from "../types";

interface UserInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export const UserInfoModal = ({ open, onClose }: UserInfoModalProps) => {
  const userInfo = useSelector((state: RootState) => state.quiz.userInfo);

  const [names, setNames] = useState(userInfo.names || "");
  const [date, setDate] = useState(userInfo.date || "");
  const [colors, setColors] = useState<string[]>(userInfo.colors || []);
  const dispatch = useDispatch();

  const onContinue = () => {
    const userInfo: UserInfo = {
      names,
      date,
      colors,
    };
    dispatch(saveUserInfo(userInfo));
    onClose();
  };

  return (
    <CutomModal
      title="Dados dos Noivos"
      highlightText="Guardar"
      onHighlightClick={onContinue}
      nohighlightText="Cancelar"
      onNoHighlightClick={onClose}
      open={open}
      onClose={onClose}
    >
      <div className="user-info-modal">
        <div className="input-section">
          <label htmlFor="nomes">Nomes: </label>
          <input
            aria-label="nomes"
            type="text"
            value={names}
            onChange={(e) => setNames(e.target.value)}
          />
        </div>
        <div className="input-section">
          <label htmlFor="data">Data do casamento: </label>
          <input
            aria-label="data"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-section">
          <label>Cores: </label>
          <MultiColorPicker allowEdit colors={colors} setColors={setColors} />
        </div>
      </div>
    </CutomModal>
  );
};
