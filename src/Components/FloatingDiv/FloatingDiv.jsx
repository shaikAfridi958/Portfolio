import React from "react";
import {motion} from 'framer-motion'
import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2}) => {
  return (
    <motion.div  initial={{x:'-100%'}} animate={{x:'20%'}} className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </motion.div>
  );
};

export default FloatinDiv;