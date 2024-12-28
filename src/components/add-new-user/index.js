"use client";

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
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils";
import { useState } from "react";

const AddNewUser = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );

  console.log(addNewUserFormData);

  const handleSaveButtonDisable = () => {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  };

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
          }}
        >
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
            </div>
            <DialogFooter>
              <Button
                disabled={!handleSaveButtonDisable()}
                type="submit"
                className="disabled:text-opacity-60"
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddNewUser;