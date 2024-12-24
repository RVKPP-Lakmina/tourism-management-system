import Grid, { Grid2TypeMap } from "@mui/material/Grid2";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type GridComponentsProps = OverridableComponent<Grid2TypeMap>;

const GridComponents: React.FC<GridComponentsProps> = (
  props: GridComponentsProps
) => {
  return <Grid {...props} />;
};

export default GridComponents;
