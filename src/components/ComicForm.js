import { Button, Stack, TextField } from "@mui/material";
import * as Yup from "yup";
import React from "react";
import { useFormik } from "formik";

const ComicForm = ({ comic, closeModal }) => {
  const onSubmit = () => {
    if (comic) {
      //Edit
      console.log(values);
    } else {
      //Add new comic
      console.log(values);
    }
    closeModal();
  };

  const initialValues = {
    title: comic?.title || "",
    author: comic?.author || "",
    price: comic?.price || "",
    summary: comic?.summary || "",
    cover: comic?.cover || "",
  };

  const required = "Este campo es obligatorio";

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(required),
    author: Yup.string().required(required),
    price: Yup.number()
      .required(required)
      .positive("debe ser un numero positivo")
      .max(9999, "Valor debe ser menos a 9999"),
    summary: Yup.string()
      .max(70, "Maximo # de caracteres es de 70")
      .required(required),
    cover: Yup.string().url("Introduce una URL válida").required(required),
  });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    formik;

  return (
    <form onSubmit={handleSubmit}>
      <Stack alignItems={"center"} spacing={2}>
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.title && touched.title ? true : false}
          helperText={errors.title && touched.title ? errors.title : ""}
          value={values.title}
        />
        <TextField
          name="author"
          label="Author"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.author && touched.author ? true : false}
          helperText={errors.author && touched.author ? errors.author : ""}
          value={values.author}
        />
        <TextField
          name="price"
          label="Price"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.price && touched.price ? true : false}
          helperText={errors.price && touched.price ? errors.price : ""}
          value={values.price}
        />
        <TextField
          name="summary"
          label="Summary"
          variant="outlined"
          fullWidth
          multiline
          minRows={2}
          maxRows={2}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.summary && touched.summary ? true : false}
          helperText={errors.summary && touched.summary ? errors.summary : ""}
          value={values.summary}
        />
        <TextField
          name="cover"
          label="image URL"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.cover && touched.cover ? true : false}
          helperText={errors.cover && touched.cover ? errors.cover : ""}
          value={values.cover}
        />
        {values.cover && !errors.cover && (
          <img
            src={comic?.cover}
            alt="project-image"
            style={{ maxWidth: "150px", maxHeight: "300px" }}
          />
        )}
        <Button type="submit" variant="outlined">
          {comic ? "Agregar" : "Aceptar"}
        </Button>
      </Stack>
    </form>
  );
};

export default ComicForm;
