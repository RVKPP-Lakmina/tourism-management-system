import ResponsiveAppBar from "../../components/ui/NavBar/ResponsiveAppBar";
import { Stack } from "@mui/material";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router";

const WithNavLayout = () => {
  return (
    <Stack gap={5} height={"100%"}>
      <Stack minHeight={"10%"}>
        <ResponsiveAppBar />
      </Stack>
      <Stack minHeight={"80%"}>
        <Outlet />
      </Stack>
      <Stack minHeight={"10%"}>
        <Footer />
      </Stack>
    </Stack>
  );
};

export default WithNavLayout;
