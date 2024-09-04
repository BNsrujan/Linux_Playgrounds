import { SectionWraper } from "../hoc";
import { cards } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ProjectCardes = ({
  index,
  name,
  main_img,
  description,
  image,
  subname,
}) => {
  return (
    <motion.div 
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className="p-6 relative h-[435px] w-80 rounded-lg shadow-xl text-black"
    >
      <div className="flex items-center">
        <span className="w-14 h-15 rounded-lg flex justify-center items-center bg-white">
          <img src={main_img} alt={`${name} logo`} />
        </span>
        <span className="pl-4">
          <h1 className="font-bold text-3xl">{name}</h1>
          <p className="leading-3 text-xs">{subname}</p>
        </span>
      </div>
      <div className="pt-4 leading-5 text-sm">
        <p>{description}</p>
      </div>

      <div className="mt-4 gap-3 flex flex-wrap">
        {image.map((img, imgIndex) => (
          <p 
            key={`image-${imgIndex}`}
            className="flex bg-white text-black h-8 bg-white rounded-xl px-2 py-1 border border-black-200 shadow-sm justify-around items-center text-sm"
          >
            <img src={img.img} width="30px" className="px-1" alt={img.img_name}/>
            {img.img_name}
          </p>
        ))}
      </div>
      <button className="menu bg-black text-white border-b-0 absolute bottom-8 right-8 rounded-full px-3 py-2">
        Terminal
      </button>
    </motion.div>
  );
};

const Profile = () => {
  return (
    <motion.div className="relative flex flex-wrap gap-7">
      {cards.map((card, index) => (
        <ProjectCardes key={`card-${index}`} index={index} {...card} />
      ))}
    </motion.div>
  );
};

export default SectionWraper(Profile, "");
