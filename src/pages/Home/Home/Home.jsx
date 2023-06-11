import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Language Safari | Home</title>
      </Helmet>
      <Banner></Banner>
      <Faq></Faq>
    </>
  );
};

export default Home;
