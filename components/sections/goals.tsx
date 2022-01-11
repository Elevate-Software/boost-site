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
        <div className="hero-bg-left absolute -bottom-52 left-0 -z-10">
            <svg className="w-full" width="301" height="691" viewBox="0 0 301 691" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1423_12670)">
                    <path
                        d="M-70 634.739L-261.912 378.673L-19.4497 196.956C51.2609 143.961 151.544 158.322 204.539 229.033C257.534 299.744 243.173 400.027 172.462 453.022L-70 634.739Z"
                        fill="#F0FDFA"/>
                </g>
                <g filter="url(#filter1_f_1423_12670)">
                    <path
                        d="M-154 255.221L-51.9803 105L90.2602 201.6C131.743 229.772 142.533 286.238 114.361 327.72C86.1887 369.203 29.7227 379.993 -11.7596 351.821L-154 255.221Z"
                        fill="#FEFCE8"/>
                </g>
                <defs>
                    <filter id="filter0_f_1423_12670" x="-317.912" y="108.979" width="610.428" height="581.759"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="28" result="effect1_foregroundBlur_1423_12670"/>
                    </filter>
                    <filter id="filter1_f_1423_12670" x="-259" y="0" width="494.053" height="472.514"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="52.5" result="effect1_foregroundBlur_1423_12670"/>
                    </filter>
                </defs>
            </svg>
        </div>
        <div className="hero-bg-right absolute -top-40 right-0 -z-10">
            <svg className="w-full" width="1262" height="1356" viewBox="0 0 1262 1356" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1423_12669)">
                    <ellipse rx="295.353" ry="293.376" transform="matrix(-1 0 0 1 973.353 275.376)" fill="#BBF7D0"/>
                </g>
                <circle cx="795.5" cy="440.5" r="253.5" stroke="white" strokeWidth="50"/>
                <g filter="url(#filter1_f_1423_12669)">
                    <ellipse cx="785.5" cy="572.5" rx="285.5" ry="283.5" fill="#FEF9C3"/>
                </g>
                <g filter="url(#filter2_f_1423_12669)">
                    <circle cx="1008" cy="186" r="325" fill="#F0FDFA"/>
                </g>
                <defs>
                    <filter id="filter0_f_1423_12669" x="178" y="-518" width="1590.71" height="1586.75"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1423_12669"/>
                    </filter>
                    <filter id="filter1_f_1423_12669" x="0" y="-211" width="1571" height="1567" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1423_12669"/>
                    </filter>
                    <filter id="filter2_f_1423_12669" x="560" y="-262" width="896" height="896" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="61.5" result="effect1_foregroundBlur_1423_12669"/>
                    </filter>
                </defs>
            </svg>
        </div>
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
                        A better way to send money
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
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
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>
                            </div>
                        </li>
                        <li
                            className="col-span-1 flex flex-col text-center border-2 border-gray-600 rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <CurrencyDollarIcon className="w-32 h-32 flex-shrink-0 mx-auto rounded-full text-green-600" />
                                <h3 className="mt-6 text-white font-medium">Play to Earn mobile app</h3>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>
                            </div>
                        </li>
                        <li
                            className="col-span-1 flex flex-col text-center border-2 border-gray-600 rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <CurrencyDollarIcon className="w-32 h-32 flex-shrink-0 mx-auto rounded-full text-green-600" />
                                <h3 className="mt-6 text-white font-medium">Reward Yielding NFTs</h3>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
