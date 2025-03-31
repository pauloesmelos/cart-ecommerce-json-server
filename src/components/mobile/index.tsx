import { Dispatch, SetStateAction } from "react";
import { FaCommentAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

type MobileProps = {
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>
}

const Mobile = ({ state, setState }: MobileProps) => {
  const style = {
    active: "w-full h-screen fixed top-0 left-0 bg-orange-500 z-[100]",
    notActive: "hidden"
  }
  return (  
    <div className={state ? style.active: style.notActive}>
        <div className="w-full max-w-[1600px] mx-auto">
            <div className="w-full">
                {/* title */}
                <div className="w-full flex items-center justify-between bg-orange-500 px-5 py-2
                border-b border-orange-600/50">
                    <NavLink 
                    to="/" 
                    className="flex items-center gap-2"
                    >
                      <h1 className="text-white text-xl font-bold">Chat Commerce</h1>
                      <FaCommentAlt className="text-white text-2xl" />
                    </NavLink>
                    <IoClose 
                    onClick={() => setState(click => !click)} 
                    className="text-3xl text-white cursor-pointer hover:opacity-70 duration-75" 
                    />
                </div>
                {/* links */}
                <div className="w-full px-5 py-2 mt-16">
                  <ul className="flex flex-col gap-8 text-white text-xl">
                    <li>
                      <NavLink 
                      className="border-b-2 hover:border-orange-400 border-transparent duration-150" 
                      to="/"
                      >
                        Produtos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                      className="border-b-2 hover:border-orange-400 border-transparent duration-150" 
                      to="/cart"
                      >
                        Seu Carrinho
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                      className="border-b-2 hover:border-orange-400 border-transparent duration-150" 
                      to="/saves"
                      >
                        Itens Salvos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                      className="border-b-2 hover:border-orange-400 border-transparent duration-150" 
                      to=""
                      >
                        Gráfico de Promoções
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                      className="px-6 py-2 bg-white rounded-lg text-orange-500
                      hover:shadow-md shadow-orange-700 duration-150" 
                      to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mobile;