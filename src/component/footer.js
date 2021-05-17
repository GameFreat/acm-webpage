import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = (props) => {
  return (
    <motion.div
      initial="outThank"
      animate="inThank"
      exit="outThank"
      variants={props.pageVariation}
      className="bottom-0"
    >
      <div className="min-h-24 py-4 bg-blue-600 text-white text-xl">
        <h5 className="flex justify-center">Copyright ©ACMFISAT</h5>
        <h5 className="flex justify-center">
          Made with <AiFillHeart /> via tailwindcss
        </h5>
        <h4 className="flex justify-center">
          Made by{" "}
          <Link to="/thank">
            <BsFillPeopleFill />
          </Link>
        </h4>
      </div>
    </motion.div>
  );
};
export default Footer;
