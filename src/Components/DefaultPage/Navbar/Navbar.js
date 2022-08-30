import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Outlet, Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  const list = [
    {
      id: 1,
      title: "TV",
      to: "/tv",
    },
    {
      id: 2,
      title: "Movies",
      to: "/movies",
    },
    {
      id: 3,
      title: "Sports",
      to: "/sports",
    },
    {
      id: 4,
      title: "Disney+",
      to: "/disney",
    },
    {
      id: 5,
      title: "KiDs",
      to: "/kids",
    },
  ]
  const [nav, setNav] = useState(false)

  return (
    <>
      <div className=" cont">
        <nav className="navver">
          <ul className="mainUL">
            {/* Hamburger  */}
            <div className="hamburger" onClick={() => setNav(!nav)}>
              {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
            {/* Hamburger  */}
            <li>
              <Link className="navigator logo" to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/archive/1/1e/20211014045934%21Disney%2B_Hotstar_logo.svg"
                  alt=""
                />
              </Link>
            </li>

            {list.map((eachList) => {
              return (
                <div key={eachList.id} className="ulLi">
                  <li>
                    <Link className="navigator" to={eachList.to}>
                      {eachList.title}
                    </Link>
                  </li>
                </div>
              )
            })}
          </ul>

          {/* Mobile Menu  */}
          {nav && (
            <ul className="mobileLinks">
              {list.map(({ id, to, title }) => (
                <li key={id}>
                  <Link
                    onClick={() => setNav(!nav)}
                    className="linker"
                    to={to}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {/* Mobile Menu  */}

          <div className="right">
            <input type="search" placeholder="Search" className="search" />
            <button className="subscribe-btn">Subscribe</button>
            <ul className="subUL">
              <li>
                <Link className="navigator" to="/login">
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* For Small Devices  */}

        {/* For Small Devices  */}
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
