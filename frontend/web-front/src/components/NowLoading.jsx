import React from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div style={{margin: '0 auto', marginTop: '200px'}}>
      <Loader
        type="Oval"
        color="rgb(126, 115, 155)"
        height={100}
        width={100}
      />
    </div>
  )
}

export default Loading
