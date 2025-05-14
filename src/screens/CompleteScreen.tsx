import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Header } from "../reusable/Header";
import { clearQuestions, goBackQuestion } from "../store/quizSlice";

export const CompleteScreen = () => {
  const dispatch = useDispatch();

  const goback = () => {
    dispatch(goBackQuestion());
  };

  const clear = () => {
    dispatch(clearQuestions());
  };

  return (
    <>
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
        <Typography variant="body1">
          As vossas escolhas ainda não estão guardadas.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "40px" }}>
          Para tal clica em "Exportar resultado", faz download do resultado e
          envia-nos o ficheiro.
        </Typography>
        <button onClick={goback}>Exportar resultado</button>
        <button
          onClick={goback}
          className="link"
          style={{ fontSize: "16px", marginTop: "10px" }}
        >
          Rever questões
        </button>
        <button
          onClick={clear}
          className="link"
          style={{ position: "absolute", bottom: "40px" }}
        >
          Voltar ao início
        </button>
      </div>
    </>
  );
};
