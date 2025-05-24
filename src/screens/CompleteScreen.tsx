import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { CleanButton } from "../reusable/CleanButton";
import { Header } from "../reusable/Header";
import { goBackQuestion } from "../store/quizSlice";

export const CompleteScreen = () => {
  const dispatch = useDispatch();

  const goback = () => {
    dispatch(goBackQuestion());
  };

  const checkResults = () => {
    const url = `${window.location.origin}${window.location.pathname}#/results`;
    window.open(url, "_blank");
  };

  return (
    <div className="root">
      <Header />

      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          flex: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 50px",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          Obrigada pelas vossas respostas
        </Typography>
        <Typography variant="h6">
          Mas vossas escolhas ainda não estão guardadas...
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "40px" }}>
          Exportem o resultado e enviem-nos o ficheiro.
        </Typography>
        <button onClick={checkResults}>Exportar resultado</button>
        <button onClick={goback} className="link" style={{ marginTop: "10px" }}>
          Rever questões
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
        <CleanButton />
      </div>
    </div>
  );
};
