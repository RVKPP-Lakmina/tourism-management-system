import { Stack } from "@mui/material";
import SignUpForm from "../../../components/forms/sign-up/SignUpForm";

const SignUp = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      height={{ xs: "100vh", md: "100vh" }}
      width={"100vw"}
    >
      <Stack
        display={{ xs: "none", md: "flex" }}
        width={{ xs: "100vw", md: "50vw" }}
        height={{ xs: "100vh", md: "100vh" }}
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
        width={{ xs: "100vw", md: "50vw" }}
        height={{ xs: "100vh", md: "100vh" }}
      >
        <SignUpForm />
      </Stack>
    </Stack>
  );
};

export default SignUp;
