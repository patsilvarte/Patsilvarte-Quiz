import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { useDispatch } from "react-redux";
import { answerQuestion } from "../store/quizSlice";

type QuestionCardProps = {
  question: QAvsB;
};

export const QuestionAvsB: React.FC<QuestionCardProps> = ({ question }) => {
  const dispatch = useDispatch();

  const { image1, image2, pick } = question;

  const onChange = (value: string) => {
    const isPicked = pick === value;
    const updated: QAvsB = { ...question };
    if (isPicked) {
      updated.pick = undefined;
    } else {
      updated.pick = value;
    }
    dispatch(answerQuestion({ updated }));
  };

  const getStyle = (value: string) => {
    const isPicked = pick === value;
    if (!pick) {
      return {} as CSSProperties;
    }
    if (isPicked) {
      return {
        borderColor: "#535931",
        // scale: 1.2,
        transform: "scale(1.2)",
      } as CSSProperties;
    }
    return {
      // scale: 0.8,
      transform: "scale(0.8)",
    } as CSSProperties;
  };

  return (
    <>
      <Typography variant="h5">De qual opção gostam mais?</Typography>
      <Grid
        container
        spacing={8}
        mt={2}
        p={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {[image1, image2].map((img) => (
          <Grid key={img.value} size={6}>
            <div onClick={(e) => onChange(img.value)}>
              <Card sx={getStyle(img.value)} className="option-image">
                <CardMedia
                  component="img"
                  height="300"
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
