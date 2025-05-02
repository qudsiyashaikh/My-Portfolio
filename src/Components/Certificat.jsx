import React from 'react'
import Html from "./Images/HTML,CSS,JAVASCRIPT.png"
import R from './Images/REACT.JS.png'
import G from './Images/GIT, GITHUB.png'
import Ght from './Images/CHATGPT.png'

function Certificat  ()  {
  const cardItem = [
    {
      id: 1,
      logo: Html,
      name: "HTML,CSS,JAVASCRIPT",
      
    },
    {
      id: 2,
      logo: R,
      name: "REACT.JS",
      
    },
    {
      id: 3,
      logo: G,
      name: "GIT, GITHUB",
      
    },
    {
      id: 4,
      logo: Ght,
      name: "CHATGPT",
     
    },
    
  ];
  return (
    <>
    <div  name="Certificat"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div>
        <h1  className="text-2xl underline font-semibold"> <span>&lt;</span>  Certificatons  <span>/</span>
        <span>&gt;</span>  </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {
            cardItem.map(({id,logo,name})=>(
              <div  className="md:w-[300px] md:h-[300px]
               border-[2px] rounded-lg shadow-lg p-1 justify-between
               cursor-pointer hover:scale-110 duration-300"
               key={id}>
<img src={logo} alt="" />
<div className="px-2 font-bold text-xl mb-2">{name}
</div>
              </div>
            ))
          }
        </div>
        </div>
        
        </div>
    <hr />
    </>
  )
}

export default Certificat