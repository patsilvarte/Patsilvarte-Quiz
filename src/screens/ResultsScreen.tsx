import { Grid, Typography } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import generatePDF from "react-to-pdf";
import patsilvarteLogoWideWhite from "../assets/Patsilvarte_logo_horizontal_white.svg";
import { Result1to5 } from "../questions/Result1to5";
import { ResultAvsB } from "../questions/ResultAvsB";
import { ResultGNNG } from "../questions/ResultGNNG";
import { CleanButton } from "../reusable/CleanButton";
import { UserInfo } from "../reusable/UserInfo";
import { RootState } from "../store";
import { ProgressState } from "../types";

export const ResultsScreen = () => {
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const userInfo = useSelector((state: RootState) => state.quiz.userInfo);
  const progress = useSelector((state: RootState) => state.quiz.progress);
  const navigate = useNavigate();
  const targetRef = useRef(null);

  useEffect(() => {
    if (progress === ProgressState.NotStarted) {
      navigate("/");
    }
  }, [progress]);

  const createPdf = () => {
    let fileName = `resultados-${currentDate}`;
    if (!!userInfo.names && !!userInfo.date) {
      const namePart = userInfo.names?.trim().replace(/\s+/g, "-");
      fileName = `${namePart}-${userInfo.date}.pdf`;
    }
    generatePDF(targetRef, { filename: fileName });
  };

  const currentDate = useMemo(() => {
    const now = new Date();
    const day = String(now.getDate());
    const month = String(now.getMonth() + 1); // Months are 0-based
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
  }, []);

  const listAvsB = questions.filter((q) => q.format === "AvsB");
  const listGNNG = questions.filter((q) => q.format === "GNNG");
  const list1to5 = questions.filter((q) => q.format === "1to5");

  return (
    <div className="results">
      <div className="header fixed">
        <img className="header-logo" src={patsilvarteLogoWideWhite} />
        <CleanButton />
        <button onClick={createPdf}>Download PDF</button>
      </div>
      <div ref={targetRef}>
        <div className="header">
          <img className="header-logo" src={patsilvarteLogoWideWhite} />
          <div>{currentDate}</div>
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
