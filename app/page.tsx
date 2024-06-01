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
  const [defName, setDefName] = useState("Jose Ramil Malate");
  const [defPos, setDefPos] = useState("Computer Programmer");
  const [defNum, setDefNum] = useState("0995-056-7449");
  const [defMail, setDefMail] = useState("malatejramil@gmail.com");
  const [defLocation, setDefLocation] = useState("Puerto Princesa City");
  const [defBio, setDefBio] = useState("I like cats, and I love Maryel.");

  const [open, setOpen] = useState(false);
  const handleClickDialog = () => {
    setOpen(true);
    console.log("Clicked");
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSubmitForm = (formData: any) => {
    setDefName(formData.fullname);
    setDefPos(formData.title);
    setDefNum(formData.number);
    setDefMail(formData.email);
    setDefLocation(formData.city);
    setDefBio(formData.bio);
    handleCloseDialog();
  };

  return (
    <main>
      <Box
        className="bg-slate-200"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          overflow: "auto",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
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
          className="flex justify-start justify-items-start gap-2"
          sx={{ height: "300px", flexDirection: { xs: "row", md: "column" } }}
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
        name={defName}
        email={defMail}
        title={defPos}
        number={defNum}
        location={defLocation}
        biography={defBio}
        onSubmitForm={handleSubmitForm}
      />
    </main>
  );
}
