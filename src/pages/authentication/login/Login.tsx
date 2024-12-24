import { Stack } from "@mui/material";

const Login = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      height={"100vh"}
      width={"100vw"}
    >
      <Stack style={{ width: "50vw", height: "100%" }}>
        <img
          src="images/logo.jpeg"
          alt="log"
          style={{ width: "50vw", height: "100%" }}
        />
      </Stack>
    </Stack>
  );
};

export default Login;
