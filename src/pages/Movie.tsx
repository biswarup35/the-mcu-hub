import {
  Container,
  Grid,
  Stack,
  Card,
  CardImage,
  CardContainer,
} from "../components";
import { useMovie } from "../hooks";
import { Loading } from "../views";

const Movie = () => {
  const { data, loading } = useMovie();

  if (loading || !data) {
    return <Loading />;
  }
  return (
    <div>
      <Container className="my-2" maxWidth="md">
        <Grid container>
          <Grid
            style={{ justifySelf: "center", alignSelf: "center" }}
            item
            xs={12}
            md={6}
          >
            <img src={data.poster} alt="poster" />
          </Grid>
          <Grid
            style={{ justifySelf: "center", alignSelf: "center" }}
            item
            xs={12}
            md={6}
          >
            <h1>{data?.title ?? ""}</h1>
            {data.meta?.map((meta) => (
              <Stack
                style={{ marginTop: 4 }}
                direction="row"
                key={meta.label}
                gap={2}
              >
                <p>{meta.label}:</p>
                <p style={{ fontWeight: "bold" }}>{meta.value}</p>
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <h4 style={{ textAlign: "center" }}>Movie Plot</h4>
        <p style={{ textAlign: "center" }} className="py-2">
          {data.synopsis}
        </p>
      </Container>
      <Container className="my-2" maxWidth="lg">
        <h4 className="py-2">Cast and Crew</h4>
        <Grid container gap={2}>
          {data.cast?.map((cast, index) => (
            <Grid key={index} item xs={4} sm={3} md={2}>
              <Card
                style={{ maxWidth: 180, minWidth: 110 }}
                className="bg-primary full-height"
              >
                {/*  */}
                <CardImage
                  src={
                    cast.image.includes("pizza-pie")
                      ? "http://via.placeholder.com/150x180"
                      : cast.image
                  }
                  alt={cast.name}
                />
                <CardContainer>
                  <Stack>
                    <h6 style={{ textAlign: "center" }}>{cast.name}</h6>
                    <h6 style={{ textAlign: "center", color: "GrayText" }}>
                      {cast.role}
                    </h6>
                  </Stack>
                </CardContainer>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Movie;
