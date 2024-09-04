import { SectionWraper } from "../hoc";
import { cards } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const ProjectCardes = ({
  index,
  name,
  main_img,
  description,
  image,
  subname,
}) => {
const Navigate = useNavigate();

  return (
    <motion.div  variants={fadeIn('up', 'spring', index * 1/6, 1.6)}className="p-6 relative h-[435px] w-80 rounded-lg text-black  
    border border-slate-200   
    hover:shadow-md hover:scale-50  hover:scale-300  hover:transition hover:duration-300 hover:ease-in-out  ">
      <div className=" flex  items-center">
        <span className="   w-14 h-15 rounded-lg flex justify-center items-center bg-white">
          <img src={main_img} />
        </span>
        <span className="pl-4">
          <h1 className=" font-bold text-3xl">{name}</h1>
          <p className=" leading-3 text-xs">{subname}</p>
        </span>
      </div>
      <div className="pt-4 leading-5  font-semibold text-sm">
        <p>{description}</p>
      </div>

      <div className=" mt-4 gap-3 flex flex-wrap cursor-pointer ">
        {image.map((image,index) => (
          <p key={index} className="flex gap-1 border border-slate-300 px-1  rounded-md  
           hover:border-purple-90 hover:border-gray-400
           hover:duration-500 hover:shadow-sm">
            <img src={image.img} width="30px" className="px-1"/>
            {image.img_name}
          </p>
        ))}
      </div>
      <button onClick={()=>{Navigate(`/terminal/${name}`)}} className="  [background:linear-gradient(-1deg,_#000_75.1%,_#323232)] hover:[background:linear-gradient(180deg,_#000_75.1%,_#323232)]  hover:duration-700 text-white  border-b-0  absolute bottom-8 right-8 rounded-lg px-3   hover:shadow-md py-2">
      
        Terminal
        
      </button>
    </motion.div>
  );
};

const Cards = () => {
  return (
    <motion.div className="relative flex flex-wrap gap-7  justify-center ">
      {cards.map((cards, index) => (
        <ProjectCardes key={`card-${index}`} index={index} {...cards} />
      ))}
    </motion.div>
  );
};

export default SectionWraper(Cards, "");
