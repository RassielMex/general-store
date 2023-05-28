import CartItem from "@/components/CartItem";
import PaymentInfo from "@/components/PaymentInfo";
import { CartProvider } from "@/store/CartContext";
import { Container, Stack } from "@mui/material";
import React, { useContext } from "react";

const Checkout = () => {
  const { cart } = useContext(CartProvider);
  return (
    <Container>
      <Stack
        direction={"row"}
        spacing={3}
        marginTop={5}
        justifyContent={"center"}
      >
        <Stack spacing={1}>
          {cart.map((cartItem) => {
            return (
              <CartItem
                cartItem={cartItem}
                key={cartItem.id + cartItem.title}
              />
            );
          })}
        </Stack>
        <PaymentInfo />
      </Stack>
    </Container>
  );
};

export default Checkout;
