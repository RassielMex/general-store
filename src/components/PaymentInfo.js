import { CartProvider } from "@/store/CartContext";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";

const PaymentInfo = () => {
  const { getTotalPrice, cleanCart } = useContext(CartProvider);
  const subtotal = Number(getTotalPrice());
  const iva = subtotal * 0.15;
  const total = subtotal + iva;
  return (
    <Box
      sx={{
        borderRadius: "8px",
        border: "0.5px solid",
        padding: "16px",
        height: "150px",
        width: "200px",
      }}
    >
      <Typography variant="subtitle1">
        Subtotal: ${subtotal.toFixed(2)}
      </Typography>
      <Typography variant="subtitle1">IVA: ${iva.toFixed(2)}</Typography>
      <Typography variant="h6" marginBottom={3}>
        Total: ${total.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="small"
        onClick={() => {
          cleanCart();
        }}
      >
        Pagar
      </Button>
    </Box>
  );
};

export default PaymentInfo;
