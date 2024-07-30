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
    <Box id="Kit">
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
          Nossos combos incríveis
        </Typography>
      </Stack>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto", mt: 4, p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={assets.kit1}
                alt="brownie"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div">
                Kit Delícia: Brownie e Brigadeiro
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Prepare-se para uma experiência de sabor incomparável com o
                nosso Kit Delícia, que combina duas das maiores tentações:
                brownie e brigadeiro. Imagine a textura rica e densa do brownie,
                combinada e mais doces com a cremosidade inconfundível do nosso
                brigadeiro. Cada porção deste kit é uma verdadeira festa.Feito
                com ingredientes de alta qualidade e um toque de criatividade,
                este kit é perfeito. Não perca a chance de se deliciar com essa
                combinação irresistível. Garanta o seu Kit Delícia e viva o
                prazer de saborear o melhor dos dois mundos!
              </Typography>
            </CardContent>
            <Box sx={{ p: 2 }}>
              <Button
                variant="contained"
                disabled
                color="secondary"
                href="https://wa.me/5527988433909?text=Quero%20saber%20quais%20kits%20voc%C3%AA%20tem%20e%20quais%20os%20valores%20deles"
                target="_blank"
              >
                Estoque esgotado
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 400, margin: "auto", mt: 4, p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={assets.kit2}
                alt="brownie"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div">
                Kit : Bolo de Pote com Brigadeiro
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Descubra o máximo da gostosura com o nosso Kit Delícia, que une
                o saboroso bolo de pote ao irresistível brigadeiro. Imagine
                camadas de bolo macio e cremoso, entrelaçadas com um brigadeiro
                que derrete na boca. Criados com ingredientes de alta qualidade
                para garantir uma experiência gastronômica única. Ideal para
                transformar qualquer momento em uma celebração doce e
                inesquecível. Não deixe passar a chance de saborear essa
                delícia. Adquira o seu Kit Delícia e mergulhe na suavidade do
                bolo de pote com o toque especial!
              </Typography>
            </CardContent>
            <Box sx={{ p: 2 }}>
              <Button
                variant="contained"
                disabled
                color="secondary"
                href="https://wa.me/5527988433909?text=Quero%20saber%20quais%20kits%20voc%C3%AA%20tem%20e%20quais%20os%20valores%20deles"
                target="_blank"
              >
                Estoque esgotado
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeliciasCard;
