import { ChangeEvent } from "react";
import "./input-field.scss";

type IInputFieldProps = {
   type?: string;
   name: string;
   placeholder: string;
   value: string;
   error: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function InputField({
   type = "text",
   name,
   placeholder,
   value,
   onChange,
   error
}: IInputFieldProps): JSX.Element {
   return (
      <div className="input-field">
         <input
            className={error ? "invalid-input" : ""}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
         <div className="invalid">{error}</div>
      </div>
   );
}

export default InputField;
