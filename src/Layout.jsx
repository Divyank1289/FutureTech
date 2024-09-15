import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/home" },
  { name: "Internship", href: "/internship" },
  { name: "Courses", href: "/courses" },
  { name: "Campus Ambassador", href: "/CA" },
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about" },
];

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-green-400">
      <header>
        <nav className="mx-auto flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8 bg-purple-800">
         
          <div className="inline-flex items-center space-x-2">
            <span className="font-bold text-white text-xl tracking-widest" to='/'>FutureTech</span>
          </div>

     
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8 items-center font-serif font-bold">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm font-semibold text-white hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="hidden lg:block">
            <Link
              to="#"
              className="text-sm font-semibold text-black bg-white rounded-xl hover:bg-gray-200 px-4 py-2 rounded-md"
            >
              Apply Now
            </Link>
          </div>

     
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
            >
             
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>

       
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold tracking-widest">FutureTechLogic</span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    {/* Close Menu Icon */}
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                        onClick={toggleMenu} 
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-6">
                    <Link
                      to="#"
                      className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-80px w-full block text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
