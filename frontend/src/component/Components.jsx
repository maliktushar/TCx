import e1 from "../images/Rectangle 4146.png";
import e2 from "../images/image 1 (1).png";
import e3 from "../images/top-view-man-working-late-night 1.png";
import Card from "./Card";

const data = [
  {
    image: e1,
    heading: "Courses",
    text: "Learn how to implement and leverage GenAI in your profession with these comprehensive  courses",
    btn: "Read More",
    isCa: true,
    rm: true,
    link:'#courses'
  },
  {
    image: e2,
    heading: "LIVE PROJECTS",
    text: "Gain deeper insights with AI-driven analytics that provide a comprehensive view of candidate performance.  ",
    btn: "Read More",
    isCa: true,
    rm:true,
    link:'#proj'
  },
  {
    image: e3,
    heading: "PRACTICE TEST",
    text: "Benefit from practice tests that adapt to your learning pace and focus on areas needing improvement.",
    btn: "Read More",
    isCa: true,
    rm:true,
    link:'#prac'
  },
];

const Components = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 py-12 bg-[#191919] gap-12">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Components;
