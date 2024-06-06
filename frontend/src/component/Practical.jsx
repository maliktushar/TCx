// import Card from "./Card";

// const data = [
//   {
//     heading: "Generative AI Explained",
//     btn: "Learn More",
//   },
//   {
//     heading: "Introduction to Artificial Intelligence in Software Testing",
//     btn: "Learn More",
//   },
//   {
//     heading: "Generative AI Explained",
//     btn: "Learn More",
//   },
//   {
//     heading: "Generative AI Explained",
//     btn: "Learn More",
//   },
//   {
//     heading: "Generative AI Explained",
//     btn: "Learn More",
//   },
//   {
//     heading: "Generative AI Explained",
//     btn: "Learn More",
//   },
// ];

const Practical = () => {
  return (
    <div id="prac">
      <h1 className=" px-10 py-7 lg:text-3xl md:text-2xl text-xl text-white uppercase font-semibold bg-[#191919]">
        Practice Test
      </h1>
      <div className="flex flex-row justify-center items-center w-full px-10 pb-12 bg-[#191919] gap-12">
        {/* {data.map((item, index) => (
          <Card key={index} {...item} />
        ))} */}
        <button disabled className="bg-[#FF7C1D] px-8 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-lg text-white">
        Coming Soon
      </button>
      </div>
    </div>
  )
}

export default Practical
