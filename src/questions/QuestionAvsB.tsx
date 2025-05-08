import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

type QuestionCardProps = {
  question: QAvsB;
  onPick: (value: string) => void;
};

export const QuestionAvsB: React.FC<QuestionCardProps> = ({
  question,
  onPick,
}) => {
  const { image1, image2, pick } = question;

  const isPicked = (val: string) => pick === val;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Which do you prefer?</Typography>
        <Grid container spacing={2} mt={2}>
          {[image1, image2].map((img) => (
            <Grid key={img.value}>
              <CardActionArea onClick={() => onPick(img.value)}>
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
                  <CardContent>
                    <Typography align="center">{img.value}</Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
