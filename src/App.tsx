import { CssBaseline, Stack } from "@mui/material";
import SignUp from "./pages/authentication/sign-up/SignUp";

const App = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      height={"100vh"}
      width={"100vw"}
    >
      <CssBaseline />
      {/* <Login /> */}
      <SignUp />
    </Stack>
  );
};

export default App;
