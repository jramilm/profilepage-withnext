"use client";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProfileCard from "./components/ProfileCard";
import BioCard from "./components/BioCard";
import bg from "../public/images/cover.jpg";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import AvatarIconButton from "./components/IconButton";
import { useState } from "react";
import EditDialog from "./components/EditDialog";

export default function Home({}) {
  let defName = "Jose Ramil Malate";
  let defPos = "Computer Programmer";
  let defNum = "0995-056-7449";
  let defMail = "malatejramil@gmail.com";
  let defLocation = "Puerto Princesa City";
  let defBio = "I like cats, and I like Maryel.";

  const [open, setOpen] = useState(false);
  const handleClickDialog = () => {
    setOpen(true);
    console.log("Clicked");
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    defName = formJson.name;
    defPos = formJson.title;
    defNum = formJson.number;
    defMail = formJson.email;
    defLocation = formJson.city;
    defBio = formJson.bio;
    handleCloseDialog();
  };

  return (
    <main>
      <Box
        className="bg-slate-200"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <ProfileCard
          profileTitle={defPos}
          profileNum={defNum}
          profileCity={defLocation}
          profileMail={defMail}
        >
          {defName}
        </ProfileCard>
        <BioCard bioName={defName} bioTitle={defPos}>
          {defBio}
        </BioCard>
        <Box
          className="flex flex-col justify-start justify-items-start gap-2"
          sx={{ height: "300px" }}
        >
          <AvatarIconButton btnColor="orange">
            <HomeIcon />
          </AvatarIconButton>
          <AvatarIconButton btnColor="green" onBtnClick={handleClickDialog}>
            <BuildIcon />
          </AvatarIconButton>
        </Box>
      </Box>
      <EditDialog
        isOpen={open}
        onDialogClose={handleCloseDialog}
        onSubmitForm={handleSubmitForm}
        name={defName}
        email={defMail}
        title={defPos}
        number={defNum}
        location={defLocation}
        biography={defBio}
      />
    </main>
  );
}
