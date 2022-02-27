import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Button } from "../../components";
import Logo from "../../Logo";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const loginHandler = () => {
    if (isAuthenticated) {
      logout();
    } else {
      loginWithRedirect();
    }
  };
  return (
    <AppBar color="primary">
      <Container maxWidth="lg">
        <Toolbar style={{ justifyContent: "center" }} variant="dense">
          <div style={{ flexGrow: 1 }}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <Link to="/watch-list">
            <Button color="inherit" className="py-1 px-2 my-1 mx-1 radius-1">
              Watch List
            </Button>
          </Link>

          <Button
            onClick={loginHandler}
            color="inherit"
            className="py-1 px-2 my-1 mx-1 radius-1"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
          {isAuthenticated && <p>{`Hello, ${user?.name}`}</p>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
