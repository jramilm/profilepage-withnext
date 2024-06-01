import { Avatar, IconButton } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import React, { ReactNode } from "react";

interface Props {
  btnColor: string;
  children: ReactNode;
  onBtnClick?: () => void;
}

const AvatarIconButton = ({ btnColor, children, onBtnClick }: Props) => {
  return (
    <IconButton size="small" onClick={onBtnClick}>
      <Avatar sx={{ bgcolor: btnColor }}>{children}</Avatar>
    </IconButton>
  );
};

export default AvatarIconButton;
