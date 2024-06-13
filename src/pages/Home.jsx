
import Navbar from "../components/Navbar";
import FAQ from "../components/faq.";
import Category from "../components/landing/Category";
import ChooseUs from "../components/landing/ChooseUs";
import Explore from "../components/landing/Explore";
import Hero from "../components/landing/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mt-10">
      <Category />
      </div>
      <div className="py-3">
      <ChooseUs />
      </div>
      <Explore />
      <FAQ />
    </div>
  );
};

export default Home;
