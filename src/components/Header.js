import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import comicImg from "../assets/comic.png";
import Cart from "./Cart";
import { useRouter } from "next/router";

const Header = ({ title, children }) => {
  const router = useRouter();
  return (
    <header>
      <Button
        onClick={() => router.push("/")}
        startIcon={<Image width={150} height={80} src={comicImg} alt="image" />}
        sx={{
          fontSize: "1.1rem",
          color: "black",
        }}
      >
        {title}
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {children}
        <Cart />
      </Box>
    </header>
  );
};

Header.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
