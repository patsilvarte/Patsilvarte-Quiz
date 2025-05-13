import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { TripleToggleSwitch } from "../reusable/TripleToogleSwitch";
import { answerQuestion } from "../store/quizSlice";

type QuestionCardProps = {
  question: QGNNG;
};

export const QuestionGNNG: React.FC<QuestionCardProps> = ({ question }) => {
  const dispatch = useDispatch();
  const { imageUrl, field } = question;

  const onChange = (index: number, value: boolean | undefined) => {
    const fields = [...field];
    fields[index].pick = value;
    const updated: QGNNG = { ...question, field: fields };

    dispatch(answerQuestion({ updated }));
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        O que acham de cada elemento?
      </Typography>
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
        <Grid size={6}>
          <Card className="option-image">
            <CardMedia component="img" height="300" image={imageUrl} />
          </Card>
        </Grid>
        <Grid
          container
          size={6}
          spacing={4}
          sx={{
            justifyContent: "end",
            alignItems: "baseline",
          }}
        >
          {field.map((item, index) => (
            <>
              <Grid key={index}>
                <Typography variant="body1" gutterBottom>
                  {item.text}
                </Typography>
              </Grid>
              <Grid key={index} size={9}>
                <TripleToggleSwitch onChange={onChange} keyInfo={index} />
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
