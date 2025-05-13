import { Card, CardMedia, Grid, Slider, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { answerQuestion } from "../store/quizSlice";

type QuestionCardProps = {
  question: QGNNG;
};

export const QuestionGNNG: React.FC<QuestionCardProps> = ({ question }) => {
  const dispatch = useDispatch();
  const { imageUrl, field } = question;

  const onChange = (index: number, value: boolean | undefined) => {
    const updated: QGNNG = { ...question };
    updated.field[index].pick = value;
    dispatch(answerQuestion({ updated }));
  };

  const marks = [
    {
      value: 0,
      label: "Não Gosto",
    },
    {
      value: 50,
      label: "Neutro",
    },
    {
      value: 100,
      label: "Gosto",
    },
  ];
  const valuetext = (value: number) => {
    return marks.find((option) => option.value === value)?.label || "";
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
        <Grid size={6}>
          {field.map((item, index) => (
            <div key={index} style={{ marginBottom: 16 }}>
              <Typography variant="body1" gutterBottom>
                {item.text}
              </Typography>
              <Slider
                defaultValue={50}
                getAriaValueText={valuetext}
                step={null}
                marks={marks}
              />
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
