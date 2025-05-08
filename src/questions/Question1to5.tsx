import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

type QuestionCardProps = {
  question: Q1to5;
  onPick: (value: string) => void;
};

export const Question1to5: React.FC<QuestionCardProps> = ({
  question,
  onPick,
}) => {
  const { options } = question;

  const handleRatingChange = (index: number, value: number | null) => {
    const newOptions = [...options];
    newOptions[index].pick = value ?? undefined;
    onPick(JSON.stringify(newOptions));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Rate each option from 1 to 5
        </Typography>
        {options.map((opt, index) => (
          <div key={index} style={{ marginBottom: 24 }}>
            <CardMedia
              component="img"
              height="140"
              image={opt.imageUrl}
              alt={`Option ${index + 1}`}
              style={{ borderRadius: 8 }}
            />
            <Rating
              value={opt.pick ?? null}
              onChange={(_, newVal) => handleRatingChange(index, newVal)}
              max={5}
              size="large"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
