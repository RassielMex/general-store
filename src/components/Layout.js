import { Container } from "@mui/material";
import Header from "./Header";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Bienvenido">
        <Link href="/">Store</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/checkout">Checkout</Link>
      </Header>
      <Container fixed>
        <main>{children}</main>
      </Container>
    </>
  );
}
