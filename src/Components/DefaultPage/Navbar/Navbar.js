import React from "react"
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

  return (
    <>
      <div className=" cont">
        <nav className="navver">
          <ul className="mainUL">
            <li>
              <Link className="navigator" to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/archive/1/1e/20211014045934%21Disney%2B_Hotstar_logo.svg"
                  alt=""
                />
              </Link>
            </li>

            {list.map((eachList) => {
              return (
                <div key={eachList.id}>
                  <li>
                    <Link className="navigator" to={eachList.to}>
                      {eachList.title}
                    </Link>
                  </li>
                </div>
              )
            })}
          </ul>

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
      </div>
        <Outlet />
    </>
  )
}

export default Navbar
