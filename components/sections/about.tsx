import React from 'react';
import {CurrencyDollarIcon} from "@heroicons/react/solid";
import {CircleShape} from "../shapes/circle";
import {DiamondShape} from "../shapes/diamond";

export const AboutSection = () => (
    <section className="bg-black pb-20 2xl:pb-28 relative">
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

            <span className="animate-1 absolute right-16 top-60">
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
                  className="btn-style-2 inline-flex items-center justify-center bg-gray-800 text-white text-sm lg:text-base font-medium rounded transition-all duration-500 px-4 py-2 mb-2">ABOUT</span>
                    <h2 className="text-3xl lg:text-4xl 2xl:text-6xl leading-tight font-bold text-white">Smart and Secure Way to Invest In <span className="text-green-600">Crypto</span>.</h2>
                    <p className="text-lg md:text-xl leading-tight font-medium text-gray-400 my-6 2xl:my-12">
                        {/* With a state of the art DEX (Decentralized Exchange) and numerous projects in development Boost is poised to become one of the biggest names in crypto. Using our advanced tokenomics, our token holders will benefit from anti-whale mechanics and passive income rewards, ensuring Boost is one of the most decentralized cryptocurrencies in the world. */}
                        Boost 2.0, an ERC-20 utility token, is poised to become one of the biggest names in crypto. Using our advanced tokenomics, our token holders will benefit from anti-whale mechanics from an algorithmic smart contract that provides the foundation of Boost2.0.
                    </p>
                </div>
                <div className="lg:col-span-2 aos-init aos-animate" data-aos="fade-up">
                    {/**Content here **/}

                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 my-6">

                            <li
                                className="col-span-1 flex flex-col text-center rounded-lg shadow divide-y divide-gray-200"
                            >
                                <div className="flex-1 flex flex-col p-8">
                                    <CurrencyDollarIcon className="w-32 h-32 flex-shrink-0 mx-auto rounded-full text-green-600" />
                                    <h3 className="mt-6 text-white font-medium">Total Tax</h3>
                                    <p className="text-gray-300">7%</p>
                                </div>
                            </li>
                        <li
                            className="col-span-1 flex flex-col text-center rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <CurrencyDollarIcon className="w-32 h-32 flex-shrink-0 mx-auto rounded-full text-green-600" />
                                <h3 className="mt-6 text-white font-medium">Dev Wallet</h3>
                                <p className="text-gray-300">1%</p>
                            </div>
                        </li>
                        <li
                            className="col-span-1 flex flex-col text-center rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <CurrencyDollarIcon className="w-32 h-32 flex-shrink-0 mx-auto rounded-full text-green-600" />
                                <h3 className="mt-6 text-white font-medium">Buyback</h3>
                                <p className="text-gray-300">1%</p>
                            </div>
                        </li>
                        <li
                            className="col-span-1 flex flex-col text-center rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <CurrencyDollarIcon className="w-32 h-32 flex-shrink-0 mx-auto rounded-full text-green-600" />
                                <h3 className="mt-6 text-white font-medium">Use Wallet</h3>
                                <p className="text-gray-300">5%</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
