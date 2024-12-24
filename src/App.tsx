import { CssBaseline, Stack } from "@mui/material";
import Login from "./pages/authentication/login/Login";

const App = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      height={"100vh"}
      width={"100vw"}
    >
      <CssBaseline />
      <Login />
    </Stack>
  );
};

export default App;
