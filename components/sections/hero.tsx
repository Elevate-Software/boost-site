import React from 'react';
import {DiamondShape} from "../shapes/diamond";
import {CircleShape} from "../shapes/circle";

export const HeroSection = () => (
    <section className="bg-black pb-20 2xl:pb-28 pt-16 relative">
        <div className="absolute z-10 hidden xl:block opacity-25 2xl:opacity-100 top-0 bottom-0 right-0 left-0">

            <span className="animate-2 absolute left-28 bottom-52">
                        <CircleShape />
                  </span>
            <span className="animate-3 absolute left-32 top-40">
                    <DiamondShape />
                  </span>
            <span className="animate-2 absolute left-96 top-20">
                <CircleShape />
                  </span>

            <span className="animate-1 absolute right-52 top-60">
                <DiamondShape />
                  </span>
            <span className="animate-3 absolute right-16 bottom-32">
                 <CircleShape />
                  </span>
        </div>
        <div className="mx-auto container relative z-20">
            <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="hero-content xl:pr-20 lg:col-span-3">
              <span
                  className="btn-style-2 inline-flex items-center justify-center bg-gray-800 text-white text-sm lg:text-base font-medium rounded transition-all duration-500 px-4 py-2 mb-2">WELCOME</span>
                    <h2 className="text-3xl lg:text-4xl 2xl:text-6xl leading-tight font-bold text-white">Boost 2.0: The <span className="text-green-600">Future</span> Of DeFi.</h2>
                    <p className="text-lg md:text-xl leading-tight font-medium text-gray-400 my-6 2xl:my-12">Welcome to Boost 2.0, a platform consisting of the latest in Decentralized Financial tools designed by some of the top developers in the world and fueled by Boost Coin 2.0, the native cryptocurrency of Boostopia Metaverse Ecosystem.</p>
                    <div className="flex flex-wrap items-center">
                        <a href="https://t.me/Boost2p0"
                           className="btn-style-1 inline-flex w-full sm:w-auto items-center justify-center border border-2 border-green-600 text-green-600 2xl:text-xl font-bold rounded-full transition-all duration-500 hover:text-white px-8 py-2 lg:py-3.5 sm:mr-4 mt-2">
                            Join Telegram
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-2 mx-auto">
                    <img style={{width: '252px', height: '500px'}} className="max-w-xl hidden lg:block" src="https://cdn.discordapp.com/attachments/913192688327753758/930336975200849970/phone_500.png" alt="title"/>
                </div>
            </div>
        </div>
    </section>
);
