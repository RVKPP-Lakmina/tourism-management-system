import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Grid from "../ui/GridComponent/Grid";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              display="block"
            >
              About Us
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              display="block"
            >
              Careers
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              display="block"
            >
              Contact Us
            </Link>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              display="block"
            >
              Blog
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              display="block"
            >
              FAQs
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              display="block"
            >
              Support
            </Link>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              display="block"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              display="block"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              underline="none"
              display="block"
            >
              Cookie Policy
            </Link>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
