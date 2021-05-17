import React from "react";
import Image from "../res/images.json";
export default function react() {
  return (
    <div>
      {Object.keys(Image).forEach(function (key) {
        console.log(key, Image[key]);
      })}
    </div>
  );
}
