import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const courses = useLoaderData();
  const navigate = useNavigate();

  const handleSelect = () => {
    if (!user?.email) {
      Swal.fire({
        title: "For Your Information!",
        text: "Please Login Before Select the Course",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="bg-slate-100 py-10">
      <div className="container mx-auto mt-24 mb-24 md:mt-36 p-5">
        <h2 className="text-center text-3xl font-bold mb-2">
          &quot;Explore the World Through Language Learning&quot;
        </h2>
        <p className="md:text-[17px] text-gray-500 text-center mb-12">
          Immerse yourself in the beauty of foreign languages with our dynamic
          and engaging classes. From beginners to advanced learners, our
          experienced instructors will guide you on a linguistic journey,
          helping you unlock new cultures, expand your horizons, and connect
          with people from around the world. Join us and discover the joy of
          learning a foreign language today!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {courses.map((course) => (
            <div
              key={course?._id}
              className={`card md:w-96 shadow-2xl ${
                course?.availableSeats === 0 ? "bg-red-500" : "bg-base-200"
              }`}
            >
              <figure>
                <img
                  className="w-full h-48"
                  src={course?.image}
                  alt={course?.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{course?.name}</h2>
                <h3 className="text-[18px] font-medium">
                  Instructor : {course?.instructor}
                </h3>
                <p>
                  Available Seats :{" "}
                  <span className="text-purple-600 font-medium italic text-[18px]">
                    {course?.availableSeats}
                  </span>
                </p>
                <p className="text-2xl font-medium">
                  Price :{" "}
                  <span className="font-semibold bg-amber-100">
                    {course?.price}
                  </span>
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={handleSelect}
                    disabled={course?.availableSeats === 0}
                    className="btn btn-neutral"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
