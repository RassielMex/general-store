import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useContext } from "react";
import { CartProvider } from "@/store/CartContext";

const ComicItem = ({ comic }) => {
  const { addToCart } = useContext(CartProvider);
  const handleAdd = () => {
    addToCart(comic);
  };
  return (
    <Card sx={{ maxWidth: 200, height: "400px" }}>
      <CardMedia sx={{ height: 200 }} image={comic?.cover} title="cover" />
      <Stack
        alignContent={"space-between"}
        justifyContent={"space-between"}
        height={"50%"}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            marginBottom={0}
          >
            {comic?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {comic?.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button size="small">Detalles</Button>
          <IconButton color="info" onClick={handleAdd}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default ComicItem;
