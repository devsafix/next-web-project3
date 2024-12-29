"use client";

import {
  addNewUserAction,
  editNewUserAction,
  getAllUserAction,
} from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserContext } from "@/context";
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const AddNewUser = () => {
  const {
    openDialog,
    setOpenDialog,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedId,
    setCurrentEditedId,
  } = useContext(UserContext);

  const router = useRouter();

  const handleSaveButtonDisable = () => {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  };

  async function handleAddNewUserAction() {
    const result =
      currentEditedId !== null
        ? await editNewUserAction(
            currentEditedId,
            addNewUserFormData,
            "/user-management"
          )
        : await addNewUserAction(addNewUserFormData);
    if (result) {
      setOpenDialog(false);
      setAddNewUserFormData(addNewUserFormInitialState);
      setCurrentEditedId(null);
      router.refresh();
    }
  }

  return (
    <div>
      <div className="flex justify-around ">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div>
          <Button onClick={() => setOpenDialog(true)}>Add New User</Button>
        </div>
      </div>
      <div>
        <Dialog
          open={openDialog}
          onOpenChange={() => {
            setOpenDialog(false);
            setAddNewUserFormData(addNewUserFormInitialState);
            setCurrentEditedId(null);
          }}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {currentEditedId !== null ? "Update User" : "Add New User"}
              </DialogTitle>
            </DialogHeader>
            <form action={handleAddNewUserAction} className="grid gap-4 py-4">
              {addNewUserFormControls.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-4 items-center gap-4"
                >
                  <Label htmlFor={item.name} className="text-right">
                    {item.label}
                  </Label>
                  <Input
                    required
                    id={item.name}
                    name={item.name}
                    placeholder={item.placeholder}
                    value={addNewUserFormData[item.name]}
                    onChange={(e) =>
                      setAddNewUserFormData({
                        ...addNewUserFormData,
                        [item.name]: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
              ))}

              <DialogFooter>
                <Button
                  disabled={!handleSaveButtonDisable()}
                  type="submit"
                  className="disabled:text-opacity-60"
                >
                  Save
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div></div>
    </div>
  );
};

export default AddNewUser;
