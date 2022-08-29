
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Courses from './Component/Courses/Courses';
import Category from './Component/Category/Category';
import Stat from './Component/Star/Stat';
import Hero2 from './Hero2/Hero2';
import Approv from './Approv/Approv';
import Hero3 from './Hero2/Hero3';
import Webinar from './Webinar/Webinar';
import Hero4 from './Hero2/Hero4';
import Multicards from './Multicards/Multicards';
import Instructors from './Component/Category/Instructors/Instructors';
import RecentCourses from './RecentCourses/RecentCourses';
import DoubleHero from './Hero2/DoubleHero';

function App() {
  return (
    <div >
           <Navbar></Navbar>
           <Hero></Hero>
           <Courses></Courses>
           <Stat/>
           <Category/>
           <Hero2/>
           <Approv/>
           <Hero3/>
           <Webinar/>
           <Multicards/>
           <Hero4/>
           <Instructors/>
           <RecentCourses/>
           <DoubleHero/>
    </div>
  );
}

export default App;
