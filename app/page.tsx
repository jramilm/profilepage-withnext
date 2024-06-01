import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProfileCard from "./components/ProfileCard";
import BioCard from "./components/BioCard";
import bg from "../public/images/cover.jpg";

export default function Home({}) {
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
          profileTitle="Computer Programmer"
          profileNum="0995-056-7449"
          profileCity="Puerto Princesa City"
          profileMail="malatejramil@gmail.com"
        >
          Jose Ramil Malate
        </ProfileCard>
        <BioCard bioName="Jose Ramil Malate" bioTitle="Computer Programmer">
          I like cats, and I like maryel.
        </BioCard>
      </Box>
    </main>
  );
}
