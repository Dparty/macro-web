"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const IntroSection = () => {
  return (
    <section id="about" className="lg:py-16">
      <div className="container mt-24 mx-auto px-12 py-4">

        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="mr-0 lg:mr-32 col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mb-4 text-xl sm:text-2xl lg:text-4xl lg:leading-normal font-extrabold">
              <span>提供給您具極致質感的網站設計</span>
              <br></br>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-sm mb-6">
              我們有過許多的專案經驗，曾經服務過上市櫃公司/知名電動機車/政府機關...等等大、小型網站。
              也有發行過屬於我們自己的 App 商品，在 Google play 商店與 App Store
              都有不錯的下載量與評價。
              數年來我們不斷累積客戶經驗，面對日新月異的視覺設計與開發技術，我們持續不懈的吸取國外網頁設計流行趨勢，以充實內部知識素質，
              提供客戶最新的網頁設計消息，讓您的網站可以經的起時間洪流的考驗！
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                立即諮詢
              </Link>
            </div>
          </div>
          <div className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="lg:w-[650px] lg:h-[650px] relative w-[250px] h-[250px]">
              <Image
                src="/images/bg.png"
                alt="hero image"
                // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntroSection;
