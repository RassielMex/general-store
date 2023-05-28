import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ComicsTable = ({ comics, handleOpenModal, handleSelectComic }) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: "30px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Título </TableCell>
              <TableCell align="right">Autor</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Summary</TableCell>
              <TableCell align="right">Cover</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comics.map((comic, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {comic.title}
                </TableCell>
                <TableCell align="right">{comic.author}</TableCell>
                <TableCell align="right">{comic.price}</TableCell>
                <TableCell align="right">{comic.summary}</TableCell>
                <TableCell align="right">
                  <img
                    src={comic.cover}
                    style={{ width: "30px", height: "50px" }}
                  />
                </TableCell>
                <TableCell align="right">{comic.year}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    color="default"
                    onClick={() => {
                      handleSelectComic(comic.id);
                      handleOpenModal();
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ComicsTable;
