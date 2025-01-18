import { AppBar, Button, Container, styled, Toolbar, Typography } from '@mui/material';
import { Link as NavLink } from "react-router-dom";

const Link = styled(NavLink)({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: "inherit",
  },
});

const AppToolBar = () => {
  return (
    <div>
      <AppBar position="sticky" sx={{ mb: 2 }}>
        <Container>
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Spotify</Link>
            </Typography>
            <Button component={NavLink} to = "/register" color = "inherit">
              Sing up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default AppToolBar;