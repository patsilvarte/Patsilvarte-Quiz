import { Grid } from "@mui/material";
import MultiColorPicker from "./MultiColorPicker";

export const UserInfoForm = () => {
  return (
    <Grid container className="extra-info" spacing={4}>
      <Grid size={4}>
        <label htmlFor="nomes">Nome dos noivos: </label>
        <input aria-label="nomes" type="text" />
      </Grid>
      <Grid size={4}>
        <label htmlFor="data">Data do casamento: </label>
        <input aria-label="data" type="date" />
      </Grid>
      <Grid size={4} className="color-picker">
        <label>Cores: </label>
        <MultiColorPicker />
      </Grid>
    </Grid>
  );
};
