import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

interface Props {
  children: string;
  profileTitle: string;
  profileNum: string;
  profileCity: string;
  profileMail: string;
}

const ProfileCard = ({
  children,
  profileTitle,
  profileNum,
  profileCity,
  profileMail,
}: Props) => {
  return (
    <Container
      fixed
      className="bg-slate-100 rounded-md content-center shadow-md"
      sx={{
        width: "300px",
        height: "300px",
        marginTop: { xs: "45%", md: "0" },
        margin: { md: "16px" },
      }}
    >
      <Avatar
        className="mx-auto shadow-lg"
        alt={children}
        src="avatars/avatar.jpg"
        sx={{
          width: "200px",
          height: "200px",
          position: "relative",
          top: 0,
          marginTop: "-130px",
          marginBottom: "15px",
        }}
      />
      <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
        {children}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"}>
        {profileTitle}
      </Typography>
      <Divider className="m-3" />
      <Box className="ml-2">
        <Box display="flex" gap="10px" alignItems="center" className="mb-2">
          <LocalPhoneIcon fontSize="inherit" />
          <Typography variant="subtitle2">{profileNum}</Typography>
        </Box>
        <Box display="flex" gap="10px" alignItems="center" className="mb-2">
          <EmailIcon fontSize="inherit" />
          <Typography variant="subtitle2">{profileMail}</Typography>
        </Box>
        <Box display="flex" gap="10px" alignItems="center" className="mb-2">
          <PlaceIcon fontSize="inherit" />
          <Typography variant="subtitle2">{profileCity}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileCard;
