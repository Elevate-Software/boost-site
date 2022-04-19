import React from 'react';

export const TokenStats = () => (
    <section className="hero-area relative">
        <div className="bg-black">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <div className="px-4 py-5 overflow-hidden sm:p-6">
                            <div className="text-sm font-medium text-gray-400 truncate">Supply</div>
                            <div className="mt-1 text-3xl font-semibold text-white">300k</div>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <div className="px-4 py-5 overflow-hidden sm:p-6">
                            <div className="text-sm font-medium text-gray-400 truncate">Burn at Launch</div>
                            <div className="mt-1 text-3xl font-semibold text-white">33%</div>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <div className="px-4 py-5 overflow-hidden sm:p-6">
                            <div className="text-sm font-medium text-gray-400 truncate">Launch</div>
                            <div className="mt-1 text-3xl font-semibold text-white">SOON</div>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <div className="px-4 py-5 overflow-hidden sm:p-6">
                            <div className="text-sm font-medium text-gray-400 truncate">Starting Price</div>
                            <div className="mt-1 text-3xl font-semibold text-white">$0.50</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
