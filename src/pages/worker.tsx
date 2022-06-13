import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { server } from "../axios";
import Layout from "../components/Layout";
import MapView from "../components/Map";
import Loader from "../components/Loader";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
  address: any;
}

const Worker = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await server.get(`/${id}`);
        setUser(data);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
      }
    })();
  }, [id]);

  return !loading ? (
    <Layout>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={4} md={4}>
          <Item>
            <img
              src={user?.image}
              alt={user?.firstName}
              height="100"
              width="100"
            />
            <p>Name: {`${user?.firstName} ${user?.lastName}`}</p>
            <p>Email: {user?.email}</p>
            <p>Email: {user?.phone}</p>
            <p>Email: {user?.gender}</p>
            <p>Email: {user?.age}</p>
            <p>Email: {user?.email}</p>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Item>
            <MapView
              location={{
                lng: user?.address?.coordinates?.lng,
                lat: user?.address?.coordinates?.lat,
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </Layout>
  ) : (
    <Loader />
  );
};

export default Worker;
