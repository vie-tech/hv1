import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box overflow="hidden" flexGrow={1}>
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default MainLayout;
