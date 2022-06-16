import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { AppContext } from "../components/Context";
import Layout from "../components/Layout";
import { ORDERPLACED } from "../utils/constants";

const OrderSuccess = () => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: ORDERPLACED });
  }, [dispatch]);

  return (
    <Layout>
      <div
        style={{
          width: "60%",
          minWidth: "350px",
          display: "grid",
          placeItems: "center",
          margin: "0 auto",
          height: "70vh",
        }}
      >
        <Paper sx={{ padding: "1rem", width: "80%" }}>
          <h3 style={{ textAlign: "center" }}>Order Successfully Placed</h3>

          <div style={{ textAlign: "center" }}>
            <CheckCircleIcon
              color="success"
              sx={{ fontSize: "3rem" }}
              fontSize="large"
            />
          </div>
        </Paper>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
