import { Player } from "@lottiefiles/react-lottie-player";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  //   const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title: "Congratulations!",
          text: "Login successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div className="my-24">
      <Helmet>
        <title>Language Safari | Login</title>
      </Helmet>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <div className="w-full">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_hy4txm7l.json"
            ></Player>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl font-bold mb-2">Please Login</h1>
              <hr className="" />

              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>

                <div style={{ position: "relative" }} className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="Your Password"
                    className="input input-bordered"
                  />

                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      top: "70%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-neutral"
                  />
                </div>
              </form>

              <div className="divider">OR</div>

              <button onClick={handleGoogleSignIn}>
                <img
                  src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
                  alt="Sign in with Google"
                />
              </button>

              <Link to="/signup" className="text-center">
                <p className="text-xs">
                  New User ? Please{" "}
                  <span className="text-purple-600 font-medium hover:underline">
                    Sign Up
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
