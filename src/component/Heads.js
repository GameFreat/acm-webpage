import React, { useState } from "react";
import headDetails from "../res/heads.json";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Heads() {
  var presentYear = parseInt(
    new Date(Date.now()).toLocaleString().split(",")[0].split("/")[2]
  );
  const [changeYear, setChangeYear] = useState(presentYear - 1);
  console.log(presentYear);
  console.log(changeYear);

  const decrement = () => {
    if (changeYear === 2016) {
      document.getElementById("decrementer").style.visibility = "hidden";
    } else {
      setChangeYear(changeYear - 1);
      document.getElementById("decrementer").style.visibility = "visible";
      document.getElementById("incrementer").style.visibility = "visible";
    }
  };
  const increment = () => {
    if (changeYear === presentYear - 1) {
      document.getElementById("incrementer").style.visibility = "hidden";
    } else {
      setChangeYear(changeYear + 1);
      document.getElementById("decrementer").style.visibility = "visible";
      document.getElementById("incrementer").style.visibility = "visible";
    }
  };
  return (
    <div className="text-center p-1">
      <div className="flex justify-center p-2">
        <h1 className="rounded text-xl w-16">{changeYear}</h1>
      </div>
      <div className="flex justify-center">
        <button onClick={decrement} id="decrementer">
          <AiOutlineArrowLeft />
        </button>
        {
          //to get all the values in key variable of the json.
          headDetails[changeYear].map((item) => (
            <div className="p-1" key={item.key}>
              <img
                className="min-w-26 w-26 rounded"
                src={process.env.PUBLIC_URL + item.image}
                alt="heads"
              />
              <h4 className="text-center">{item.post}</h4>
            </div>
          ))
        }
        <button onClick={increment} id="incrementer">
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
