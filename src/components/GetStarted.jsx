import React from "react";

export default function GetStarted() {
  return (
    <section>
      <div className="container ">
        <div className="relative">
          <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-md element-center flex-col w-[865px] max-w-full min-h-[275px] text-white text-center p-7">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              get early access today
            </h3>
            <p className="w-[620px] max-w-full mx-auto mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              harum delectus, laboriosam accusantium nobis, quod aspernatur,
              commodi corrupti vitae animi earum. Accusamus quis illum, ducimus
              inventore eaque harum odio repellendus.
            </p>
            <form className="w-full  flex justify-between items-center flex-wrap md:px-14 gap-7">
              <input
                className="w-full md:flex-1 h-[50px] rounded-[30px] pl-7 outline-none border-none text-black text-sm font-medium"
                type="email"
                placeholder="email@example.com"
              />
              <button
                className="w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdea4] transition-all duration-200 rounded-[30px]"
                type="submit"
              >
                get started for free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
