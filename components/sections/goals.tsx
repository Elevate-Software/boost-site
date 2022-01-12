import React from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import {CurrencyDollarIcon} from "@heroicons/react/solid";
import {CircleShape} from "../shapes/circle";
import {DiamondShape} from "../shapes/diamond";

const features = [
    {
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
    },
]

export const GoalsSection = () => (
    <section className="relative">
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
        <div className="py-12 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2
                        className="btn-style-2 inline-flex items-center justify-center bg-gray-600 text-white text-sm lg:text-base font-medium rounded transition-all duration-500 px-4 py-2 mb-2">ABOUT</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        A better way to invest in crypto
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                        Boost 2.0 plans to bridge the gap between decentralized finance and utility, providing a massive opportunity to invest in innovation.
                    </p>
                </div>

                <div className="mt-10">
                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-6">

                        <li
                            className="col-span-1 flex flex-col text-center border-2 border-gray-600 rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <CurrencyDollarIcon className="w-32 h-32 flex-shrink-0 mx-auto rounded-full text-green-600" />
                                <h3 className="mt-6 text-white font-medium">Boostopia</h3>
                                <p className="text-gray-300">Our team plans to bring massive utility to Boost2.0 through the development of our very own Metaverse, Boostopia. This will provide a launchpad for huge potential in the future as we continue to build.</p>
                            </div>
                        </li>
                        <li
                            className="col-span-1 flex flex-col text-center border-2 border-gray-600 rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <CurrencyDollarIcon className="w-32 h-32 flex-shrink-0 mx-auto rounded-full text-green-600" />
                                <h3 className="mt-6 text-white font-medium">Play to Earn Mobile App</h3>
                                <p className="text-gray-300">The Boost team is pushing forward to create a play-to-earn mobile app for iOS allowing our holders to earn tokens through a mobile game involving our exclusive NFTs.</p>
                            </div>
                        </li>
                        <li
                            className="col-span-1 flex flex-col text-center border-2 border-gray-600 rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <CurrencyDollarIcon className="w-32 h-32 flex-shrink-0 mx-auto rounded-full text-green-600" />
                                <h3 className="mt-6 text-white font-medium">Reward Yielding NFTs</h3>
                                <p className="text-gray-300">There will be NFTTTTTTS</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
