import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header className="bg-[#14213d]">
        <div className='container flex h-[40px]'>
          <div className='logo top-0'>
            <img src='./images/logoo.png' alt='' className="-mt-1" />
          </div>
          
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}><p className="text-white hover:text-[#fca311] px-5">{list.text}</p></Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div> */}

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)} className="bg-[#fca311]">{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
