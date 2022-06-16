import { Box, Button, Grid } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { server } from "../axios";
import Layout from "../components/Layout";
import MapView from "../components/Map";
import Loader from "../components/Loader";
import { AppContext } from "../components/Context";
import { ADDWORKER } from "../utils/constants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Work {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  image: string;
  phone: string;
  username: string;
  gender: string;
  email: string;
  address: any;
  birthDate: string;
  university: string;
  company: any;
}

const Worker = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState<Work | null>(null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      try {
        const { data } = await server.get(`/${id}`);
        setWorker(data);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
      }
    })();
  }, [id]);

  const orderHandler = () => {
    dispatch({ type: ADDWORKER, payload: worker });
  };

  return (
    <Layout>
      {!loading ? (
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={4} md={4}>
            <Item>
              <img
                src={worker?.image}
                alt={worker?.firstName}
                height="100"
                width="100"
              />
              <p>Name: {`${worker?.firstName} ${worker?.lastName}`}</p>
              <p>Email: {worker?.email}</p>
              <p>Phone: {worker?.phone}</p>
              <p>Gender: {worker?.gender}</p>
              <p>Age: {worker?.age}</p>
              <p>DOB: {worker?.birthDate}</p>
              <p>University: {worker?.university}</p>
              <p>Domain: {worker?.company?.department}</p>
            </Item>

            <Box
              sx={{
                my: 2,
              }}
            >
              <Button
                fullWidth
                variant="contained"
                size="small"
                onClick={() => orderHandler()}
              >
                Order Worker
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Item>
              <MapView
                location={{
                  lng: worker?.address?.coordinates?.lng,
                  lat: worker?.address?.coordinates?.lat,
                }}
              />
            </Item>
          </Grid>
        </Grid>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Worker;
