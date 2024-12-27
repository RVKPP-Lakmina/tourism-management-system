import { Link } from "react-router";
import Grid from "../../ui/GridComponent/Grid";
import { Typography, TextField, Button, Stack } from "@mui/material";

const SignUpForm = () => {
  return (
    <Stack>
      <Stack p={2}>
        <Typography variant="h4" textAlign={"center"}>
          Sign Up
        </Typography>
      </Stack>
      <Stack>
        <Grid
          container
          spacing={{ xs: 2, sm: 0.5, md: 2 }}
          rowGap={{ xs: 5, sm: 2, md: 5 }}
          p={{ xs: 3, sm: 1, md: 3 }}
        >
          <Grid size={{ xs: 12, sm: 4, md: 6 }}>
            <TextField
              sx={{ width: "100%" }}
              type="text"
              placeholder="First Name"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 6 }}>
            <TextField
              sx={{ width: "100%" }}
              type="text"
              placeholder="Last Name"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 6 }}>
            <TextField
              sx={{ width: "100%" }}
              type="text"
              placeholder="Passport No"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 6 }}>
            <TextField
              sx={{ width: "100%" }}
              type="email"
              placeholder="Email"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 6 }}>
            <TextField
              sx={{ width: "100%" }}
              type="password"
              placeholder="Password"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 6 }}>
            <TextField
              sx={{ width: "100%" }}
              type="password"
              placeholder="Confirm Password"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button variant="contained" style={{ width: "100%" }} type="submit">
              Sign Up
            </Button>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body2" textAlign={"center"}>
              Already have an account? <Link to={"/login"}> Login </Link>
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default SignUpForm;
