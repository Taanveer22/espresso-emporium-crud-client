import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [signedUsers, setSignedUsers] = useState(loadedUsers);
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
                  <td>
                    <button className="btn btn-xs btn-info">Edit</button>
                    <button className="btn btn-xs btn-error ml-5">
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
