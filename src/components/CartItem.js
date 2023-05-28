import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import React, { useContext } from "react";
import { CartProvider } from "@/store/CartContext";

const CartItem = ({ cartItem }) => {
  const { addToCart, removeQtyFromCart, removeFromCart } =
    useContext(CartProvider);

  const handleAdd = () => {
    addToCart(cartItem);
  };
  const handleRemoveQty = () => {
    if (cartItem.quantity > 1) {
      removeQtyFromCart(cartItem);
    } else {
      removeFromCart(cartItem);
    }
  };
  const handleRemove = () => {
    removeFromCart(cartItem);
  };
  return (
    <Card sx={{ display: "flex", maxWidth: "500px", maxHeight: "180px" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={cartItem?.cover}
        alt="cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {cartItem?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {cartItem.price}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Qty: {cartItem.quantity}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton onClick={handleAdd}>
            <AddCircleIcon />
          </IconButton>
          <IconButton onClick={handleRemoveQty}>
            <RemoveCircleIcon />
          </IconButton>
          <IconButton onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;
