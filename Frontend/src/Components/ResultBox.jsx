import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { ColorRing } from "react-loader-spinner";

export default function ResultBox({loading,resData}) {
  return (
    <div id="REsultBOX">
      {
           loading &&
           <>
           <div id='loadercenter'>
           <ColorRing
           visible={true}
           height="50"
           width="50"
           ariaLabel="color-ring-loading"
           wrapperStyle={{}}
           wrapperClass="color-ring-wrapper"
           colors={["#000000", "", "#080808", "#1a1919", "#2e2d2d"]}
         />
           </div>
           </>
      }
      {
        !loading && resData === null &&
        <>
        <div id='SearchtoShowResult'>
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
          </>
      }

      {
        resData && !loading &&
        <>
        <h6 id='KitPatServers'>KitPat Servers</h6>
        <h2 id='Databases'>Found Results in <b>{resData.NumOfDatabase}</b> Databases </h2>
        <h2 id='ResultsNumber'>Showcasing <b>{resData.NumOfResults}</b> results</h2>
        <ul>
            {Object.keys(resData.List).map((key) => (
              <>
              <div id='leaksboss' key={key}>
                <h3>{key}</h3>
                <p>InfoLeak: {resData.List[key].InfoLeak}</p>
                <p>NumOfResults: {resData.List[key].NumOfResults}</p>
                <ul>
                  {resData.List[key].Data.map((item, index) => (
                    <li key={index}>
                      {Object.entries(item).map(([subKey, value]) => (
                        <p key={subKey}>
                          <b>{subKey}:</b> {value}
                        </p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
              </>
            ))}
          </ul>

        </>
      }

  </div>
  )
}
