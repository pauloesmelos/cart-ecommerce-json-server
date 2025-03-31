import { FormEvent, useState } from "react";
import { FaCommentAlt, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useForm from "../../hooks/form/useForm";

const Auth = () => {
  const { 
    value: email, 
    handleChange: handleChangeEmail, 
    handleBlur: handleBlurEmail,
    error: errorEmail
} = useForm("email");
const { 
    value: password, 
    handleChange: handleChangePassword, 
    handleBlur: handleBlurPassword,
    error: errorPassword
} = useForm("password");
  const [hiddenPassword, setHiddenPassword] = useState(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  }
  const handleHiddenPassword = (): void => {
    setHiddenPassword(state => !state);
  }
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <div className="pb-7 flex justify-center">
            <h1 className="text-2xl font-bold text-orange-500 flex items-center gap-2">
                Chat Commerce
                <span>
                    <FaCommentAlt />
                </span>
            </h1>
        </div>
        <form onSubmit={handleSubmit} className="w-[440px] flex flex-col gap-5 px-10 py-12 bg-white rounded-lg
        shadow-md">
            <div className="flex flex-col gap-1">
                <label>E-mail</label>
                <div className="relative">
                    <FaUser className="absolute top-[13px] left-2 text-sm text-slate-500" />
                    <input 
                    className="w-full border border-neutral-300 rounded-lg px-8 py-2 focus:outline-2 focus:outline-orange-500" 
                    type="email" 
                    placeholder="Seu email"
                    onChange={handleChangeEmail}
                    value={email}
                    onBlur={handleBlurEmail}
                    />
                </div>
                {errorEmail && (
                    <div className="mt-2 flex items-center gap-2 p-2 bg-rose-100 text-rose-700 text-sm rounded-lg">
                        <span>😢</span>
                        <span className="w-full">{errorEmail}</span>
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label>Senha</label>
                <div className="relative">
                    <FaLock className="absolute top-[13px] left-2 text-sm text-slate-500" />
                    <input 
                    className="w-full border border-neutral-300 rounded-lg px-8 py-2 focus:outline-2 focus:outline-orange-500" 
                    type={hiddenPassword ? "text" : "password"} 
                    placeholder="Sua senha"
                    onChange={handleChangePassword}
                    value={password}
                    onBlur={handleBlurPassword}
                    />
                    <div>
                        {hiddenPassword ? (
                            <FaEyeSlash 
                            onClick={handleHiddenPassword} 
                            className="absolute text-xl top-[13px] right-3 cursor-pointer text-orange-400" 
                            />
                        ) : (
                            <FaEye 
                            onClick={handleHiddenPassword} 
                            className="absolute text-xl top-[13px] right-3 cursor-pointer text-orange-400" 
                            />
                        )}
                    </div>
                </div>
                {errorPassword && (
                    <div className="mt-2 flex items-center gap-2 p-2 bg-rose-100 text-rose-700 text-sm rounded-lg">
                        <span>😢</span>
                        <span className="w-full">{errorPassword}</span>
                    </div>
                )}
            </div>
            <button className="px-6 py-2 bg-orange-500 text-white font-medium rounded-lg cursor-pointer
            border border-orange-500 hover:bg-white hover:text-orange-500 duration-200 ease-linear">
                Entrar
            </button>
            <div>
                <a 
                href="#" 
                rel="noreferrer noopener" 
                target="_blank" 
                className="text-orange-500 font-medium border-b-2 border-transparent hover:border-orange-500
                duration-75 ease-linear"
                >
                    Esqueceu sua senha?
                </a>
            </div>
            <div>
                <p >
                    Não tem uma conta ?
                    <span className="px-4">
                        <a 
                        href="#" 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        className="text-orange-500 font-medium border-b-2 border-transparent hover:border-orange-500
                        duration-75 ease-linear"
                        >
                            Cadastrar-se
                        </a>
                    </span>
                </p>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <div className="w-full h-[1px] bg-neutral-300" />
                    <span className="px-5 text-neutral-300">ou</span>
                    <div className="w-full h-[1px] bg-neutral-300" />
                </div>
                <button className="flex items-center gap-4 bg-neutral-200 px-12 py-2 rounded-lg mt-4 mx-auto
                hover:scale-[1.08] cursor-pointer ease-linear duration-75 shadow-button-login-form">
                    <FcGoogle />
                    <span>
                        Google
                    </span>
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Auth;