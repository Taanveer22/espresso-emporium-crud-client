import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [signedUsers, setSignedUsers] = useState(loadedUsers);

  const handleDeleteUser = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // === DELETE FROM DATABASE ===
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }

            const remainingSignedUsers = signedUsers.filter(
              (element) => element._id !== id,
            );
            setSignedUsers(remainingSignedUsers);
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-3xl font-medium text-center my-5">
        Signed Users Total : {signedUsers.length}
      </h1>

      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Creation Time</th>
                <th>Last Signin Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {signedUsers.map((element) => (
                <tr key={element._id}>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.creationTime}</td>
                  <td>{element.lastSignInTime}</td>
                  <td>
                    <button className="btn btn-xs btn-info">Edit</button>
                    <button
                      onClick={() => handleDeleteUser(element._id)}
                      className="btn btn-xs btn-error ml-5"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
