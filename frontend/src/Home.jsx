import Navbar from "./Components/Navbar.jsx";
import e1 from './assets/Group 65.svg';
import braintree from "./assets/braintree.svg";
import Footer from "./component/Footer.jsx";

const Home = () => {
  // document.cookie="BlahBlahBlah"
  console.log(document.cookie)
  return (
    <>
    <div className="z-10">
    <Navbar />
    </div>
      
      <div className="min-h-screen bg-black flex flex-col lg:flex-row justify-around items-center lg:items-start px-4 lg:p-0 relative z-0">
        <div className="image lg:w-1/3 px-4 lg:p-0 relative z-10">
          <img src={e1} alt="box_img" className=" w-[60%] h-[80%] mt-[-60px] sm:mt-[-120px] md:w-[90%] md:mt-[-60px] z-40 md:h-[60%] lg:h-full lg:pl-14 relative" />
        </div>
        <div className="content  text-white border rounded-xl lg:h-[120%] lg:py-10 w-[80%] md:w-2/3 lg:w-2/3 mt-10 lg:px-20 lg:mr-10 flex flex-col items-center p-4 relative z-10">
          <h1 className="text-2xl lg:text-4xl font-bold gradient-text text-center mt-4 lg:mt-12">
            Become an AI Prodigy
          </h1>
          <p className="mt-4 lg:mt-10 text-center px-2 lg:px-4">
            We believe the best learning happens when the content is directly
            related to the on-job real-world applications. There are skill-based
            and real-world resources to get you in the driving seat for
            implementing that concept.
          </p>
          <a href="/courses" className="bg-white mt-4 lg:mt-10 rounded-full text-center px-6 lg:px-12 py-2 lg:py-3 text-sm font-medium text-black transition hover:bg-orange-800 focus:outline-none focus:ring focus:ring-yellow-400">
            Start Learning Today
          </a>
        </div>
      </div>

      <div className="text-white text-center mt-4 px-4 relative z-0">
        <h2 className="text-2xl lg:text-3xl mb-4 lg:mb-8 font-semibold">
          Transform your Skills, Transform your Future
        </h2>
        <p>
          Worlds First GenAI upskilling Platform to make you job ready. Equip
          yourself with GenAI skills with our comprehensive
          <br className="hidden lg:inline" /> resources curated by Top leading AI Experts.
        </p>
      </div>

      <section className="mt-10 px-4 relative z-0">
        <div className="mx-auto max-w-screen-xl py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={braintree}
                className="absolute inset-0 h-full w-full object-cover rounded-md"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-2xl lg:text-3xl font-medium sm:text-4xl text-white">
                Future-Proof Your Career Today
              </h2>

              <p className="mt-4 text-gray-300">
                Don’t let the fear of layoffs hold you back. With TCx, you’ll be
                armed with the knowledge and skills to navigate and lead in the
                AI-driven world.
              </p>
              <p className="mt-4 text-gray-300">
                Sign up now and take the first step towards an
                empowered, secure, and exciting future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
