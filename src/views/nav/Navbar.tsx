import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar } from "../../components";
import Logo from "../../Logo";

const Navbar = () => {
  return (
    <AppBar color="primary">
      <Container maxWidth="lg">
        <Toolbar style={{ justifyContent: "center" }} variant="dense">
          <Link to="/">
            <Logo />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
