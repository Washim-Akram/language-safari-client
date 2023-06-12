import { Player } from "@lottiefiles/react-lottie-player";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const { name, email, password, photoURL } = data;

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(name, photoURL)
        .then(() => {
          const saveUser = { name: name, email: email };
          fetch("https://language-safari-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "Congratulations!",
                  text: "User Created Successfully.",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
                reset();
                navigate("/");
              }
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          Swal.fire({
            title: "Error!",
            text: `${errorMessage}`,
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
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
        <title>Language Safari | Sign Up</title>
      </Helmet>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <div className="w-full">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_mjlh3hcy.json"
            ></Player>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-4xl font-bold mb-2">Please Sign Up</h1>
              <hr className="" />

              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                  {errors.name && <span>Name field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                  {errors.email && <span>Email field is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Your Password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password field is required.</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password field must be minimum 6 characters long.
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password field have to contain one uppercase, one
                      lowercase, one digits and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    {...register("photoURL", { required: true })}
                    placeholder="Your Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && <span>Photo URL field is required</span>}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-neutral"
                    type="submit"
                    value="Sign Up"
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

              <Link to="/login" className="text-center">
                <p className="text-xs">
                  Already have an account ? Please{" "}
                  <span className="text-purple-600 font-medium hover:underline">
                    Login
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

export default SignUp;
