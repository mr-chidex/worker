import Grid from "@mui/material/Grid";
import { FC, useEffect, useState } from "react";
import { useContext } from "react";

import WorkerCard from "../components/Card";
import { server } from "../axios";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { AppContext } from "../components/Context";
import { Worker } from "../utils/types";
import { ADDWORKER } from "../utils/constants";

const Home: FC = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const orderHandler = (worker: Worker) => {
    dispatch({ type: ADDWORKER, payload: worker });
  };

  return (
    <>
      <Layout>
        {!loading ? (
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
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
                  orderHandler={() => orderHandler(worker)}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Loader />
        )}
      </Layout>
    </>
  );
};

export default Home;
