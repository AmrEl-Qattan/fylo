import React, { useState } from "react";
import FeaturesBox from "./FeaturesBox";

export default function Features() {
  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your file ,anywhere",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias similique reiciendis possimus aut minus adipisci quas numquam. Qui consectetur repellendus perferendis excepturi natus, sed, aspernatur, ullam laboriosam quae iure exercitationem!",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real time collaboration",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias similique reiciendis possimus aut minus adipisci quas numquam. Qui consectetur repellendus perferendis excepturi natus, sed, aspernatur, ullam laboriosam quae iure exercitationem!",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias similique reiciendis possimus aut minus adipisci quas numquam. Qui consectetur repellendus perferendis excepturi natus, sed, aspernatur, ullam laboriosam quae iure exercitationem!",
    },
    {
      icon: "icon-security.svg",
      title: "security you can trust",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias similique reiciendis possimus aut minus adipisci quas numquam. Qui consectetur repellendus perferendis excepturi natus, sed, aspernatur, ullam laboriosam quae iure exercitationem!",
    },
  ]);
  return (
    <section className="pb-40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[865px] mx-auto max-w-full">
          {items.map((item) => (
            <FeaturesBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
