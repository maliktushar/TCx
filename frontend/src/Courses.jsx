import Header from "./component/Header";
import Components from "./component/Components";
import Courses from "./component/Courses";
import Live from "./component/Live";
import Practical from "./component/Practical";
import Footer from "./component/Footer";
import Navbar from "./Components/Navbar"


const Course = () => {
  return (
    <div>
      <Navbar/>
      <Components />
      <Courses />
      <Live />
      <Practical />
      <Footer />
    </div>
  );
};

export default Course;
