import React from 'react'
import Html from './Images/html.png'
import Css from "../Components/Images/css.jpg"
import Javascript from "../Components/Images/javascript.png"
import Rea from "../Components/Images/reactjs.png"
import Tailwind from "../Components/Images/Tailwind_CSS.png"
import Github from "../Components/Images/Github.jpg"

function Skill() {
  const cardItem = [
    {
      id: 1,
      logo: Html,
      name: "Html",
    },
    {
      id: 2,
      logo: Css
      ,
      name: "CSS",
    },
    {
      id: 3,
      logo: Javascript,
      name: "Javascript",
    },
    {
      id: 4,
      logo: Rea,
      name: "React.JS",
    },
    {
      id: 5,
      logo: Tailwind,
      name: "Tailwind.CSS",
    },
    {
      id: 6,
      logo: Github,
      name: "Github",
    },
  ];
  return (
    <>
      <div name="Skills"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h6 className="  text-2xl underline font-semibold"><span>&lt;</span>
            Skills
            <span>/</span>
            <span>&gt;</span>
          </h6>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {
              cardItem.map(({ id, logo, name }) => (
                <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                  key={id}
                >
                  <img
                    src={logo}
                    className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                    alt=""
                  />
                  <div>
                    <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  </div>
                </div>
              )
              )}
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}
export default Skill