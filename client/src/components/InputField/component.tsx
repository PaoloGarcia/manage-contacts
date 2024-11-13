import { ChangeEvent } from "react";

import "./input-field.css";

type Props = {
   type?: string;
   name: string;
   placeholder: string;
   value: string;
   error: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function InputField({
   type = "text",
   name,
   placeholder,
   value,
   onChange,
   error
}: Props) {
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
