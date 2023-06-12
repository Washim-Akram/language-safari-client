import { useEffect, useState } from "react";
import { Rotate, Slide } from "react-awesome-reveal";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popular-instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto mt-24 mb-24 md:mt-36 p-5">
        <Slide>
          <h2 className="text-center text-3xl font-bold mb-2">
            Meet Our Popular Instructors
          </h2>
        </Slide>
        <Rotate>
          <p className="md:text-[17px] text-gray-500 text-justify md:text-center mb-12">
            Meet our exceptional language instructors who are passionate about
            teaching and dedicated to helping you succeed in your language
            learning journey. Discover their impressive qualifications, years of
            experience, and unique teaching approaches. Benefit from their
            expertise and cultural insights as they guide you to develop strong
            language skills in speaking, listening, reading, and writing. Join
            us and learn from the best to achieve your language learning goals.
          </p>
        </Rotate>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor?._id}
              className="card md:w-96 bg-base-100 shadow-xl image-full"
            >
              <figure>
                <img src={instructor?.image} alt={instructor?.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{instructor?.name}</h2>
                <p>{instructor?.email}</p>
                <p>Language : {instructor?.language}</p>
                <p>Experience(Years) : {instructor?.experience}</p>
                <p>Number of Classes : {instructor?.numberOfClasses}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">See Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
