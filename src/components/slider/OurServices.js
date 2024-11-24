import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  FaShippingFast,
  FaPlane,
  FaTruck,
  FaBox,
  FaWarehouse,
  FaGlobeAmericas,
} from "react-icons/fa";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

const services = [
  {
    id: 1,
    icon: <FaShippingFast className="text-primary text-6xl mb-4" />,
    title: "Fast & Safe Delivery",
    description:
      "Fusce pretium nulla et purus malesuada feugiat sed vel mauris tincidunt vehicula lorem vel hendrerit justo praesent aliquam maximus imperdiet integer sagittis leo",
  },
  {
    id: 2,
    icon: <FaPlane className="text-primary text-6xl mb-4" />,
    title: "International Air Freight",
    description:
      "Fusce pretium nulla et purus malesuada feugiat sed vel mauris tincidunt vehicula lorem vel hendrerit justo praesent aliquam maximus imperdiet integer sagittis leo",
  },
  {
    id: 3,
    icon: <FaTruck className="text-primary text-6xl mb-4" />,
    title: "Ground Shipping",
    description:
      "Fusce pretium nulla et purus malesuada feugiat sed vel mauris tincidunt vehicula lorem vel hendrerit justo praesent aliquam maximus imperdiet integer sagittis leo",
  },
  {
    id: 4,
    icon: <FaBox className="text-primary text-6xl mb-4" />,
    title: "Packaging and Storage",
    description:
      "Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus. Aliquam accumsan erat id sem placerat tempus",
  },
  {
    id: 5,
    icon: <FaWarehouse className="text-primary text-6xl mb-4" />,
    title: "Cargo",
    description:
      "Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus. Aliquam accumsan erat id sem placerat tempus",
  },
  {
    id: 6,
    icon: <FaGlobeAmericas className="text-primary text-6xl mb-4" />,
    title: "Worldwide Transport",
    description:
      "Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus. Aliquam accumsan erat id sem placerat tempus",
  },
];

const OurServices = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "primary.main",
            fontSize: "4rem",
            "@media (max-width:600px)": {
              fontSize: "2.5rem",
            },
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{
            mb: 4,
            maxWidth: 800,
            mx: "auto",
            fontSize: "1.8rem",
            "@media (max-width:600px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          Cras varius purus in tempus porttitor ut dapibus efficitur sagittis
          cras vitae lacus metus nunc vulputate facilisis nisi eu lobortis erat
          consequat ut. Aliquam et justo ante. Nam a cursus velit.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  borderTop: "4px solid primary.main",
                }}
                elevation={3}
              >
                <div className="mb-4">{service.icon}</div>
                <CardContent>
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{
                      color: "primary.main",
                      fontSize: "2rem",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: "1.5rem",
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default OurServices;
