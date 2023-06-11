import { Rotate, Slide } from "react-awesome-reveal";

const Faq = () => {
  return (
    <section className="bg-slate-100 py-10">
      <div className="container mx-auto mt-24 mb-24 md:mt-36 p-5">
        <Slide>
          <h2 className="text-center text-3xl font-bold mb-2">
            Frequently Asked Questions(FAQ)
          </h2>
        </Slide>
        <Rotate>
          <p className="md:text-[17px] text-gray-500 text-center mb-12">
            Find answers to commonly asked questions about Language Safari
            below.
          </p>
        </Rotate>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            How can I enroll in Language Safari?
          </div>
          <div className="collapse-content">
            <p>
              Enrolling in Language Safari is easy! Simply visit our website and
              fill out the enrollment form. You can also contact our admissions
              team for assistance.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What languages are taught at Language Safari?
          </div>
          <div className="collapse-content">
            <p>
              Language Safari offers a wide range of language courses. Some of
              the languages we teach include English, Spanish, French, German,
              Italian, Chinese, and Japanese. Check our website for a complete
              list.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are the classes conducted online or in-person?
          </div>
          <div className="collapse-content">
            <p>
              At Language Safari, we offer both online and in-person classes.
              You can choose the learning format that suits you best. Our online
              classes are conducted via interactive video conferencing
              platforms.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How long are the language courses?
          </div>
          <div className="collapse-content">
            <p>
              The duration of our language courses varies depending on the level
              and intensity of the program. Most courses range from 4 to 12
              weeks. You can find specific course durations on our website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Are there any prerequisites to join Language Safari?
          </div>
          <div className="collapse-content">
            <p>
              There are no specific prerequisites to join Language Safari. Our
              courses cater to learners of all levels, from beginners to
              advanced. We provide a comprehensive language learning experience
              for all students.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Do you offer personalized one-on-one lessons?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer personalized one-on-one lessons for students who
              prefer individual attention. Our experienced instructors can
              tailor the lessons to your specific learning needs and goals.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What is the teaching methodology at Language Safari?
          </div>
          <div className="collapse-content">
            <p>
              At Language Safari, we follow a communicative and immersive
              teaching methodology. Our classes focus on developing speaking,
              listening, reading, and writing skills through interactive
              activities, role-plays, and real-life simulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
