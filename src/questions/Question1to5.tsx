import { Card, CardMedia, Grid, Rating, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { answerQuestion } from "../store/quizSlice";
import { Q1to5 } from "../types";

type QuestionCardProps = {
  question: Q1to5;
};

export const Question1to5: React.FC<QuestionCardProps> = ({ question }) => {
  const dispatch = useDispatch();
  const { options } = question;

  const handleRatingChange = (index: number, value: number | null) => {
    const newOptions = [...options];
    const updatedOption = { ...newOptions[index], pick: value ?? undefined };
    newOptions[index] = updatedOption;
    const updated: Q1to5 = { ...question, options: newOptions };
    dispatch(answerQuestion({ updated }));
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Classifiquem cada uma destas alternativas
      </Typography>
      <Grid
        container
        spacing={8}
        mt={1}
        p={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {options.map((opt, index) => (
          <Grid size={3} key={index}>
            <Card className="option-image">
              <CardMedia
                component="img"
                style={{ maxHeight: "30vh" }}
                image={opt.imageUrl}
              />
            </Card>
            <Typography variant="body1" gutterBottom mt={1}>
              {opt.text}
            </Typography>
            <Rating
              value={opt.pick ?? null}
              onChange={(_, newVal) => handleRatingChange(index, newVal)}
              max={5}
              size="large"
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
