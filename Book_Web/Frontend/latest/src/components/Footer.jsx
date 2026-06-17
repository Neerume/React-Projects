import react from "react";
import footer from "../assets/footer.png";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";



const Footer=()=>{
  return(
    <div className=" border-t border-gray-200 shadow-[0_-6px_12px_rgba(0,0,0,0.1)]">
          <div className="mt-15 mx-20 flex md:flex-row gap-12 ">
        <div className='md:text-lg text-sm'>
        <ul className="space-y-5 text-gray-400">
          <li className="font-semibold text-xl text-black">DISCOVER</li>
          <li>Popular Mangas</li>
          <li>New Releases</li>
          <li>Used Books</li>
        </ul>
      </div>
      <div className='md:text-lg text-sm md:ml-20'>
        <ul className="space-y-5 text-gray-400">
          <li className="font-semibold text-xl text-black">GENRES</li>
          <li>Fiction</li>
          <li>Horror</li>
          <li>Action</li>
          <li>Fantasy</li>
          <li>Romance</li>
        </ul>
      </div>

         <div className="md:text-lg text:sm md:ml-20">
        <ul className="space-y-5 text-gray-400">
          <li className="font-semibold text-black">Support</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
      </div>

      <img src={footer} alt="footer" className="w-1/4 md:w-1/2" />

    </div>
    <div className="flex justify-between border border-gray-200 py-5">
      <div className="flex gap-10  md:mx-20">
        <p className="text-gray-400">© 2023 MangaParadise. All rights reserved.</p>
        <ul className="flex gap-5 text-gray-400">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="flex items-center text-sm text-gray-400 gap-2 md:mx-20">
        <p >Connect with Us:</p>
        <ul className="flex gap-2 text-xl" >
          <li><IoLogoInstagram /></li>
          <li><CiFacebook /></li>
        </ul>
      </div>
    </div>
  </div>

  );
}

export default Footer;