import React, { useContext } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { CartProvider } from "@/store/CartContext";

const Cart = () => {
  const router = useRouter();
  const { getTotalItems } = useContext(CartProvider);
  const total = getTotalItems();

  return (
    <Button
      onClick={() => router.push("/checkout")}
      startIcon={<LocalGroceryStoreIcon />}
      sx={{
        fontSize: "1.1rem",
        color: "black",
      }}
    >
      {total > 0 ? total : ""}
    </Button>
  );
};

export default Cart;
