import { Container, Typography, Button, Box } from "@mui/material";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: 3,
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1,
          backgroundImage: `url(${assets.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      />
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "4rem" },
            marginTop: '15px',
          }}
        >
          Delícias refinadas e o valor imbatível
        </Typography>
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{
            marginBottom: 3,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {" "}
          Descubra uma nova forma de saborear a vida, onde o prazer e a nutrição
          se encontram sem pesar no orçamento.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            marginLeft: 8,
            padding: "1rem 2rem",
            margin: "0 auto",
            
            '&:hover': {
              backgroundColor: "#000000", 
            },
            '&:active': {
              backgroundColor: "#000000",
            },
          }}
          href="https://wa.me/5527988433909?text=Quero%20saber%20quais%20doces%20voc%C3%AA%20tem%20e%20quais%20os%20valores%20deles%F0%9F%98%8B"
        >
          Aproveite agora
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
