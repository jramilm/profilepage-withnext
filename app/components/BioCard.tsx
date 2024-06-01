import { Container, Typography, Button, Box, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";

interface Props {
  children: string;
  bioName: string;
  bioTitle: string;
}

const BioCard = ({ children, bioTitle, bioName }: Props) => {
  return (
    <Container
      fixed
      className="flex flex-col m-2 content-center p-5"
      sx={{
        width: { xs: "100%", sm: "600px" },
        height: "auto",
        gap: ".5rem",
        p: { xs: 2, sm: 5 },
      }}
    >
      <Typography variant="h6" fontStyle={"italic"} fontWeight={"bold"}>
        HELLO! I'M
      </Typography>
      <Typography variant="h3" fontWeight={"bold"}>
        {bioName + "!"}
      </Typography>
      <Typography variant="h6" fontWeight={"200"}>
        {bioTitle}
      </Typography>
      <Typography variant="subtitle2">{children}</Typography>
      <Button
        className="my-3"
        variant="contained"
        component="a"
        href="/resume.jpg"
        download="resume.jpg"
        startIcon={<CloudUploadIcon />}
        sx={{
          borderRadius: 8,
          height: "2rem",
          width: { xs: "100%", sm: "13rem" },
        }}
      >
        Download Resume
      </Button>
      <Box display={"flex"} gap={"2px"} alignItems={"center"}>
        <Typography variant="subtitle2">Follow me:</Typography>
        <IconButton href="https://github.com/jramilm">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.facebook.com/malatejramil">
          <FacebookIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default BioCard;
