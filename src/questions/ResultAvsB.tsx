import { Card, CardMedia, Grid } from "@mui/material";
import { QAvsB } from "../types";

export const ResultAvsB = ({ question }: { question: QAvsB }) => {
  if (!question.pick) return <></>;
  const selectedImage =
    question.image1.value === question.pick ? question.image1 : question.image2;

  return (
    <Grid size={2}>
      <Card className="option-image">
        <CardMedia
          component="img"
          height="400"
          image={selectedImage.url}
          alt={selectedImage.value}
        />
      </Card>
    </Grid>
  );
};
