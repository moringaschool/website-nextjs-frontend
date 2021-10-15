import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Nav({menu}) {
    return (
        <header id="main_navigation" className="sticky top-0 z-20 relative text-primary font-medium bg-white">
            <div className="relative z-20">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-8 sm:px-0 md:justify-start md:space-x-10 border-b-2 border-secondary">
                    <div className="py-2">
                        <a href="http://corporate.test" className="flex">
                            <img className="h-12 w-auto" src="http://corporate.test/wp-content/themes/moringa/public/images/logo.png" alt="Moringa School logo" />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button  type="button" className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="ms-hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
                    <nav className="flex space-x-10">

                    </nav>
                    <div className="flex flex-wrap">
                        <ul id="" className="flex items-center text-sm space-x-8">
                            <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-5" className="relative menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-5 nav-item"><a title="Courses" href="http://corporate.test/courses" className="uppercase transition duration-300 ease-in-out text-primary hover:text-secondary nav-link py-2">Courses</a>
                            <ul className="absolute w-96 grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 bg-inherit invisible transition duration-300 ease-in-out  top-8" role="menu">
                                <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-63" className="relative menu-item menu-item-type-post_type menu-item-object-courses menu-item-63 nav-item"><a title="Software Development In-person" href="http://corporate.test/courses/software-development-in-person/" className="dropdown-item">Software Development In-person</a></li>
                                <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-62" className="relative menu-item menu-item-type-post_type menu-item-object-courses menu-item-62 nav-item"><a title="Software Development Online" href="http://corporate.test/courses/software-development-online/" className="dropdown-item">Software Development Online</a></li>
                                <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-61" className="relative menu-item menu-item-type-post_type menu-item-object-courses menu-item-61 nav-item"><a title="Data Science Full-time" href="http://corporate.test/courses/data-science-full-time/" className="dropdown-item">Data Science Full-time</a></li>
                                <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-60" className="relative menu-item menu-item-type-post_type menu-item-object-courses menu-item-60 nav-item"><a title="Data Science Part-time" href="http://corporate.test/courses/data-science-part-time/" className="dropdown-item">Data Science Part-time</a></li>
                            </ul>
                        </li>
                            <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-6" className="relative menu-item menu-item-type-custom menu-item-object-custom menu-item-6 nav-item"><a title="Why Moringa School" href="http://corporate.test/why-moringa-school" className="uppercase transition duration-300 ease-in-out text-primary hover:text-secondary nav-link py-2">Why Moringa School</a></li>
                            <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-7" className="relative menu-item menu-item-type-custom menu-item-object-custom menu-item-7 nav-item"><a title="Financial Aid" href="http://corporate.test/financial-aid" className="uppercase transition duration-300 ease-in-out text-primary hover:text-secondary nav-link py-2">Financial Aid</a></li>
                            <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-8" className="relative menu-item menu-item-type-custom menu-item-object-custom menu-item-8 nav-item"><a title="Events" href="http://corporate.test/events" className="uppercase transition duration-300 ease-in-out text-primary hover:text-secondary nav-link py-2">Events</a></li>
                            <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-9" className="relative menu-item menu-item-type-custom menu-item-object-custom menu-item-9 nav-item"><a title="About Us" href="http://corporate.test/about-us" className="uppercase transition duration-300 ease-in-out text-primary hover:text-secondary nav-link py-2">About Us</a></li>
                            <li itemScope="itemScope" itemType="https://www.schema.org/SiteNavigationElement" id="menu-item-10" className="relative menu-item menu-item-type-custom menu-item-object-custom menu-item-10 nav-item"><a title="Blog" href="http://corporate.test/blog" className="uppercase transition duration-300 ease-in-out text-primary hover:text-secondary nav-link py-2">Blog</a></li>
                        </ul>
                        <a href="#" className="flex items-center">
                            <span className="pt-1 ml-0 sm:ml-6">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
            </div>
        </div>
</div>
    <div className="absolute z-20 top-0 inset-x-0 transition transform origin-top-right md:hidden">
    <div className="rounded-b-lg shadow-lg">
        <div className="shadow-xs text-white bg-primary divide-y-2 divide-gray-50">
            <div className="pb-3 px-5 space-y-6 sm:space-y-8 sm:pb-8">
                <div className="flex items-center justify-between">
                    <div className="py-2">
                        <img className="h-12 w-auto" src="http://corporate.test/wp-content/themes/moringa/public/images/logo-white.png" alt="Moringa School logo" />
                    </div>
                    <div className="-mr-2">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <nav className="space-y-8">
                    <ul id="" className="flex flex-col space-y-8">
                        <li><a href="http://corporate.test/courses">Courses</a></li>
                        <li><a href="http://corporate.test/courses/software-development-in-person/">Software Development In-person</a></li>
                        <li><a href="http://corporate.test/courses/software-development-online/">Software Development Online</a></li>
                        <li><a href="http://corporate.test/courses/data-science-full-time/">Data Science Full-time</a></li>
                        <li><a href="http://corporate.test/courses/data-science-part-time/">Data Science Part-time</a></li>
                        <li><a href="http://corporate.test/why-moringa-school">Why Moringa School</a></li>
                        <li><a href="http://corporate.test/financial-aid">Financial Aid</a></li>
                        <li><a href="http://corporate.test/events">Events</a></li>
                        <li><a href="http://corporate.test/about-us">About Us</a></li>
                        <li><a href="http://corporate.test/blog">Blog</a></li>
                    </ul>
                    <a href="#" className="flex items-center">
                        <span className="pt-1 ml-0 sm:ml-6">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </a>
                </nav>
        </div>
    </div>
</div>
</div>
</div>
</header>
    );
}
