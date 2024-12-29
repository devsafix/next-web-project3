"use client";

import { addNewUserFormInitialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserState({ children }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );
  const [currentEditedId, setCurrentEditedId] = useState(null);

  const data = {
    currentEditedId,
    setCurrentEditedId,
    openDialog,
    setOpenDialog,
    addNewUserFormData,
    setAddNewUserFormData,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
