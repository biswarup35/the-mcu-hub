import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card, CardContainer, Container, Stack } from "../components";
import { Outlet, Navigate } from "react-router-dom";

export const LoginOutlet = () => {
  const { isAuthenticated } = useAuth0();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Container>
      <Stack alignContent="center" alignItems="center">
        <Card
          className="my-3 bg-primary"
          style={{ minWidth: 350, maxWidth: 450 }}
        >
          <CardContainer>
            <h4 style={{ textAlign: "center" }}>Please, Login</h4>
            <Stack className="my-2" direction="row" justifyContent="center">
              <Button
                onClick={() => {
                  loginWithRedirect();
                }}
                className="px-2 py-1 radius-2"
              >
                Login
              </Button>
            </Stack>
          </CardContainer>
        </Card>
      </Stack>
    </Container>
  );
};
