const SingleUser = ({ user }) => {
  return (
    <div className="flex flex-col border-2 p-5 space-y-2">
      <h2>
        Name: {user.firstName} {user.lastName}
      </h2>
      <h2>Email: {user.email}</h2>
      <h2>Address: {user.address}</h2>
      <div className="flex items-center gap-5">
        <button className="p-2 bg-blue-500 text-white w-fit">Edit</button>
        <button className="p-2 bg-red-500 text-white w-fit">Delete</button>
      </div>
    </div>
  );
};

export default SingleUser;
