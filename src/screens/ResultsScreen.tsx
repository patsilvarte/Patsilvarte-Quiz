import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { usePDF } from "react-to-pdf";
import patsilvarteLogoWideWhite from "../assets/Patsilvarte_logo_horizontal_white.svg";
import { Result1to5 } from "../questions/Result1to5";
import { ResultAvsB } from "../questions/ResultAvsB";
import { ResultGNNG } from "../questions/ResultGNNG";
import { UserInfo } from "../reusable/UserInfo";
import { RootState } from "../store";

export const ResultsScreen = () => {
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const listAvsB = questions.filter((q) => q.format === "AvsB");
  const listGNNG = questions.filter((q) => q.format === "GNNG");
  const list1to5 = questions.filter((q) => q.format === "1to5");

  return (
    <div className="results">
      <div className="header fixed">
        <img className="header-logo" src={patsilvarteLogoWideWhite} />
        <button onClick={() => toPDF()}>Download PDF</button>
      </div>
      <div ref={targetRef}>
        <div className="header">
          <img className="header-logo" src={patsilvarteLogoWideWhite} />
        </div>
        <UserInfo />
        <div className="results-box">
          {listAvsB.length !== 0 && (
            <div className="result-question">
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                Opções selecionadas
              </Typography>
              <Grid container>
                {listAvsB.map((question) => (
                  <ResultAvsB question={question} />
                ))}
              </Grid>
            </div>
          )}
          {listGNNG.length !== 0 && (
            <div className="result-question">
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                Preferências por exemplo
              </Typography>
              {listGNNG.map((question) => (
                <ResultGNNG question={question} />
              ))}
            </div>
          )}
          {list1to5.length !== 0 && (
            <div className="result-question">
              <Typography variant="h5" style={{ marginBottom: 10 }}>
                Elementos por relevância
              </Typography>
              <Result1to5 list={list1to5} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
