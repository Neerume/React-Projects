  import React,{useState} from 'react'
  import Logo from '../assets/logo.png'

  const Navbar = () => {
   const [active, setActive] = useState("Home");

   const handelActive=(value)=>{
    setActive(value);
   }
    
    return( 
      <div className="flex items-center justify-between px-6 py-2 ">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          <img 
            src={Logo} 
            alt="logo" 
              className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full object-cover"
          />
          <h1 className="font-semibold font-cause md:text-3xl">
            MeroCafe
          </h1>
        </div>

        <div className="flex items-center gap-15 ml-auto">

          {/* MENU */}
          <ul className="hidden md:flex gap-8 md:text-[1.2rem] font-cause">
            <li><a href="#menu" onClick={() => setActive("Menu")} className={active === "Menu" ? "underline underline-offset-10" : ""}>Menu</a></li>
            <li><a href="#contact" onClick={() => setActive("Contact")} className={active === "Contact" ? "underline underline-offset-10" : ""}>Contact</a></li>
            <li><a href="#about" onClick={() => setActive("About Us")} className={active === "About Us" ? "underline underline-offset-10" : ""}>About Us</a></li>
          </ul>

          <ul className="flex items-center gap-3">
            <li><a href="#search" onClick={() => setActive("Search")}>🔍</a></li>
            <li><a href="#profile" onClick={() => setActive("Profile")}>🦹‍♂️</a></li>
            <li className="rounded-full border border-black w-8 h-8 flex items-center justify-center"><a href="#add" onClick={() => setActive("Add Item")}>➕</a></li>

          </ul>
        </div>
        
      </div>
      
    );
  }

  export default Navbar;