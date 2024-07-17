import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";
import { IconContext } from "react-icons/lib";

export default function ResultBox() {
  return (
    <div id="REsultBOX">
    <IconContext.Provider
      value={{
        className: "global-class-name",
        size: "85",
      }}
    >
      <IoIosInformationCircle />
    </IconContext.Provider>
    <h3>Search something to see results here.</h3>
  </div>
  )
}
