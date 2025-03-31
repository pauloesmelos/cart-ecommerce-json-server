import { useState } from "react";
import { FaCommentAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Mobile from "../mobile";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const style = {
    header: {
      expand: "fixed overflow-auto w-full bg-white shadow-md shadow-neutral-200",
      notExpand: "w-full bg-white shadow-sm shadow-neutral-200"
    }
  }

  return (
    <header className={style.header.notExpand}>
      <Mobile state={mobile} setState={setMobile} />
      <nav className="w-full max-w-[1600px] mx-auto px-5 py-2">
        <div className="w-full flex items-center justify-between">
            <NavLink 
            to="/" 
            className="flex items-center gap-2 cursor-pointer group"
            >
              <h1 className="text-orange-500 text-xl font-semibold group-hover:opacity-70 duration-200">Chat Commerce</h1>
              <FaCommentAlt className="text-orange-500 text-2xl group-hover:opacity-70 duration-200" />
            </NavLink>
            <div className="hidden lg:flex items-center gap-10">
                <NavLink
                to="/cart"
                className="flex items-center gap-2 group"
                >
                    <p className="group-hover:text-orange-600 duration-150 text-sm">Meu carrinho</p>
                    <div className="relative">
                        <FaShoppingCart className="text-neutral-600 group-hover:text-orange-600 duration-150" />
                        <div className="px-2 w-[20px] h-[20px] rounded-full bg-orange-500 absolute top-[-10px] right-[-22px]
                        flex flex-col justify-center items-center">
                            <span className="text-white text-sm">2</span>
                        </div>
                    </div>      
                </NavLink>
                <NavLink
                 to="/save" 
                className="bg-neutral-200 rounded-full p-2 group hover:bg-neutral-100 cursor-pointer duration-150"
                >
                    <FaHeart className="text-neutral-500 group-hover:text-orange-500 duration-150" />
                </NavLink>
                <NavLink
                to="/login"
                className="px-6 py-2 bg-orange-500 rounded-md text-white cursor-pointer text-sm
                shadow-md shadow-button-login duration-150" 
                type="button"
                >
                    Login
                </NavLink>
            </div>
            <div 
            onClick={() => setMobile(state => !state)} 
            className="flex lg:hidden"
            >
              <IoMdMenu className="text-3xl text-orange-600 cursor-pointer hover:opacity-70 duration-75" />
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;