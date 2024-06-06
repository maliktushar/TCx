import Card from "./Card";

const data = [
  {
    heading: "Generative AI Explained",
    link: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-07+V1",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?artificial-intelligence"
  },
  {
    heading: "Introduction to Artificial Intelligence in Software Testing",
    link: "https://www.udemy.com/course/introduction-to-artificial-intelligence-in-software-testing/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?machine-learning"
  },
  {
    heading: "Introduction to AI for Business",
    link: "https://www.udemy.com/course/introduction-to-ai-for-business/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?ai"
  },
  {
    heading: "Artificial Intelligence in Manufacturing",
    link: "https://www.udemy.com/course/artificial-intelligence-in-manufacturing/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?manufacturing,artificial-intelligence"
  },
  {
    heading: "Artificial Intelligence for Accountants I",
    link: "https://www.udemy.com/course/artificial-intelligence-for-accountants-i/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?accounting,artificial-intelligence"
  },
  {
    heading: "AI For Teachers and Educators",
    link: "https://www.udemy.com/course/ai-for-teachers-and-educators/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?education,artificial-intelligence"
  },
  {
    heading: "Neuroevolution: Genetic Algorithms And Artificial NeuralNets",
    link: "https://www.udemy.com/course/neuroevolution-genetic-algorithms-and-artificial-neuralnets/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?neural-networks"
  },
  {
    heading: "Machine Intelligence - an Introductory Course",
    link: "https://www.udemy.com/course/machine-intelligence-masterclass/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?machine-intelligence"
  },
  {
    heading: "Introduction to machine learning for beginners",
    link: "https://www.youtube.com/watch?v=6mSx_KJxcHI&list=PLlrxD0HtieHjNnGcZ1TWzPjKYWgfXSiWG",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?machine-learning"
  },
  {
    heading: "Fundamentals of Machine Learning through Python",
    link: "https://www.udemy.com/course/fundamentals-of-machine-learning-through-python/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?python,programming"
  },
  {
    heading: "Introduction to Large Language Models",
    link: "https://www.cloudskillsboost.google/paths/118/course_templates/539",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?language,ai"
  },
  {
    heading: "Artificial Intelligence Markup Language (AIML)",
    link: "https://www.udemy.com/course/artificial-intelligence-markup-language/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?aiml"
  },
  {
    heading: "AI Prompt Mastery - Part I",
    link: "https://www.udemy.com/course/ai-prompt-mastery-part-i/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?ai"
  },
  {
    heading: "ChatGPT in 30 Minutes: NEW Prompt Engineering & AI Skills",
    link: "https://www.udemy.com/course/chatgpt-in-30-minutes-new-prompt-engineering-ai-skills/",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?chatbot,ai"
  },
  {
    heading: "Prompt Design in Vertex AI",
    link: "https://www.cloudskillsboost.google/paths/118/course_templates/976",
    btn: "Get Link",
    image: "https://source.unsplash.com/800x600/?ai"
  },
];



const Courses = () => {
  return (
    <div id="courses">
      <h1 className=" px-10 py-7 lg:text-3xl md:text-2xl text-xl text-white uppercase font-semibold bg-[#191919]">
        COURSES
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 pb-12 bg-[#191919] gap-12">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
