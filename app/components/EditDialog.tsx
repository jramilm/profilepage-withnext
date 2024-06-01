import React from "react";
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

interface Props {
  isOpen: boolean;
  onDialogClose: () => void;
  name: string;
  title: string;
  number: string;
  location: string;
  biography?: string;
  email: string;
  onSubmitForm: (formData: any) => void;
}

const EditDialog = ({
  isOpen,
  onDialogClose,
  name,
  title,
  number,
  location,
  biography,
  email,
  onSubmitForm,
}: Props) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onDialogClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          onSubmitForm(formJson);
          onDialogClose();
        },
      }}
    >
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent sx={{ width: "20rem" }}>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="fullname"
          label="Full Name"
          defaultValue={name}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          name="title"
          label="Position"
          defaultValue={title}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email"
          defaultValue={email}
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="number"
          name="number"
          label="Contact No."
          defaultValue={number}
          type="tel"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="city"
          name="city"
          label="Location"
          defaultValue={location}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          className="mt-8"
          multiline
          rows={5}
          autoFocus
          margin="dense"
          id="bio"
          name="bio"
          label="Biography"
          defaultValue={biography ? biography : null}
          type="text"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogClose}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
