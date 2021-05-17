import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const thankYou = (props) => {
  return (
    <motion.div
      initial="outThank"
      animate="inThank"
      exit="outThank"
      variants={props.pageVariation}
      className="h-screen item-center bg-grey-200"
    >
      <div className="m-auto">
        <h1 className="text-xl flex justify-center ">Thank you</h1>
        <div className="Cards flex justify-center flex-wrap">
          <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
            <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
              <img
                className="w-full"
                src={process.env.PUBLIC_URL + "/images/mohit.jpeg"}
                alt="Mohit"
              />
              <div className="text-center py-2">
                <div className="font-bold text-xl mb-2">Mohit Rajan E</div>
              </div>
              <div className="px-6 py-4 flex justify-center">
                {/* <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span> */}
                <button className="border-none">
                  <a href="https://www.linkedin.com/in/mohit-rajan-e-756412160/">
                    <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      <AiFillLinkedin />
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="md:px-2 py-2 lg:px-2 py-2 w-64">
            <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
              <img
                className="w-full"
                src={process.env.PUBLIC_URL + "/images/dp.jpg"}
                alt="Mohit"
              />
              <div className="text-center py-2">
                <div className="font-bold text-xl mb-2">Naveen B Jacob</div>
              </div>
              <div className="px-6 py-4 flex justify-center">
                {/* <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span> */}
                <button className="border-none">
                  <a href="https://www.linkedin.com/in/naveen-b-jacob-229a81182/">
                    <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      <AiFillLinkedin />
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default thankYou;
