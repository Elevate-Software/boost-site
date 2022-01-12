import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline';

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

export const NavigationMenu = () => (
    <Popover className="relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                            className="h-12 w-auto"
                            src="https://cdn.discordapp.com/attachments/913192688327753758/930315335398203392/IMG_6765.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                        Home
                    </a>
                    <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                       Goals
                    </a>
                    <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                        About
                    </a>
                    <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                        Join
                    </a>
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a
                        href="#"
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-500"
                    >
                        Buy Now
                    </a>
                </div>
            </div>
        </div>

        <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Popover.Panel focus className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-900 divide-y-2 divide-gray-800">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://cdn.discordapp.com/attachments/913192688327753758/930315335398203392/IMG_6765.png"
                                    alt=""
                                />
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                                    <a href="" className="-m-3 p-3 flex items-center rounded-md">
                                        <span className="ml-3 text-base font-medium text-white hover:text-gray-300">Home</span>
                                    </a>
                                <a href="" className="-m-3 p-3 flex items-center rounded-md">
                                    <span className="ml-3 text-base font-medium text-white hover:text-gray-300">Goals</span>
                                </a>
                                <a href="" className="-m-3 p-3 flex items-center rounded-md">
                                    <span className="ml-3 text-base font-medium text-white hover:text-gray-300">About</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div>
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-500"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    </Popover>
);
