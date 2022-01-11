import React from 'react';

export const PartnersSection = () => (
    <section className="hero-area relative">
        <div className="bg-black">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://cdn.discordapp.com/attachments/913192688327753758/930328692369027132/cmc_1.png" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://cdn.discordapp.com/attachments/913192688327753758/930326352555544586/etherscan-logo-light.png" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <img className="h-12" src="https://cdn.discordapp.com/attachments/913192688327753758/930328692058652722/DEXT2_2.png" alt="StaticKit" />
                    </div>
                    <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://cdn.discordapp.com/attachments/913192688327753758/930328692612268102/coingecko_3.png"
                            alt="Transistor"
                        />
                    </div>
                    <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                        <img
                            className="h-12"
                            src="https://cdn.discordapp.com/attachments/913192688327753758/930328692817821716/image_4.png"
                            alt="Workcation"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
