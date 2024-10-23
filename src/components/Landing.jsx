import React from "react";

export default function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              className="w-full"
              src="../src/assets/images/landing-img.png"
              alt=""
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] mb-3">
              all your files in one secure location <br />
              accessible anywhere
            </h1>
            <p className="text-lg px-[15px] md:w-[600px] max-w-full md:mx-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              dicta distinctio quaerat, at explicabo laudantium fugit doloribus
              repellendus recusandae ipsa.
            </p>
          </div>
          <a className="btn w-[200px] h-[60px] rounded-[30px] element-center text-white font-medium mb-6" href="/">get started</a>
        </div>
      </div>

      <div className='w-full h-[200px]'> 
    <img className='w-full  h-full' src="/src/assets/images/bg-curvy-desktop.svg" alt="" />
 </div>
    </section>
  );
}
