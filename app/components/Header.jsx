import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <header className=" border-4 border-primary5 w-fit p-2 rounded-2xl shadow-primary5/40 shadow-2xl m-auto flex justify-center font-abril mt-5 bg-white">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <span className="sr-only">Home</span>
                    <img src='/logoTest.svg' className=' flex ' width={70} height={100} alt='logo'></img>


                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex text-primary5  items-center gap-6 text-3xl">

                                <li>
                                    <Link href='/'>
                                        <h2 className=' hover:bg-primary5 hover:p-2 hover:text-white rounded-xl hover:shadow-primary5 hover:shadow-2xl duration-500'>Home</h2>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='/'>
                                        <h2 className=' hover:bg-primary5 hover:p-2 hover:text-white rounded-xl hover:shadow-primary5 hover:shadow-2xl duration-500'>Services</h2>
                                    </Link>
                                </li>

                                <li>
                                    <Link href='/'>
                                        <h2 className=' hover:bg-primary5 hover:p-2 hover:text-white rounded-xl hover:shadow-primary5 hover:shadow-2xl duration-500'>My Story</h2>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <h2 className=' hover:bg-primary5 hover:p-2 hover:text-white rounded-xl hover:shadow-primary5 hover:shadow-2xl duration-500'>Contact Me</h2>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <h2 className=' hover:bg-primary5 hover:p-2 hover:text-white rounded-xl hover:shadow-primary5 hover:shadow-2xl duration-500'>About Me</h2>
                                    </Link>
                                </li>





                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">

                                <div>
                                </div>

                            </div>

                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header