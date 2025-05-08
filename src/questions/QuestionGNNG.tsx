import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Card,
  CardContent,
  CardMedia,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
type QuestionCardProps = {
  question: QGNNG;
  onPick: (value: string) => void;
};

export const QuestionGNNG: React.FC<QuestionCardProps> = ({
  question,
  onPick,
}) => {
  const { imageUrl, field } = question;

  const handleFieldPick = (
    index: number,
    value: { value: boolean | undefined }
  ) => {
    const newField = [...field];
    newField[index].pick = value.value;
    // Make sure to return a full updated question
    onPick(JSON.stringify(newField)); // Pass as string to simplify callback
  };

  return (
    <Card>
      <CardMedia component="img" height="200" image={imageUrl} alt="Main" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Rate each item
        </Typography>
        {field.map((item, index) => (
          <div key={index} style={{ marginBottom: 16 }}>
            <Typography variant="body1" gutterBottom>
              {item.text}
            </Typography>
            <ToggleButtonGroup
              exclusive
              value={item.pick}
              onChange={(_, newVal) => handleFieldPick(index, newVal)}
              size="small"
              color="primary"
            >
              <ToggleButton value={{ value: true }}>
                <ThumbUpIcon />
              </ToggleButton>
              <ToggleButton value={{ value: undefined }}>
                <SentimentNeutralIcon />
              </ToggleButton>
              <ToggleButton value={{ value: false }}>
                <ThumbDownIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
