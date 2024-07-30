import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
} from "@mui/material";
import { assets } from "../../assets/assets";

const DeliciasCard = () => {
  return (
    <Box id="produtos">
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{ mt: 8 }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontFamily: "Great Vibes, cursive",
            color: "#eba328",
            textAlign: "center",
          }}
        >
          Nossos produtos
        </Typography>
      </Stack>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto", mt: 4, p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={assets.brownie}
                alt="brownie"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div">
                Delícias do Brownie
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                O Brownie é um clássico do doce americano, conhecido por sua
                textura densa e sabor intenso de chocolate. Agora, experimente o
                nosso incomparável brownie gourmet. Feitos com ingredientes de
                alta qualidade e um toque de criatividade, cada mordida é uma
                explosão de sabor e indulgência. Não perca a chance de saborear
                essa delícia irresistível. Garanta já o seu e transforme
                qualquer momento em uma experiência gourmet!
              </Typography>
            </CardContent>
            <Box sx={{ p: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                href="https://wa.me/5527988433909?text=Quero%20saber%20quais%20brownies%20voc%C3%AA%20tem%20e%20quais%20os%20valores%20deles"
                target="_blank"
              >
                COMPRE AGORA
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto", mt: 4, p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={assets.brigadeiro}
                alt="brownie"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div">
                Brigadeiros únicos
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                O brigadeiro é o ícone dos doces brasileiros, amado por sua
                textura cremosa e sabor irresistível de chocolate. Prepare-se
                para descobrir melhores brigadeiro da região. Com ingredientes
                selecionados e uma pitada de inovação mais o seu gosto, cada
                pedaço vai transformar qualquer ocasião em um momento de pura
                indulgência. Não deixe passar a oportunidade de experimentar
                essa verdadeira tentação. Adquira o seu agora e eleve seu!
              </Typography>
            </CardContent>
            <Box sx={{ p: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                href="https://wa.me/5527988433909?text=Quero%20saber%20quais%20brigadeiros%20voc%C3%AA%20tem%20e%20quais%20os%20valores%20deles"
                target="_blank"
              >
                COMPRE AGORA
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{ maxWidth: 400, maxHeight: 1780, margin: "auto", mt: 4, p: 2 }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={assets.bolo}
                alt="brownie"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div">
                Tentação em bolinhos
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                O bolo de pote é a nova sensação dos doces, combinando a
                praticidade com a deliciosa tradição dos bolos caseiros.
                Contendo camadas perfeitas de bolo macio, cremes gostoso e uma
                sensação de sabores irresistível que vai deixar você querendo
                mais.Não perca a chance de experimentar essas delícias,garanta o
                seu e descubra o prazer de saborear um bolo de pote que é
                simplesmente irresistível!
              </Typography>
            </CardContent>
            <Box sx={{ p: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                href="https://wa.me/5527988433909?text=Quero%20saber%20quais%20bolos%20de%20pote%20voc%C3%AA%20tem%20e%20quais%20os%20valores%20deles"
                target="_blank"
              >
                COMPRE AGORA
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeliciasCard;
