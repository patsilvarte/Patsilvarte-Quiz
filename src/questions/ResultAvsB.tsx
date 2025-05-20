import { Card, CardMedia, Grid } from "@mui/material";
import { QAvsB } from "../types";

export const ResultAvsB = ({ question }: { question: QAvsB }) => {
  const selectedImage =
    question.image1.value === question.pick ? question.image1 : question.image2;

  return (
    <Grid size={3}>
      <Card className="option-image">
        <CardMedia
          component="img"
          height="200"
          image={selectedImage.url}
          alt={selectedImage.value}
        />
      </Card>
    </Grid>
  );
};
