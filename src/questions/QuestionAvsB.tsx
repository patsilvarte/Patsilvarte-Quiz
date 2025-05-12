import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { answerQuestion } from "../store/quizSlice";

type QuestionCardProps = {
  question: QAvsB;
};

export const QuestionAvsB: React.FC<QuestionCardProps> = ({ question }) => {
  const dispatch = useDispatch();

  const { image1, image2, pick } = question;
  const isPicked = (val: string) => pick === val;

  const onChange = (value: string) => {
    const updated: QAvsB = { ...question, pick: value };
    dispatch(answerQuestion({ updated }));
  };

  return (
    <>
      <Typography variant="h6">Which do you prefer?</Typography>
      <Grid container spacing={2} mt={2}>
        {[image1, image2].map((img) => (
          <Grid key={img.value}>
            <div onClick={() => onChange(img.value)}>
              <Card
                sx={{
                  border: isPicked(img.value)
                    ? "2px solid #1976d2"
                    : "1px solid #ccc",
                  borderRadius: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={img.url}
                  alt={img.value}
                />
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
