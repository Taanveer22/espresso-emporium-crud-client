import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    registerUser(email, password)
      .then((result) => {
        toast.success(result.user);
      })
      .catch((error) => {
        toast.error(error.message);
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
