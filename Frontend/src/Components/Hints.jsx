import React from 'react'

export default function Hints({SearchUsing}) {
  return (
    <div id="hintforSearches">
    {SearchUsing === 0 && (
      <>
        <h4>Search Example: </h4>
        <h4> example@gmail.com</h4>
      </>
    )}
    {SearchUsing === 1 && (
      <>
        <h4>Search Example: </h4>
        <h4> +911234567890 , 1234567890, 911234567890 </h4>
        <span>Try different formats to get better results. </span>
      </>
    )}
    {SearchUsing === 2 && (
      <>
        <h4>Search Example: </h4>
        <h4> 127.0.0.1</h4>
      </>
    )}
    {SearchUsing === 3 && (
      <>
        <h4>Search Example: </h4>
        <h4> John Smith</h4>
      </>
    )}
  </div>
  )
}
