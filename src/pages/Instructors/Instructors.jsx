import { useLoaderData } from "react-router-dom";

const Instructors = () => {
  const instructors = useLoaderData();

  return (
    <div className="bg-slate-100 py-10">
      <div className="container mx-auto mt-24 mb-24 md:mt-36 p-5">
        <h2 className="text-center text-3xl font-bold mb-2">
          Meet Our Skilled and Passionate Language Instructors!
        </h2>
        <p className="md:text-[17px] text-gray-500 text-center mb-12">
          Discover the dedicated and experienced instructors at our prestigious
          foreign language learning school. Our team of highly qualified
          language experts is committed to guiding you on your journey to
          linguistic fluency. Each instructor brings a unique teaching style and
          deep cultural knowledge to the classroom, ensuring an immersive and
          engaging learning experience. Whether you are a beginner or an
          advanced learner, our instructors will inspire and motivate you to
          reach your language goals. Get to know our exceptional instructors who
          are ready to unlock your language potential and make your learning
          experience unforgettable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor?._id}
              className="card lg:card-side bg-base-100 shadow-xl"
            >
              <figure>
                <img src={instructor?.image} alt={instructor?.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{instructor?.name}</h2>
                <p>{instructor?.email}</p>
                <p>Number of Classes : {instructor?.numberOfClasses}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">See Classes</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
