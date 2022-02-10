import { Link } from "react-router-dom";
import { Container, Card, Grid, CardContainer, CardImage } from "../components";
import { useMovies } from "../hooks";

const Home = () => {
  const { movies, tv } = useMovies();
  return (
    <>
      <Container className="my-2" maxWidth="lg">
        <Grid container gap={2}>
          {movies.map((movie: any) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={movie.show_id}>
              <Card className="full-height bg-primary">
                <Link to={`/${movie.show_id}`}>
                  <CardImage height={209} src={movie.image} alt={movie.title} />
                </Link>
                <CardContainer>
                  <h4 style={{ textAlign: "center" }}>{movie.title}</h4>
                </CardContainer>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className="my-2" maxWidth="lg">
        <Grid container gap={2}>
          {tv.map((movie: any) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={movie.show_id}>
              <Card className="full-height bg-primary">
                <CardImage height={209} src={movie.image} alt={movie.title} />
                <CardContainer>
                  <h4 style={{ textAlign: "center" }}>{movie.title}</h4>
                </CardContainer>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
