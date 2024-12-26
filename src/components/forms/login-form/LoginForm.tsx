import Grid from "../../ui/GridComponent/Grid";
import { Button, Stack, TextField, Typography } from "@mui/material";

const LoginForm = () => {
  return (
    <Stack justifyContent={"center"}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        mt={{ xs: 0, sm: 2, md: 0 }}
        mb={{ xs: 3, sm: 2, md: 5 }}
      >
        <Typography variant="h4">Login</Typography>
      </Stack>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        px={{ xs: 3, md: 10 }}
      >
        <Grid
          container
          spacing={2}
          rowGap={{ xs: 5, sm: 2, md: 5 }}
          p={{ xs: 3, sm: 1, md: 5 }}
        >
          <Grid size={{ xs: 12 }}>
            <TextField
              sx={{ width: "100%" }}
              type="text"
              placeholder="Username"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              sx={{ width: "100%" }}
              type="password"
              placeholder="Password"
            />
          </Grid>
          <Grid size={{ xs: 12 }} mt={{ xs: 3, sm: 5, md: 5 }}>
            <Button variant="contained" style={{ width: "100%" }} type="submit">
              Login
            </Button>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body2" textAlign={"center"}>
              Don't have an account? <a href="/">Sign Up</a>
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
