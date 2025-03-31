import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const options = {
    email: {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        empty: "O campo e-mail não pode estar vazio.",
        erro: "Por favor, preencha um e-mail válido."
    },
    password: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&+=!]{6,}$/,
        empty: "O campo senha não pode estar vazio.",
        erro: "Por favor, preencha uma senha válida.",
        erros: [
            "Mínimo de 6 caracteres.",
            "Pelo menos uma letra.",
            "Pelo menos um número.",
        ]
    }
}

interface UseFormHook {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    error: string,
    setError: Dispatch<SetStateAction<string>>,
    handleBlur: () => boolean
}
type FormProps = "email" | "password";

const useForm = (type: FormProps): UseFormHook => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  
  const checkError = (valueInput: string): boolean => {
    let functionReturn = false;
    if(valueInput.length === 0) {
        setError(options[type].empty);
    }
    else if(!options[type].regex.test(valueInput)) {
        setError(options[type].erro);
    }
    else {
        setError("");
        functionReturn = true;
    }
    return functionReturn;
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    checkError(value);
  }
  const handleBlur = (): boolean => {
    const bool = checkError(value);
    return bool;
  }

  return { value, setValue, handleChange, error, setError, handleBlur }
}

export default useForm;