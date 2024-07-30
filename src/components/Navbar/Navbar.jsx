import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { assets } from "../../assets/assets";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Ínicio", link: "hero" },
    { text: "Delícias", link: "produtos" },
    { text: "Conjuntos", link: "Kit" },
    { text: "Contatos", link: "contatos" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#6b3fa0", paddingInline: "5%" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={assets.logo}
              alt="Logo"
              style={{ height: 50, marginRight: 16 }}
            />
            <Typography
              variant="h4"
              component="div"
              sx={{ fontFamily: "Great Vibes, cursive", color: "#eba328" }}
            >
              Doceria Bazileu
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      padding: 2,
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List>
                    {menuItems.map((item, index) => (
                      <ListItem button key={index}>
                        <ScrollLink to={item.link} smooth={true} duration={500}>
                          <ListItemText primary={item.text} />
                        </ScrollLink>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ButtonGroup
                  size="large"
                  variant="text"
                  aria-label="Basic button group"
                  sx={{
                    "& .MuiButton-root": {
                      color: "white",
                    },
                    "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                      borderColor: "white",
                    },
                  }}
                >
                  {menuItems.map((item, index) => (
                    <Button key={index}>
                      <ScrollLink to={item.link} smooth={true} duration={500}>
                        {item.text}
                      </ScrollLink>
                    </Button>
                  ))}
                </ButtonGroup>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Stack direction="row" spacing={2}>
                  <Button
                    href="https://wa.me/5527988433909?text=Quero%20saber%20quais%20doces%20voc%C3%AA%20tem%20e%20quais%20os%20valores%20deles%F0%9F%98%8B"
                    variant="contained"
                    style={{
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      marginLeft: 8,
                    }}
                  >
                    Compre agora
                  </Button>
                  <a
                    href="https://www.instagram.com/doceria_bazileu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <InstagramIcon />
                    </IconButton>
                  </a>
                  <a
                    href="https://wa.me/5527988433909?text=Quero%20saber%20quais%20doces%20voc%C3%AA%20tem%20e%20quais%20os%20valores%20deles%F0%9F%98%8B"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <WhatsAppIcon />
                    </IconButton>
                  </a>
                </Stack>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
