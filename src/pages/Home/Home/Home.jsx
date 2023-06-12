import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Language Safari | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularInstructors></PopularInstructors>
      <Faq></Faq>
    </>
  );
};

export default Home;
