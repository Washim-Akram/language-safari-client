import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Player
        autoplay
        loop
        src="https://assets8.lottiefiles.com/packages/lf20_bdyxev2w.json"
        style={{ height: "350px", width: "350px" }}
      ></Player>

      <p className="font-medium my-4 text-red-600 md:text-[18px]">
        {error?.message}
      </p>

      <Link to="/">
        <button className="btn btn-neutral">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
