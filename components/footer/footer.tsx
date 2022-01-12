import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid'

const navigation = {
    main: [
        { name: 'Home', href: '#' },
        { name: 'Goals', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Join', href: '#' },
    ],
    social: [
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Telegram',
            href: '#',
            icon: (props) => (
                <svg width="27" height="23" viewBox="0 0 27 23" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.85611 9.90144C9.10385 6.65564 13.9368 4.5158 16.355 3.48194C23.2594 0.530051 24.6941 0.0172768 25.6292 0.000164153C25.8349 -0.00337934 26.2947 0.0490124 26.5926 0.29746C26.8441 0.507244 26.9133 0.790633 26.9464 0.989531C26.9795 1.18843 27.0208 1.64153 26.988 1.99556C26.6138 6.03647 24.9949 15.8427 24.1713 20.3686C23.8228 22.2837 23.1365 22.9258 22.4722 22.9886C21.0284 23.1252 19.9321 22.0078 18.5337 21.0656C16.3455 19.5912 15.1094 18.6734 12.9854 17.2347C10.5307 15.572 12.122 14.6582 13.5209 13.1647C13.887 12.7738 20.2483 6.82634 20.3714 6.2868C20.3868 6.21933 20.4011 5.9678 20.2557 5.83499C20.1103 5.70217 19.8958 5.74759 19.7409 5.78371C19.5215 5.83491 16.0259 8.20984 9.25407 12.9085C8.26184 13.6088 7.36312 13.9501 6.55789 13.9322C5.6702 13.9125 3.96262 13.4163 2.69322 12.9921C1.13624 12.4719 -0.101213 12.1969 0.006541 11.3133C0.0626662 10.8532 0.679189 10.3825 1.85611 9.90144Z" fill="currentColor"/>
                </svg>
            ),
        },
    ],
}

export const Footer = () => (
    <footer className="bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                {navigation.main.map((item) => (
                    <div key={item.name} className="px-5 py-2">
                        <a href={item.href} className="text-base font-medium  text-white hover:text-gray-300">
                            {item.name}
                        </a>
                    </div>
                ))}
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
                {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-white hover:text-gray-300">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                ))}
            </div>
            <p className="mt-8 text-center text-base text-white">&copy; {new Date().getFullYear()} Boost Coin. All rights reserved.</p>
        </div>
    </footer>
);
