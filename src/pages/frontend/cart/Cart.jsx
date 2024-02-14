import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decrementCart,
  deleteCartItem,
  incrementCart,
} from "../../../slices/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();

  const handleDecrement = (item) => {
    dispatch(decrementCart(item));
  };
  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };
  const handleDeleteCartItem = (item) => {
    dispatch(deleteCartItem(item.id));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cart = useSelector((state) => state.cart.cart);

  let totalPrice = cart.reduce((total, currentItem) => {
    return total + (currentItem.price * currentItem.quantity);
}, 0);

totalPrice = totalPrice.toFixed(2)

  return (
    <div className="mx-2 md:w-[77vw] md:m-auto mb-20">
      {cart.length <= 0 ? (
        <div className="text-3xl md:text-5xl min-h-[80vh] md:min-h-[90vh] flex justify-center items-center  font-semibold text-gray-600"> Your Cart Is Empty</div>
      ) : (
        <>
          <h1 className="text-3xl font-semibold mb-8 text-gray-800  md:text-4xl text-center mt-20">
            Cart Items
          </h1>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ fontWeight: "bold" }}>
                  <TableCell>Product</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Category</TableCell>
                  <TableCell align="center">price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Sub Total</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      {<img src={item.image} width={50} />}
                    </TableCell>
                    <TableCell align="center">{item.title}</TableCell>
                    <TableCell align="center">{item.category}</TableCell>
                    <TableCell align="center">  <span className="whitespace-nowrap">   $ {item.price}</span></TableCell>
                    <TableCell
                      align="center"
                      className="flex  justify-center items-center whitespace-nowrap"
                    >
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => {
                          handleDecrement(item);
                        }}
                      >
                        {" "}
                        -{" "}
                      </Button>
                      <span className="font-semibold text-2xl text-gray-600 mx-3 mb-0">
                        {item.quantity}
                      </span>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => {
                          handleIncrement(item);
                        }}
                      >
                        {" "}
                        +{" "}
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                  <span className="whitespace-nowrap">   $ {item.quantity * item.price}</span>
                    </TableCell>
                    <TableCell align="center">
                      <DeleteIcon
                        color="error"
                        className="cursor-pointer"
                        onClick={() => {
                          handleDeleteCartItem(item);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={5} align="right">
                      Total Price
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    $ {totalPrice}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="flex justify-between mt-4 items-center mb-10">
            <Link to="/">
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={() => {
                  handleDecrement(item);
                }}
              >
                {" "}
                Continue Shopping{" "}
              </Button>
            </Link>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={handleClearCart}
            >
              {" "}
              Clear Cart{" "}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
