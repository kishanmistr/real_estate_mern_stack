import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' w-full h-24 bg-gray-300 px-4 py-2 ' >
      <div className=' w-full h-full px-4 py-2 max-w-[1240px] mx-auto flex justify-between items-center gap-4 ' >
          <div className='  w-auto ' >
            <h1 className=' font-bold text-black sm:text-3xl text-normal ' > <span className=' text-red-500' > KISMI</span>CODE</h1>
          </div>
          <div className=' w-auto ' >
            <form action="" className=' w-full '  >
                <div>
                  <input type="text" placeholder=' Search... ' className=' w-full px-4 py-2 focus:outline-none text-xl rounded-md ' />
                </div>
            </form>
          </div>
          <ul className=' flex gap-3 items-center  ' >
            <Link to={"/"} >
                <li> Home </li>
            </Link>
            <Link to={"/about"} >
                <li> About </li>
            </Link>
            <Link to={"/signin"} >
                <li> Signin </li>
            </Link>
          </ul>
      </div>
    </div>
  )
}

export default Header
