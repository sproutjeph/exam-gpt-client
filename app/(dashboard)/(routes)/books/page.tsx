"use client";

import TextBookCard from "@/components/base-components/TextBookCard";
import { textBooks } from "@/utils/data";
import { Container, Grid, Typography } from "@mui/material";
import { FC } from "react";

interface pageProps {}

const TextBooksPage: FC<pageProps> = ({}) => {
  return (
    <Container>
      <Typography
        variant="h5"
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          marginTop: "2rem",
          color: "white",
        }}
      >
        Text Books
      </Typography>

      <Grid container spacing={3}>
        {textBooks.map((textBook) => (
          <Grid item key={textBook.id} xs={12} sm={6} md={4} lg={3}>
            <TextBookCard textBook={textBook} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TextBooksPage;
