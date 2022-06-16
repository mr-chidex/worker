import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ORDERPLACED, REMOVEWORKER } from "../utils/constants";
import Layout from "../components/Layout";
import { AppContext } from "../components/Context";

const Orders = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const navigation = useNavigate();

  const removeWorkerHandler = (id: number) => {
    dispatch({ type: REMOVEWORKER, payload: id });
  };

  const placeOrder = () => {
    dispatch({ type: ORDERPLACED });
    navigation("/order-success");
  };
  return (
    <>
      <Layout>
        {state.orders.length > 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 400 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Age</TableCell>
                    <TableCell align="left">Phone</TableCell>
                    <TableCell align="left">Gender</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.orders.map((order) => (
                    <TableRow
                      key={order.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <img
                          src={order.image}
                          alt={order.firstName}
                          style={{ height: "3rem" }}
                        />
                      </TableCell>
                      <TableCell component="th">
                        {`${order.firstName + order.lastName}`}
                      </TableCell>
                      <TableCell align="left">{order.email}</TableCell>
                      <TableCell align="left">{order.age}</TableCell>
                      <TableCell align="left">{order.phone}</TableCell>
                      <TableCell align="left">{order.gender}</TableCell>
                      <TableCell align="left">
                        <IconButton
                          onClick={() => removeWorkerHandler(order.id)}
                        >
                          <Delete color="primary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              style={{ fontWeight: "bold", margin: "1rem 0" }}
              variant="contained"
              onClick={() => placeOrder()}
            >
              Place Order
            </Button>
          </>
        ) : (
          <h2 style={{ textAlign: "center" }}>
            No workers added to order list
          </h2>
        )}
      </Layout>
    </>
  );
};

export default Orders;
