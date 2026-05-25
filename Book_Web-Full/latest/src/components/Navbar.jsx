import react, {useState} from 'react'
import logo from '../assets/logoo.png'

const Navbar=()=>{
 return(
  <div className ="flex justify-between items-center mr-8 md:mr-15">

      {/*left div*/}
   <div className="flex items-center">
      <img src={logo} alt="Logo" className="md:h-30 md:w-60 w-40 h-20"/>
      <ul className="hidden md:flex gap-10 text-xl cursor-pointer">
        <li>Books</li>
        <li>Deals</li>
      </ul>
    </div>

    {/*right div*/}
      <div className="flex items-center gap-2 ">
        <div className="flex items-center bg-gray-100 w-[350px] p-2 rounded-full justify-between">
        <input type="text" className="w-auto  text-gray-900 flex-1 text-lg" placeholder="🔍 What do you want to read ?"/>
        <button className="border-1 border-gray-300 rounded-full px-1 py-1">
          Ctrl+K
        </button>
        </div>
        <button className="text-xl p-1">🔔</button>
        <button className="text-xl p-1">🛍️</button>
        <button className="text-xl p-1">👤</button>
      </div>
      

  </div>
 )
}

export default Navbar;