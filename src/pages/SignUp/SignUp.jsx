import { Player } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
                    {...register("confirmPassword", { required: true })}
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {errors.confirmPassword?.type === "required" && (
                    <p className="text-red-600">
                      Confirm Password field is required.
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

              <button>
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
