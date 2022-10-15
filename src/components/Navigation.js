import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { Link } from "react-router-dom";
import { BiTrip } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cust-yellow mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <p className="px-3 py-2 flex items-center text-3xl uppercase font-bold leading-snug text-white hover:opacity-75 drop-shadow-lg shadow-black">
              <Link to="/">
                <BiTrip />
              </Link>
            </p>

            <button
              className="text-white cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none drop-shadow-lg shadow-black"
              type="button"
              onClick={() => setOpen(!open)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" + (open ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 drop-shadow-lg shadow-black">
                  <Link to="/empty1">Empty 1</Link>
                </p>
              </li>
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 drop-shadow-lg shadow-black">
                  <Link to="/empty2">Empty 2</Link>
                </p>
              </li>
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 drop-shadow-lg shadow-black">
                  {token ? (
                    <button onClick={() => dispatch(logOut())}>Logout</button>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
