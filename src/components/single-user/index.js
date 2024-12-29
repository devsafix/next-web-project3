"use client";

import { deleteUserAction } from "@/actions";
import { Button } from "../ui/button";
import { useContext } from "react";
import { UserContext } from "@/context";
import { addNewUserFormInitialState } from "@/utils";

const SingleUser = ({ user }) => {
  const { setOpenDialog, setCurrentEditedId, setAddNewUserFormData } =
    useContext(UserContext);

  const handleDeleteUser = async (id) => {
    const result = await deleteUserAction(id, "/user-management");
    console.log(result);
  };

  const handleEdit = (user) => {
    setOpenDialog(true);
    setAddNewUserFormData({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      address: user?.address,
    });
    setCurrentEditedId(user?._id);
  };

  return (
    <div className="flex flex-col border-2 p-5 space-y-2">
      <h2>
        Name: {user.firstName} {user.lastName}
      </h2>
      <h2>Email: {user.email}</h2>
      <h2>Address: {user.address}</h2>
      <div className="flex items-center gap-5">
        <Button
          onClick={() => handleEdit(user)}
          className="p-2 bg-blue-500 text-white w-fit"
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDeleteUser(user._id)}
          className="p-2 bg-red-500 text-white w-fit"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SingleUser;
