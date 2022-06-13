import Grid from "@mui/material/Grid";
import WorkerCard from "../components/Card";
import { FC, useEffect, useState } from "react";
import { server } from "../axios";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

interface User {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  image: string;
  phone: string;
  username: string;
  gender: string;
  email: string;
}

const Home: FC = () => {
  const [workers, setWorkers] = useState<User[]>([]);
  const [, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await server.get("/");
        setWorkers(data?.users);
        setLoading(false);
      } catch (err: any) {
        setError(err?.response?.data?.message || err?.message);
        setLoading(false);
      }
    })();
  }, []);

  return !loading ? (
    <>
      <Layout>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {workers.map((worker) => (
            <Grid key={worker.id} item xs={12} sm={6} md={4} lg={3}>
              <WorkerCard
                name={worker.firstName + " " + worker.lastName}
                phone={worker.phone}
                email={worker.email}
                image={worker.image}
                age={worker.age}
                gender={worker.gender}
                id={worker.id}
              />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
