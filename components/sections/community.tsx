import React from 'react';
import {CircleShape} from "../shapes/circle";
import {DiamondShape} from "../shapes/diamond";

export const CommunitySection = () => (
    <section className="hero-area relative">
        <div className="bg-black pb-20 2xl:pb-28 pt-16 relative">
            <div className="absolute z-10 hidden xl:block opacity-25 2xl:opacity-100 top-0 bottom-0 right-0 left-0">

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
            <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                {/* <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block">Join our community today!</span>
                </h2> */}
                <h2 className="text-3xl lg:text-4xl 2xl:text-6xl leading-tight font-bold text-white">Join our <span className="text-green-600">Community</span> today!</h2>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-500"
                        >
                            <svg className="mr-2" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9688 2.34375C16.4063 2.34375 16.875 2.34375 18.2813 2.34375C19.5313 2.34375 20.1563 2.65625 20.625 2.8125C21.25 3.125 21.7188 3.28125 22.1875 3.75C22.6563 4.21875 22.9688 4.6875 23.125 5.3125C23.2813 5.78125 23.4375 6.40625 23.5938 7.65625C23.5938 9.0625 23.5938 9.375 23.5938 12.9688C23.5938 16.5625 23.5938 16.875 23.5938 18.2813C23.5938 19.5313 23.2813 20.1563 23.125 20.625C22.8125 21.25 22.6563 21.7188 22.1875 22.1875C21.7188 22.6563 21.25 22.9688 20.625 23.125C20.1563 23.2813 19.5313 23.4375 18.2813 23.5938C16.875 23.5938 16.5625 23.5938 12.9688 23.5938C9.375 23.5938 9.0625 23.5938 7.65625 23.5938C6.40625 23.5938 5.78125 23.2813 5.3125 23.125C4.6875 22.8125 4.21875 22.6563 3.75 22.1875C3.28125 21.7188 2.96875 21.25 2.8125 20.625C2.65625 20.1563 2.5 19.5313 2.34375 18.2813C2.34375 16.875 2.34375 16.5625 2.34375 12.9688C2.34375 9.375 2.34375 9.0625 2.34375 7.65625C2.34375 6.40625 2.65625 5.78125 2.8125 5.3125C3.125 4.6875 3.28125 4.21875 3.75 3.75C4.21875 3.28125 4.6875 2.96875 5.3125 2.8125C5.78125 2.65625 6.40625 2.5 7.65625 2.34375C9.0625 2.34375 9.53125 2.34375 12.9688 2.34375ZM12.9688 0C9.375 0 9.0625 0 7.65625 0C6.25 0 5.3125 0.312501 4.53125 0.625001C3.75 0.937501 2.96875 1.40625 2.1875 2.1875C1.40625 2.96875 1.09375 3.59375 0.625001 4.53125C0.312501 5.3125 0.15625 6.25 0 7.65625C0 9.0625 0 9.53125 0 12.9688C0 16.5625 0 16.875 0 18.2813C0 19.6875 0.312501 20.625 0.625001 21.4063C0.937501 22.1875 1.40625 22.9688 2.1875 23.75C2.96875 24.5313 3.59375 24.8438 4.53125 25.3125C5.3125 25.625 6.25 25.7812 7.65625 25.9375C9.0625 25.9375 9.53125 25.9375 12.9688 25.9375C16.4063 25.9375 16.875 25.9375 18.2813 25.9375C19.6875 25.9375 20.625 25.625 21.4063 25.3125C22.1875 25 22.9688 24.5313 23.75 23.75C24.5313 22.9688 24.8438 22.3438 25.3125 21.4063C25.625 20.625 25.7812 19.6875 25.9375 18.2813C25.9375 16.875 25.9375 16.4063 25.9375 12.9688C25.9375 9.53125 25.9375 9.0625 25.9375 7.65625C25.9375 6.25 25.625 5.3125 25.3125 4.53125C25 3.75 24.5313 2.96875 23.75 2.1875C22.9688 1.40625 22.3438 1.09375 21.4063 0.625001C20.625 0.312501 19.6875 0.15625 18.2813 0C16.875 0 16.5625 0 12.9688 0Z" fill="currentColor"/>
                                <path d="M12.9688 6.25C9.21875 6.25 6.25 9.21875 6.25 12.9688C6.25 16.7188 9.21875 19.6875 12.9688 19.6875C16.7188 19.6875 19.6875 16.7188 19.6875 12.9688C19.6875 9.21875 16.7188 6.25 12.9688 6.25ZM12.9688 17.3438C10.625 17.3438 8.59375 15.4688 8.59375 12.9688C8.59375 10.625 10.4688 8.59375 12.9688 8.59375C15.3125 8.59375 17.3438 10.4688 17.3438 12.9688C17.3438 15.3125 15.3125 17.3438 12.9688 17.3438Z" fill="currentColor"/>
                                <path d="M19.8438 7.65625C20.7067 7.65625 21.4063 6.9567 21.4063 6.09375C21.4063 5.23081 20.7067 4.53125 19.8438 4.53125C18.9808 4.53125 18.2813 5.23081 18.2813 6.09375C18.2813 6.9567 18.9808 7.65625 19.8438 7.65625Z" fill="currentColor"/>
                            </svg>

                            Join Instagram
                        </button>

                    </div>
                    <div className="ml-3 inline-flex">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-500"
                        >
                            <svg className="mr-2" width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.85611 9.90144C9.10385 6.65564 13.9368 4.5158 16.355 3.48194C23.2594 0.530051 24.6941 0.0172768 25.6292 0.000164153C25.8349 -0.00337934 26.2947 0.0490124 26.5926 0.29746C26.8441 0.507244 26.9133 0.790633 26.9464 0.989531C26.9795 1.18843 27.0208 1.64153 26.988 1.99556C26.6138 6.03647 24.9949 15.8427 24.1713 20.3686C23.8228 22.2837 23.1365 22.9258 22.4722 22.9886C21.0284 23.1252 19.9321 22.0078 18.5337 21.0656C16.3455 19.5912 15.1094 18.6734 12.9854 17.2347C10.5307 15.572 12.122 14.6582 13.5209 13.1647C13.887 12.7738 20.2483 6.82634 20.3714 6.2868C20.3868 6.21933 20.4011 5.9678 20.2557 5.83499C20.1103 5.70217 19.8958 5.74759 19.7409 5.78371C19.5215 5.83491 16.0259 8.20984 9.25407 12.9085C8.26184 13.6088 7.36312 13.9501 6.55789 13.9322C5.6702 13.9125 3.96262 13.4163 2.69322 12.9921C1.13624 12.4719 -0.101213 12.1969 0.006541 11.3133C0.0626662 10.8532 0.679189 10.3825 1.85611 9.90144Z" fill="currentColor"/>
                            </svg>

                            Join Telegram
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </section>
);
