import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ComicsList from "@/components/ComicsList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ comics }) {
  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>Reboot Comic Store!!</h1>
      <div className={styles.Summary}>
        Aquí encontrarás todos los comics, novelas gráficas, mangas y demás
        articulos geeks de tu agrado
      </div>
      <div>
        <ComicsList comics={comics} />
      </div>
    </section>
  );
}

export const getServerSideProps = async () => {
  let comics;
  try {
    const res = await fetch("http://localhost:3000/api/comics");
    comics = await res.json();
  } catch (error) {
    comics = [];
  }

  return { props: { comics } };
};
