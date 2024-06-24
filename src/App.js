import Hero from "./components/hero/hero";
import Nav from "./components/navigation/nav";
import SummerLocations from "./components/body/summerLocations";
import ResortTreat from "./components/body/resortTreats";
import Experiences from "./components/body/experiences";
import Tourism from "./components/body/tourism";
import InfoCard from "./components/body/InfoCard";
import ReviewSection from "./components/body/Reviews";
import Newsletter from "./components/body/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <SummerLocations />
      <ResortTreat />
      <Experiences />
      <Tourism />
      <InfoCard />
      <ReviewSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
