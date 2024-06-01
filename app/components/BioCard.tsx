import { Container, Typography, Button, Box } from "@mui/material";
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
      sx={{ width: "600px", height: "360px", gap: ".5rem" }}
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
        startIcon={<CloudUploadIcon />}
        sx={{ borderRadius: 8, height: "2rem", width: "13rem" }}
      >
        Download Resume
      </Button>
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <Typography variant="subtitle2">Follow me:</Typography>
        <GitHubIcon />
        <FacebookIcon />
      </Box>
    </Container>
  );
};

export default BioCard;