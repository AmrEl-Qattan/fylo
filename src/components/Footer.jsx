import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [contact, setContact] = useState([
    {
      icon: "icon-phone.svg",
      text: "+201012121121",
    },
    {
      icon: "icon-email.svg",
      text: "example@flylo.com",
    },
  ]);
  const [links, setLinks] = useState([
    "about us",
    "contact us",
    "jobs",
    "terms",
    "press",
    "privacy",
    "blog",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section>
      <div className="container bg-[#0c1524] pt-80 md:pt-52 pb-24 text-white">
        <a href="/">
          <img
            className="w-[175px] h-[60px] object-contain"
            src="/src/assets/images/logo.svg"
            alt=""
          />
        </a>
        <div className="mt-7 flex justify-between flex-wrap flex-col md:flex-row gap-7">
          <div className="flex items-start gap-4 w-[340px] max-w-full">
            <img
              className="w-5 h-5 object-contain"
              src="/src/assets/images/icon-location.svg"
              alt=""
            />
            <p className="text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              vitae quaerat quia unde incidunt nam libero cum hic cumque minus!
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                className="flex items-center gap-4 mb-3 last-of-type:mb-0"
                key={item.text}
              >
                <img
                  className="w-5 h-5 object-contain"
                  src={`/src/assets/images/${item.icon}`}
                  alt=""
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {links.map((link) => (
              <li key={link}>
                <a
                  className="hover:text-mainColor transition-colors duration-200"
                  href={`/${link.toLocaleLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-4 w-full justify-center md:w-auto">
            {socialIcons.map((item) => (
              <li key={item}>
                <a className="group" href="">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                    {item === "facebook" ? (
                      <FaFacebook className="group-hover:text-mainColor transition-all duration-200" />
                    ) : item === "twitter" ? (
                      <FaTwitter className="group-hover:text-mainColor transition-all duration-200" />
                    ) : (
                      <FaInstagram className="group-hover:text-mainColor transition-all duration-200" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
