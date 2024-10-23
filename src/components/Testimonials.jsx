import React, { useState } from "react";
import TestimonialBox from "./TestimonialBox";


export default function Testimonials() {
  const [testData, seTestData] = useState([
    {
      id: 1,
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nihil.",
      image: "profile-1.jpg",
      position: "fonder & CEO,huddle",
      name: "ahmed",
    },
    {
      id: 2,
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nihil.",
      image: "profile-2.jpg",
      position: "fonder & CEO,huddle",
      name: "moohamed",
    },
    {
      id: 3,
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nihil.",
      image: "profile-3.jpg",
      position: "fonder & CEO,huddle",
      name: "eman",
    },
  ]);
  return (
    <section className="pb-80">
      <div className="container relative">
        <div>
          <img className="absolute left-5 top-[-35px]" src="/src/assets/images/bg-quotes.png" alt="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {testData.map((item) => (
            <TestimonialBox key={item.key} desc={item.desc} image={item.image} position={item.position} name={item.name}/>
          ))}

        </div>
      </div>
    </section>
  );
}
