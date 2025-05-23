import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { QGNNG, QGNNGOption } from "../types";

interface ListProps {
  text: string;
  list: QGNNGOption[];
  style?: CSSProperties;
}
const List = ({ text, list, style }: ListProps) => {
  if (list.length === 0) return;

  return (
    <div className="result-gnng-option-list" style={style}>
      <Typography variant="h6">{text}</Typography>
      {list.map((op) => (
        <Typography variant="body1">{op.text}</Typography>
      ))}
    </div>
  );
};

export const ResultGNNG = ({ question }: { question: QGNNG }) => {
  const optionsG = question.field.filter((op) => op.pick === true);
  const optionsNG = question.field.filter((op) => op.pick === false);
  const optionsN = question.field.filter((op) => op.pick === undefined);

  return (
    <Grid container size={6} spacing={2}>
      <Grid size={4}>
        <Card className="option-image">
          <CardMedia component="img" height="400" image={question.imageUrl} />
        </Card>
      </Grid>
      <Grid size={8}>
        <List text="Gosto" list={optionsG} style={{ color: "green" }} />
        <List text="Não Gosto" list={optionsNG} style={{ color: "red" }} />
        <List text="Neutro" list={optionsN} style={{ color: "grey" }} />
      </Grid>
    </Grid>
  );
};
