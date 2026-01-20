import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(newUser);

    registerUser(email, password)
      .then((result) => {
        toast.success("registered user successfully");
        console.log(result.user);
        const creationTime = result?.user?.metadata?.creationTime;

        // send data to server and database
        const newUser = { name, email, creationTime };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              toast.success("user created in database");
            }
          });
      })
      .catch((error) => {
        toast.error("failed to register");
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <form
        onSubmit={handleRegisterForm}
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
      >
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Register;
