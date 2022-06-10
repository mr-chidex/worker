import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import WorkerCard from "../components/Card";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Container className="main" maxWidth="xl">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {[...Array(10)].map((index) => (
            <Grid key={index} item xs={4} md={3}>
              <WorkerCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
