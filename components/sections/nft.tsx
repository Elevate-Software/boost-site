import React from 'react';
import {CircleShape} from "../shapes/circle";
import {DiamondShape} from "../shapes/diamond";

export const NFTSection = () => (
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:col-span-3">
              <span
                  className="btn-style-2 inline-flex items-center justify-center bg-gray-800 text-white text-sm lg:text-base font-medium rounded transition-all duration-500 px-4 py-2 mb-2">Non-Fungible Token</span>
                    <h2 className="text-3xl lg:text-4xl 2xl:text-6xl leading-tight font-bold text-white">Reward yielding <span className="text-green-600">NFTs</span>.</h2>
                    <p className="text-lg md:text-xl leading-tight font-medium text-gray-400 my-6 2xl:my-12">Welcome to Boost, a platform consisting of the latest in Decentralized Financial tools designed by some of the top developers in the world and fueled by Boost Coin, the native cryptocurrency of the Boost ecosystem.</p>
                </div>
                <div className="lg:col-span-2 aos-init aos-animate" data-aos="fade-up">
                    <img style={{width: '430px', height: '500px'}} className="max-w-xl hidden lg:block" src="https://cdn.discordapp.com/attachments/913192688327753758/930320973377462272/nft_1.png" alt="title"/>
                </div>
            </div>
        </div>
    </section>
);
