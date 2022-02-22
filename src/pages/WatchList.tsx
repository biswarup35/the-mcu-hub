import {
  Container,
  Grid,
  Card,
  CardImage,
  CardContainer,
  Stack,
} from "../components";
import { Link } from "react-router-dom";
import { useList } from "../hooks";

const WatchList = () => {
  const { movieList, remove } = useList();
  return (
    <div>
      <Container maxWidth="lg">
        <div className="my-2">
          {movieList.length === 0 ? (
            <h1 style={{ textAlign: "center" }}>No movies in the watch list</h1>
          ) : (
            <h1 style={{ textAlign: "center" }}>Watch List</h1>
          )}
        </div>
        <Grid container gap={3}>
          {movieList.map((movie: any) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={movie.show_id}>
              <Stack className="full-height">
                <Card className="full-height bg-primary">
                  <Link to={`/${movie.show_id}`}>
                    <CardImage
                      height={230}
                      src={movie.image}
                      alt={movie.title}
                    />
                  </Link>
                  <CardContainer>
                    <h4 style={{ textAlign: "center" }}>{movie.title}</h4>
                  </CardContainer>
                </Card>
                <button
                  onClick={() => {
                    remove(movie.show_id);
                  }}
                >
                  Remove
                </button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WatchList;
