import React, { useState } from "react";
import eventsData from "../res/events.json";
import { motion } from "framer-motion";

const Event = (props) => {
  const years = Object.keys(eventsData).reverse();
  // const [years, setYears] = useState(Object.keys(eventsData).reverse());
  const [currentYear, setCurrentYear] = useState(
    Object.keys(eventsData).reverse()[0]
  );
  return (
    <motion.div
      initial="outThank"
      animate="inThank"
      exit="outThank"
      variants={props.pageVariation}
      className="h-full"
    >
      <div className="py-3 flex justify-center h-full">
        <table className="table-fixed shadow-lg align-middle min-h-64 my-auto">
          <thead className="py-2 bg-gray-200">
            <tr>
              <th className="w-1/6"></th>
              <th className=" mx-auto w-full justify-center p-4 inline-flex">
                {years.map((item) =>
                  item === currentYear ? (
                    <p
                      key={item}
                      id={item}
                      onClick={(e) => setCurrentYear(e.target.id)}
                      className="bg-blue-500 rounded-full text-white font-normal px-4 cursor-default"
                    >
                      {item}
                    </p>
                  ) : (
                    <p
                      key={item}
                      id={item}
                      onClick={(e) => setCurrentYear(e.target.id)}
                      className="px-4 font-normal cursor-pointer"
                    >
                      {item}
                    </p>
                  )
                )}
              </th>
              <th className="w-1/4"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 uppercase text-center font-bold">date</td>
              <td className="p-2 uppercase text-center font-bold">event</td>
            </tr>
            {eventsData[currentYear].map((event) => {
              return (
                <tr key={event.id} className="even:bg-gray-200">
                  <td className="px-2 py-2 font-light  tracking-wider">
                    {event.date}
                  </td>
                  <td className="p-2">{event.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Event;
