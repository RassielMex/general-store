import ComicsTable from "@/components/ComicsTable";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import ComicModal from "@/components/ComicModal";

const Admin = ({ comics }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedComic, setSelectedComic] = useState(null);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const selectComic = (id) => {
    setSelectedComic(
      comics?.filter((comic) => {
        return comic.id === id;
      })[0]
    );
  };

  return (
    <>
      <ComicsTable
        comics={comics}
        handleOpenModal={handleOpenModal}
        handleSelectComic={selectComic}
      />
      <ComicModal
        open={openModal}
        handleClose={handleCloseModal}
        comic={selectedComic}
      />
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", right: 20, bottom: 20 }}
        onClick={() => {
          setSelectedComic(null);
          handleOpenModal();
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Admin;

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
