import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
<header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-red-700 md:min-w-[500px]">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a class="flex items-center">
                <img src="https://framerusercontent.com/images/CbSPyXMVIfZHAkc9RBEP7XhXEw.png" class="mr-3 h-6 sm:h-9" alt="Nfactorial Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Nfactorial Blog</span>
            </a>
            <div class=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link href="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/blog" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
                    </li>
                    <li>
                        <Link href="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    );
};

export default Header;