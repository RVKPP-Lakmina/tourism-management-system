import { Stack } from "@mui/material";
import LoginForm from "../../../components/forms/login-form/LoginForm";

const Login = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      height={{ xs: "100vh", sm: "90vh", md: "100vh" }}
      width={"100vw"}
    >
      <Stack
        display={{ xs: "none", sm: "flex", md: "flex" }}
        width={{ xs: "100vw", sm: "50vw", md: "50vw" }}
        height={{ xs: "100vh", sm: "100vh", md: "100vh" }}
      >
        <img
          src="images/logo.jpeg"
          alt="log"
          style={{ width: "50vw", height: "100%" }}
        />
      </Stack>
      <Stack
        p={1}
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100vw", sm: "50vw", md: "50vw" }}
        height={{ xs: "100vh", sm: "90vh", md: "100vh" }}
      >
        <LoginForm />
      </Stack>
    </Stack>
  );
};

export default Login;
