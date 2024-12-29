"use client";

import { deleteUserAction } from "@/actions";
import { Button } from "../ui/button";

const SingleUser = ({ user }) => {
  const handleDeleteUser = async (id) => {
    const result = await deleteUserAction(id, "/user-management");
    console.log(result);
  };

  return (
    <div className="flex flex-col border-2 p-5 space-y-2">
      <h2>
        Name: {user.firstName} {user.lastName}
      </h2>
      <h2>Email: {user.email}</h2>
      <h2>Address: {user.address}</h2>
      <div className="flex items-center gap-5">
        <Button className="p-2 bg-blue-500 text-white w-fit">Edit</Button>
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
