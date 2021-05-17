import React, { useState } from "react";
import Iframe from "react-iframe";
import { motion } from "framer-motion";

export default function Membership(props) {
  var Spinner = require("react-spinkit");
  const [loading, setLoading] = useState(true);
  const hideSpinner = () => {
    setLoading(false);
  };
  return (
    <motion.div
      initial="outThank"
      animate="inThank"
      exit="outThank"
      variants={props.pageVariation}
    >
      {loading ? (
        <Spinner
          className="loading text-center flex justify-center inline-block "
          name="three-bounce"
          color="red"
          fadeIn="none"
        />
      ) : null}
      <Iframe
        style={{ overflowY: "hidden" }}
        className="w-full h-screen"
        onLoad={hideSpinner}
        url="https://docs.google.com/forms/d/e/1FAIpQLScNwhsLm_jtOpGKV4UxWSUsE2v1Q7fL_MK3cAzJTYBa71jLAQ/viewform?usp=sf_link"
        position="relative"
      />
    </motion.div>
  );
}
