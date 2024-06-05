
import Card from "./Card";

const data = [
  {
    heading: "Generative AI Explained",
    btn: "Learn More",
  },
  {
    heading: "Introduction to Artificial Intelligence in Software Testing",
    btn: "Learn More",
  },
  {
    heading: "Generative AI Explained",
    btn: "Learn More",
  },
  {
    heading: "Generative AI Explained",
    btn: "Learn More",
  },
  {
    heading: "Generative AI Explained",
    btn: "Learn More",
  },
  {
    heading: "Generative AI Explained",
    btn: "Learn More",
  },
];

const Live = () => {
  return (
    <div id='proj'>
      <h1 className=" px-10 py-7 lg:text-3xl md:text-2xl text-xl text-white uppercase font-semibold bg-[#191919]">
        Live Projects
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 pb-12 bg-[#191919] gap-12">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Live
