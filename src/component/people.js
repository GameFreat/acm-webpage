import React from "react";
import Heads from "./Heads";
import Peoplejs from "../res/people.json";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const People = (props) => {
  return (
    <motion.div
      initial="outThank"
      animate="inThank"
      exit="outThank"
      variants={props.pageVariation}
      className="bg-gray-200 text-blue-600 pt-4"
    >
      {/*heading*/}
      <div>
        <p className="flex justify-center text-2xl text-blue text-center">
          ACM heads of the respective years
        </p>
        <Heads />
        <p className="flex justify-center text-xl text-blue text-center">
          People stood with ACM no matter what
        </p>
      </div>
      {/*---------------------------------------For the people cards----------------------------------------------------*/}
      <div className="flex flex-wrap justify-center text-blue-600 py-2">
        {Peoplejs.map((item) => (
          <div key={item.key} className="md:px-2 py-2 lg:px-2 py-2 w-64">
            <div className="max-w-sm rounded overflow-hidden bg-gray-100 shadow-lg">
              <img
                className="w-full"
                src={process.env.PUBLIC_URL + item.image}
                alt={item.name}
              />
              <div className="text-center py-2">
                <div className="font-bold text-xl mb-2">{item.name}</div>
              </div>
              <div className="px-6 py-4 flex justify-center">
                {/* <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><AiFillGitlab/></span> */}
                <button className="border-none">
                  <a href={item.linkedin}>
                    <span className="mx-32 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      <AiFillLinkedin />
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
    </motion.div>
  );
};
export default People;
