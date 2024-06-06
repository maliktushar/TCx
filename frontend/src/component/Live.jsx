
import Card from "./Card";

const data = [
  
    {
      "heading": "Netflix's Unified Recommendation ML Model",
      "link": "https://youtu.be/OKmv9sUrvk8",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?netflix,ml"
    },
    {
      "heading": "Evolution of Recommendation Systems | Instagram Pinterest Twitter",
      "link": "https://youtu.be/lgoyJn7MsH8",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?socialmedia"
    },
    {
      "heading": "Multi-Armed Bandit Strategies",
      "link": "https://youtu.be/2A5f3GrX0dA",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?strategy"
    },
    {
      "heading": "Building Scalable Query-Item Two-Tower Model based Retrieval System",
      "link": "https://youtu.be/o-pZk5R0TZg",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?system"
    },
    {
      "heading": "Meituan's Game-Changing Two-Tower Retrieval Recsys Model | KDD'21",
      "link": "https://youtu.be/UhpbTSbi3lI",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?innovation"
    },
    {
      "heading": "Innovative Linkedin's Deep-learning based CTR Modeling: The Deep, Wide, and Shallow Towers Explained",
      "link": "https://youtu.be/7l0HLYVFEuU",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?linkedin,ml"
    },
    {
      "heading": "How Twitter recommends Tweets: Inside Twitter's Recommendation Algorithm",
      "link": "https://youtu.be/IhGq9jgcxFM",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?twitter,algorithm"
    },
    {
      "heading": "How eBay Built a Next-Generation Language Model to Revolutionise Online Shopping",
      "link": "https://youtu.be/h51nbWr7feo",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?shopping,ai"
    },
    {
      "heading": "Leveraging Pre-trained Bert to generate Entity Embeddings across domain",
      "link": "https://youtu.be/v-0J7o-nDBE",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?bert,ai"
    },
    {
      "heading": "Learn to Build an In-App Voice AI Assistant",
      "link": "https://www.udemy.com/course/alan-ai-course/",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?voice,ai"
    },
    {
      "heading": "Dynamic Pricing Strategy to effectively fill slots | E-commerce | Travel | Hospitality Domains",
      "link": "https://youtu.be/a_CXpnsvPa0",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?ecommerce,pricing"
    },
    {
      "heading": "Train your own Product Embeddings | Embeddings across Domains | Training on 1.02 Billion rows on GPU",
      "link": "https://youtu.be/DN4S96oHRhE",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?gpu,training"
    },
    {
      "heading": "Approximate Nearest Neighbour and a popular Library Annoy for k-Nearest Neighbour Search & Product Quantizer",
      "link": "https://youtu.be/DSQOrBTqmYA",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?neuralnetwork,ai"
    },
    {
      "heading": "Approximate Nearest Neighbour and a popular Library Annoy for k-Nearest Neighbour Search & Product Quantizer",
      "link": "https://youtu.be/50PNumB7s3U",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?search,algorithm"
    },
    {
      "heading": "PID Controller to add a layer of diversity to the recommender systems",
      "link": "https://youtu.be/laTxgnzjfR0",
      "btn": "Get Link",
      "image": "https://source.unsplash.com/800x600/?controller,diversity"
    }
  
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
