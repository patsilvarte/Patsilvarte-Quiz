import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { TripleToggleSwitch } from "../reusable/TripleToogleSwitch";
import { answerQuestion } from "../store/quizSlice";
import { QGNNG } from "../types";

type QuestionCardProps = {
  question: QGNNG;
};

export const QuestionGNNG: React.FC<QuestionCardProps> = ({ question }) => {
  const dispatch = useDispatch();
  const { imageUrl, field } = question;

  const onChange = (index: number, value: boolean | undefined) => {
    const fields = [...field];
    const updatedField = { ...fields[index], pick: value };
    fields[index] = updatedField;
    const updated: QGNNG = { ...question, field: fields };

    dispatch(answerQuestion({ updated }));
  };

  return (
    <>
      <Typography variant="h5">O que acham de cada elemento?</Typography>
      <Grid
        container
        spacing={4}
        mt={1}
        p={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Grid size={6}>
          <Card className="option-image">
            <CardMedia
              component="img"
              image={imageUrl}
              style={{ maxHeight: "60vh" }}
            />
          </Card>
        </Grid>
        <Grid
          container
          size={6}
          spacing={2}
          sx={{
            justifyContent: "end",
            alignItems: "baseline",
          }}
        >
          {field.map((item, index) => (
            <React.Fragment key={index}>
              <Grid size={4}>
                <Typography variant="body1">{item.text}</Typography>
              </Grid>
              <Grid size={8}>
                {/* switch has to be feed from pick value */}
                <TripleToggleSwitch
                  onChange={onChange}
                  keyInfo={index}
                  value={item.pick}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
