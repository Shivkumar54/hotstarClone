import React from "react"
import "./footer.css"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
const Footer = () => {
  const menuList = [
    {
      id: 1,
      title: "About Disney+Hotstar",
    },
    {
      id: 2,
      title: "Terms of Use",
    },
    {
      id: 3,
      title: "Privacy Policy",
    },
    {
      id: 4,
      title: "FAQ",
    },
    {
      id: 1,
      title: "Feedback",
    },
    {
      id: 1,
      title: "carrers",
    },
  ]

  return (
    <div className="footer">
      <div className="linkss">
        <ul className="uler">
          {menuList.map((menu) => {
            return <li key={menu.id}>{menu.title}</li>
          })}
        </ul>
        <p className="footerPara">
          © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </p>
      </div>
      <div className="icon">
        <FaFacebookSquare size={50} className="iconer" />
        <FaTwitterSquare size={50} className="iconer" />
      </div>
      <div className="download">
          <img
            src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png?20170219160111"
            alt=""
          />
        </div>
    </div>
  )
}

export default Footer

