import Hero from "./components/hero/hero";
import Nav from "./components/navigation/nav";
import SummerLocations from "./components/body/summerLocations";
import ResortTreat from "./components/body/resortTreats";
import Experiences from "./components/body/experiences";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <SummerLocations />
      <ResortTreat />
      <Experiences />
    </>
  );
}

export default App;
