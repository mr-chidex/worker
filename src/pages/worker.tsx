import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { server } from "../axios";
import Layout from "../components/Layout";

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
}

const Worker = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await server.get(`/${id}`);
      setUser(data);
    })();
  }, [id]);

  return (
    <Layout>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
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

        <Grid item>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Worker;
