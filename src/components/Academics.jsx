import React from "react";
import { LiaUniversitySolid,LiaSchoolSolid } from "react-icons/lia";
import { Fragment } from "react/cjs/react.production.min";
import Academic from "./Academic";
import { MdOutlineSchool,MdWorkOutline } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";


const myAcademics = [
  {
    id:1,
    icon: <LiaUniversitySolid className="h-8 w-8 m-3" />,
    heading: "Masters in computer science",
    subheading: "From Galgotias university (Greater Noida) ",
    isShow: true,
  },
  {
    id:2,
    icon: <MdOutlineSchool className="h-8 w-8 m-3" />,
    heading: "Batchlers in computer science",
    subheading: "From BRABU university (Bihar)",
    isShow: true,
  },
  {
    id:3,
    icon: <LiaSchoolSolid className="h-8 w-8 m-3" />,
    heading: "Senior Secondary (12th) in Science",
    subheading: "From BSEB (patna)",
    isShow: true,
  },
  {
    id:4,
    icon: <BiSolidSchool className="h-8 w-8 m-3" />,
    heading: "Secondary(10th)",
    subheading: "From BSEB (patna) ",
    isShow: false,
  },
];

const myExeperience = [
  {
    id:1,
    icon: <MdWorkOutline className="h-8 w-8 m-3" />,
    heading: "Completed 1 month internship",
    subheading: "From Bharat intern.(10jan-10feb) completed 3 project These are : user authorization and authentication using MERN , Portfolio using React.js , Blog full stack web app using MERN stack.",
    isShow: false,
  },
]

function Academics() {
  return (
    <Fragment>
      <h3 className="text-4xl font-semibold">
        Acad<span className="text-cyan-600">e</span>mics
      </h3>
      <section className="w-full flex lg:flex-row flex-col justify-around items-start mt-5">
        <section className="lg:w-1/3 w-full">
          <div className="lg:w-96 w-full">
          <h1 className="text-cyan-700 text-3xl font-semibold">Education </h1>
          <div className="flex flex-col mt-5"></div>
          {myAcademics.map((ele) => (
            <Academic
              icon={ele.icon}
              heading={ele.heading}
              subheading={ele.subheading}
              isLineShow={ele.isShow}
            />
          ))}
          </div>
        </section>
        <section className="lg:w-1/3 w-full">
          <h1 className="text-cyan-700 text-3xl font-semibold">Experience</h1>
          <div className="flex flex-col mt-5"></div>
          {myExeperience.map((ele) => (
            <Academic
              icon={ele.icon}
              heading={ele.heading}
              subheading={ele.subheading}
              isLineShow={ele.isShow}
            />
          ))}
        </section>
      </section>
    </Fragment>
  );
}

export default Academics;
