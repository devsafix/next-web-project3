import { getAllUserAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUser from "@/components/single-user";

const UserManagement = async () => {
  const allUsers = await getAllUserAction();
  console.log(allUsers.data);

  return (
    <div className="p-20">
      <AddNewUser />
      <div className="mt-10 flex gap-5 flex-wrap">
        {allUsers && allUsers.data ? (
          allUsers.data.map((user) => <SingleUser key={user._id} user={user} />)
        ) : (
          <h2>No User Found</h2>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
