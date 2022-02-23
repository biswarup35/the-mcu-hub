import { Link, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Stack,
  Card,
  CardImage,
  CardContainer,
  Button,
} from "../components";
import { useMovie, useList } from "../hooks";

const Movie = () => {
  const { show_id } = useParams();
  const { data } = useMovie(show_id ?? "");
  const { add, remove, inWatchList } = useList();
  const inTheWatchList = inWatchList(data.show_id);
  const watchListHandler = () => {
    if (inTheWatchList) {
      remove(data.show_id);
    } else {
      add(data.show_id);
    }
  };

  return (
    <div>
      <div className="bg-primary">
        <Container className="py-3 radius-1" maxWidth="lg">
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
              style={{ justifySelf: "center", width: "100%" }}
              item
              xs={12}
              md={6}
            >
              <div className="my-2">
                <h1 style={{ textAlign: "center" }}>{data?.title ?? ""}</h1>
              </div>
              <Stack direction="row">
                <Button
                  className="py-1 radius-1 bg-tertiary full-width"
                  onClick={watchListHandler}
                >
                  {inTheWatchList
                    ? "Remove from Watch List"
                    : "Add to Watch List"}
                </Button>
                <div className="full-width">
                  <Link to={`/booking?q=${data.show_id}`}>
                    <Button className="py-1 radius-1 bg-tertiary full-width">
                      Book
                    </Button>
                  </Link>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container className="my-3" maxWidth="lg">
        <Grid container gap={3}>
          <Grid item xs={12} md={6}>
            <h4 style={{ textAlign: "center" }}>Movie Plot</h4>
            <p style={{ lineHeight: "1.5rem" }} className="py-2">
              {data.synopsis}
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            {data.meta?.map((meta: any) => (
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
      <Container className="my-2" maxWidth="lg">
        <h4 className="py-2">Cast and Crew</h4>
        <Grid container gap={2}>
          {data.cast?.map((cast: any, index: number) => (
            <Grid key={index} item xs={4} sm={3} md={2}>
              <Card
                style={{ maxWidth: 180, minWidth: 110 }}
                className="bg-primary full-height"
              >
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
