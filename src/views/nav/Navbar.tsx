import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Button } from "../../components";
import Logo from "../../Logo";

const Navbar = () => {
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
          <Button color="inherit" className="py-1 px-2 my-1 mx-1 radius-1">
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
