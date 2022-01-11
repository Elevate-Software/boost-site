import React from 'react';

export const PartnersSection = () => (
    <section className="hero-area relative">
        <div className="bg-black">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://cdn.discordapp.com/attachments/913192688327753758/930326352555544586/etherscan-logo-light.png" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://cdn.discordapp.com/attachments/913192688327753758/930326352555544586/etherscan-logo-light.png" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://cdn.discordapp.com/attachments/913192688327753758/930326352555544586/etherscan-logo-light.png" alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://cdn.discordapp.com/attachments/913192688327753758/930326352555544586/etherscan-logo-light.png"
                            alt="Transistor"
                        />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://cdn.discordapp.com/attachments/913192688327753758/930326352555544586/etherscan-logo-light.png"
                            alt="Workcation"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
