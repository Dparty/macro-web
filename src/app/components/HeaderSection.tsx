"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="w-[450px] h-[450px] relative">
            <Image
              src="/images/bg.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="ml-32 col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-2xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              致力為您
            </span>
            <br></br>
            <span>思考出最有效率的方案</span>
            <br></br>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-sm mb-6 lg:text-lg">
            客製化網站、套版網站、內部系統以及APP開發都是我們可以服務的範圍。我們致力於思考如何從使用者的角度出發，和您一起打造最佳的體驗！
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              了解更多
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                資訊
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
