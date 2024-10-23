import React from "react";

export default function StayProductive() {
  return (
    <section className="pb-40">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-7 place-items-center">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt=""
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-4xl leading-[50px]">
            stay production,
            <br />
            wherever you are
          </h3>
          <div className="my-4 text-sm tracking-[0.8px]">
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              consectetur laboriosam eum at laudantium nam assumenda dolorum
              dolore odit numquam dolorem, a consequatur, impedit, veritatis
              quibusdam aperiam asperiores et totam.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              consectetur laboriosam eum at laudantium nam assumenda dolorum
              dolore odit numquam dolorem, a consequatur, impedit, veritatis
              quibusdam aperiam asperiores et totam.
            </p>
          </div>
          <a className="text-mainColor  hover:text-[#42b0d1] transition-colors duration-200 border-b-2 border-mainColor pb-1 flex items-center gap-4 w-fit" href="/">see how fylo works
          <img  className="w-5 h-5 object-contain animate-[moveRight_1s_ease-in-out_infinite]" src="/src/assets/images/icon-arrow.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
