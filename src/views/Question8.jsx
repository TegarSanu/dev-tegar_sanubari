import React from 'react';
import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import "../App.css";

function Question8() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div
      style={{
        borderColor: "#dadada",
        borderStyle: "solid",
        borderWidth: ".5px",
        padding: "10px",
      }}
    >
      <div className='App'>
        {
          loading?
          <ReactLoading type={'cubes'} color={'orange'} height={100} width={100} />
          :
          <h1>Tugas Selesai</h1>
        }
      </div>
    </div>
  );
}

export default Question8;
