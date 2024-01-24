import Link from "next/link";
import Image from "next/image";
import {NAV} from "@/const";

// import {useState} from 'react'

import {HiMenuAlt1, HiX} from "react-icons/hi"



const Navbar = () => {
	// const [toggle, setToggle] = useState(false)

	return (


		<nav className="flexBetween bg-white fixed top-0 left-0 z-20 sm:px-14 w-full py-6">
			<Link href="/">
				<Image src="/Logo-Beauroi.png"  height={60} width={110} alt="Logo-Beauroi"/>
			</Link>
			{/* <div className="flex justify-center items-center"> */}
			  <div className="flex justify-center items-center">
  <ul className="hidden h-full md:gap-6 lg:gap-12 md:flex">
    {NAV.map((nav) => (
      <li key={nav.key} className="group">
        <Link
          className="regular-16 max-md:regular-14 text-gray-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          href={nav.href}
        >
          {nav.name}
        </Link>
        {nav.submenu && (
          <ul className="absolute hidden group-hover:block mt-2 py-2 bg-white border border-gray-200 shadow-lg">
            {nav.submenu.map((item) => (
              <li key={item.key} className="group">
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
                {item.description && (
                  <p className="px-4 text-gray-600 text-sm">{item.description}</p>
                )}
                {item.submenu && (
                  <ul className="absolute hidden group-hover:block mt-2 py-2 bg-white border border-gray-200 shadow-lg left-16 top-0">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.key} className="group">
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                        {subItem.description && (
                          <p className="px-4 text-gray-600 text-sm">{subItem.description}</p>
                        )}
                        {subItem.submenu && (
                          <ul className="absolute hidden group-hover:block mt-2 py-2 bg-white border border-gray-200 shadow-lg left-16 top-0">
                            {subItem.submenu.map((subSubItem) => (
                              <li key={subSubItem.key}>
                                <Link
                                  href={subSubItem.href}
                                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                >
                                  {subSubItem.name}
                                </Link>
                                {subSubItem.description && (
                                  <p className="px-4 text-gray-600 text-sm">{subSubItem.description}</p>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
  <div className="flex">
    <button className="py-2 max-md:self-auto max-sm:text-xs px-4 ml-8 font-bold text-sm border border-solid hover:bg-blue-400 rounded-md transition duration-300 bg-gradient-to-tr from-sky-100 via-cyan-300 to-red-200 border-gray">Sign Up</button>
    <HiMenuAlt1 className="mr-8 ml-8 text-3xl md:hidden cursor-pointer" />
  </div>
</div>;

			{/* </div> */}


			
		</nav>
	)
}

export default Navbar