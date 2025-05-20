import { Card, CardMedia, Grid, Rating } from "@mui/material";
import { Q1to5 } from "../types";

/* interface ListProps {
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
}; */

const groupOptionsByPick = (list: Q1to5[]) => {
  const result: { [key: number]: { imageUrl: string; pick: number }[] } = {};

  for (const question of list) {
    for (const option of question.options) {
      if (option.pick !== undefined) {
        if (!result[option.pick]) {
          result[option.pick] = [];
        }
        result[option.pick].push({
          imageUrl: option.imageUrl,
          pick: option.pick,
        });
      }
    }
  }

  return result;
};

interface ScoreOptionsProps {
  score: number;
  list: { imageUrl: string }[];
}
export const ScoreOptions = ({ score, list }: ScoreOptionsProps) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Rating readOnly value={score} size="large" style={{ marginTop: 10 }} />
      <Grid container spacing={4}>
        {list.map((op, index) => (
          <Grid size={3} key={index}>
            <Card className="option-image">
              <CardMedia component="img" height="200" image={op.imageUrl} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export const Result1to5 = ({ list }: { list: Q1to5[] }) => {
  const optionsByScore = groupOptionsByPick(list);

  return (
    <div>
      {optionsByScore["5"] && optionsByScore["5"].length !== 0 && (
        <ScoreOptions score={5} list={optionsByScore["5"]} />
      )}
      {optionsByScore["4"] && optionsByScore["4"].length !== 0 && (
        <ScoreOptions score={4} list={optionsByScore["4"]} />
      )}
      {optionsByScore["3"] && optionsByScore["3"].length !== 0 && (
        <ScoreOptions score={3} list={optionsByScore["3"]} />
      )}
      {optionsByScore["2"] && optionsByScore["2"].length !== 0 && (
        <ScoreOptions score={2} list={optionsByScore["2"]} />
      )}
      {optionsByScore["1"] && optionsByScore["1"].length !== 0 && (
        <ScoreOptions score={1} list={optionsByScore["1"]} />
      )}
    </div>
  );
};
