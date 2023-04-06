import { Link, Outlet, useSearchParams } from "react-router-dom";
import logo from '../public/logo-small.png';
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import './App.css';
import { useState } from "react";
function App() {
  const [ count, setCount ] = useState(false);
  return (
    <div>
      <nav className="text-xl flex items-center justify-around p-2 md:text-white navbar-nav-link">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div
            onClick={() => setCount(!count)}
            className="md:hidden cursor-pointer"
          >
            {count ? (
              <XMarkIcon className="h-10 w-10 text-white" />
            ) : (
              <Bars2Icon className="h-10 w-10 text-white" />
            )}
          </div>
          <div
            className={`list-none duration-200 md:sticky absolute md:flex md:gap-8 ${
              count ? "top-14 right-24 bg-purple-500 p-6 text-2xl rounded-lg" : "-top-36 right-24"
            }`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/meal">Meal</Link>
            </li>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App
