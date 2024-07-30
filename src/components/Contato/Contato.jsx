import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contato = () => {
  return (
    <Box
      id="contatos"
      sx={{
        padding: "4% 5%",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 4, fontFamily: "Great Vibes, cursive", color: "#eba328" }}
      >
        Entre em Contato
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Informações de Contato
            </Typography>
            <Typography variant="body1">
              <strong>Endereço:</strong> Rua Antônio Silva, 28, Cariacica-ES
            </Typography>
            <a
              href="https://wa.me/5527988433909?text=Quero%20saber%20quais%20doces%20voc%C3%AA%20tem%20e%20quais%20os%20valores%20deles%F0%9F%98%8B"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <WhatsAppIcon />
                <Typography variant="body1">
                  <strong>Telefone:</strong> (27) 988433909
                </Typography>
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/doceria_bazileu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <IconButton>
                <InstagramIcon />
                <Typography variant="body1">
                  <strong>Instagram:</strong>@doceria_bazileu
                </Typography>
              </IconButton>
            </a>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contato;
