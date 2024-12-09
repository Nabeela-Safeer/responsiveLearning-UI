import Actions from "../components/Actions";
import Hero from "../components/Hero";
import ExploreCourses from '../components/ExploreCourses';
import OurAchivment from "../components/OurAchivment";
import Achivment from "../components/Achivment";
import Courses from "../components/Courses";
import Ourteam from "../components/Ourteam";
import Customer from "../components/Customer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Actions/>
      <Hero/>
      <ExploreCourses/>
      <OurAchivment/>
      <Achivment/>
      <Courses/>
      <Ourteam/>
      <Customer/>
      <Footer/>
    </div>
  );
}
